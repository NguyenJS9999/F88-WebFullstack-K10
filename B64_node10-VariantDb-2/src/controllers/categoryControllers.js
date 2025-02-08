import env from "../configs/config.env.js";
import Category from "../models/Category.js";

export const getAllCategories = async (req, res, next) => {
  const categories = await Category.find({ isHidden: false, deletedAt: null });
  if (!categories) {
    return next(new Error("No categories found"));
  }
  return res.status(200).json(categories);
};

export const getCategoryById = async (req, res, next) => {
  const { id } = req.params;
  const category = await Category.findById(id).populate("products");
  if (!category) {
    return next(new Error("Category not found"));
  }
  return res.status(200).json(category);
};

export const createCategory = async (req, res, next) => {
  const { title, description } = req.body;
  const category = new Category({ title, description });
  await category.save();
  return res.status(201).json(category);
};

export const updateCategory = async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const category = await Category.findByIdAndUpdate(
    id,
    { title, description },
    { new: true },
  );
  if (!category) {
    return next(new Error("Category not found"));
  }
  return res.status(200).json(category);
};

export const softDeleteCategory = async (req, res, next) => {
  const { id } = req.params;
  const category = await Category.findByIdAndUpdate(
    id,
    { deletedAt: new Date(), isHidden: true },
    { new: true },
  );
  if (!category) {
    return next(new Error("Category not found"));
  }
  return res.status(200).json(category);
};

export const deleteCategory = async (req, res, next) => {
  const { id } = req.params;

  // Kiểm tra xem danh mục người dùng định xoá có phải danh mục mặc định không?
  if (id === env.CATEGORY_ID_DEFAULT) {
    return next(new Error("Cannot delete default category"));
  }

  const category = await Category.findByIdAndDelete(id);
  if (!category) {
    return next(new Error("Category not found"));
  }

  // Cách giải quyết 1: Update sản phẩm của danh mục bị xoá vào danh mục mặc định
  await Product.updateMany(
    { categoryId: id }, // categoryId bị xoá
    { categoryId: env.CATEGORY_ID_DEFAULT },
  );

  // Update danh mục mặc định
  await Category.updateOne(
    { _id: env.CATEGORY_ID_DEFAULT },
    { $push: { products: { $each: category.products } } },
  );

  // Cách giải quyết 2: Nếu còn sản phẩm thì cấm xoá danh mục (học viên tự triển khai cách này)

  return res.status(200).json(category);
};

export const restoreCategory = async (req, res, next) => {
  const { id } = req.params;
  const category = await Category.findByIdAndUpdate(
    id,
    { deletedAt: null, isHidden: false },
    { new: true },
  );
  if (!category) {
    return next(new Error("Category not found"));
  }
  return res.status(200).json(category);
};
