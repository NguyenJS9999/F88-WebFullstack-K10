import slugify from "slugify";

const slugMiddleware = (sourceField, targetField) => {
  return function (schema) {
    schema.pre("save", async function (next) {
      // Kiểm tra xem đã có slug chưa, nếu chưa thì tạo mới
      if (!this[targetField] && this[sourceField]) {
        let slug = slugify(`${this[sourceField]}-${this._id}`, {
          lower: true, // Chuyển tất cả thành chữ thường
          strict: true, // Loại bỏ ký tự đặc biệt
          locale: "vi", // Hỗ trợ tiếng Việt
        });

        // Đảm bảo slug là duy nhất, nếu trùng thì thêm số vào cuối
        // let existingDoc = await this.constructor.findOne({ [targetField]: slug });
        // let counter = 1;

        // while (existingDoc) {
        // 	slug = slugify(`${this[sourceField]}-${this._id}-${counter}`, {
        // 		lower: true,
        // 		strict: true,
        // 		locale: "vi",
        // 	});
        // 	existingDoc = await this.constructor.findOne({ [targetField]: slug });
        // 	counter++;
        // }

        this[targetField] = slug;
      }
      next();
    });
  };
};

export default slugMiddleware;
