export const getAllProducts = async (req, res, next) => {};
export const getProductById = async (req, res, next) => {};
export const createProduct = async (req, res, next) => {};
export const updateProductByid = async (id, reqBody) => {
    // const { id } = req.params;
    const { title, price, categoryId, description } = req.body;

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
        await Category.updateOne(
            { _id: categoryId },
            { $push: { products: id } },
        );
    }

    return res.status(200).json(product);
};

export const softDeleteProduct = async (req, res, next) => {};
export const deleteProduct = async (req, res, next) => {};
export const restoreProduct = async (req, res, next) => {};
