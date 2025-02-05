import Category from "../models/Category.js";
import Product from "../models/Product.js";
import mongoose from "mongoose";
import env from "../configs/config.env.js";

export const getAllProducts = async (req, res, next) => {
  // const products = await Product.find({
  //   isHidden: false,
  //   deletedAt: null,
  // }).populate("categoryId", "title");

  /**
   * Khi lấy danh sách sản phẩm kèm biến thể thì dùng cách này:
   */

  const products = await Product.aggregate([
    {
      $match: {
        isHidden: false,
        deletedAt: null,
      },
    },
    {
      $lookup: {
        from: "categories",
        localField: "categoryId",
        foreignField: "_id",
        as: "category",
      },
    },
    {
      $unwind: { path: "$category", preserveNullAndEmptyArrays: true },
    },
    {
      $lookup: {
        from: "productvariants",
        localField: "_id",
        foreignField: "productId",
        as: "variants",
      },
    },
    {
      $unwind: { path: "$variants", preserveNullAndEmptyArrays: true },
    },
    {
      $group: {
        _id: "$_id",
        title: { $first: "$title" },
        categoryId: { $first: "$categoryId" },
        description: { $first: "$description" },
        slug: { $first: "$slug" },
        totalStock: { $sum: "$variants.stock" },
        variants: { $push: "$variants" },
      },
    },
  ]);

  if (!products) {
    return next(new Error("No products found"));
  }
  return res.status(200).json(products);
};

export const getProductById = async (req, res, next) => {
  const { id } = req.params;
  // const product = await Product.findById(id)
  //   .populate("categoryId", "title")
  //   .populate("variants");

  const product = await Product.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(id) },
    },
    {
      $lookup: {
        from: "productvariants",
        localField: "_id",
        foreignField: "productId",
        as: "variants",
      },
    },
    {
      $unwind: { path: "$variants", preserveNullAndEmptyArrays: true },
    },
    {
      $group: {
        _id: "$_id",
        title: { $first: "$title" },
        categoryId: { $first: "$categoryId" },
        description: { $first: "$description" },
        slug: { $first: "$slug" },
        totalStock: { $sum: "$variants.stock" },
        variants: { $push: "$variants" },
      },
    },
  ]);

  if (!product) {
    return next(new Error("Product not found"));
  }
  return res.status(200).json(product);
};

export const createProduct = async (req, res, next) => {
  let { title, price, categoryId, description } = req.body;

  /**
   * Các bước tạo sản phẩm chính.
   * Bước 1: Kiểm tra xem categoryId có tồn tại không?
   * Bước 2: Nếu không tồn tại, sử dụng categoryId mặc định.
   * Bước 3: Tạo sản phẩm và lưu vào database.
   * Bước 4: Thêm id sản phẩm vào danh mục trong database.
   * Bước 5: Trả về sản phẩm vừa tạo và thông báo thành công (Lúc này sản phẩm chưa có biến thể).
   */

  if (!categoryId || !mongoose.Types.ObjectId.isValid(categoryId)) {
    // Bước 1: Nếu Id danh mục lỗi hoặc không có, sử dụng id danh mục mặc định
    categoryId = env.CATEGORY_ID_DEFAULT;
  } else {
    // Bước 2: Nếu Id danh mục hợp lệ, kiểm tra xem danh mục có thực sự còn tồn tại không
    const category = await Category.findById(categoryId);
    if (!category) {
      return next(new Error("Category not found"));
    }
  }

  // Bước 3: Tạo sản phẩm và lưu vào database
  const product = await Product.create({
    title,
    price,
    categoryId,
    description,
  });

  // Bước 4: Thêm id sản phẩm vào danh mục trong database
  await Category.updateOne(
    { _id: categoryId },
    { $push: { products: product._id } },
  );

  // Bước 5: Trả về sản phẩm vừa tạo và thông báo thành công
  return res.status(201).json(product);
};

export const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const { categoryId } = req.body;

  // Kiểm tra xem categoryId chuẩn bị cập nhật có còn tồn tại không?
  const category = await Category.findById(categoryId);
  if (!category) {
    return next(new Error("Category not found"));
  }

  // Cập nhật sản phẩm
  const product = await Product.findByIdAndUpdate(
    id,
    { title, price, categoryId, description },
    { new: true, timestamps: true },
  );

  // Nếu như có sự cập nhật categoryId thì xoá id sản phẩm khỏi danh mục cũ và thêm id sản phẩm vào danh mục mới
  if (product.categoryId.toString() !== categoryId) {
    await Category.updateOne(
      { _id: product.categoryId },
      { $pull: { products: id } },
    );
    await Category.updateOne({ _id: categoryId }, { $push: { products: id } });
  }

  return res.status(200).json(product);

  // Thông thường việc kiểm tra nhiều điều kiện kép để thực hiện một transaction sẽ được thực hiện bằng cách sử dụng thư viện như mongoose-transaction hoặc transaction trong MongoDB.
};

export const softDeleteProduct = async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(
    id,
    { deletedAt: new Date(), isHidden: true },
    { new: true },
  );
  if (!product) {
    return next(new Error("Product not found"));
  }

  return res.status(200).json(product);
};

export const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return next(new Error("Product not found"));
  }

  // Xoá id sản phẩm khỏi danh mục
  await Category.updateOne(
    { _id: product.categoryId },
    { $pull: { products: id } },
  );

  return res.status(200).json(product);
};

export const restoreProduct = async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(
    id,
    { deletedAt: null, isHidden: false },
    { new: true },
  );

  if (!product) {
    return next(new Error("Product not found"));
  }

  // Thêm id sản phẩm vào danh mục
  await Category.updateOne(
    { _id: product.categoryId },
    { $push: { products: id } },
  );

  return res.status(200).json(product);
};
