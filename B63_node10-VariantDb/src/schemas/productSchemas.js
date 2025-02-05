import { z } from "zod";

const productSchema = z.object({
  title: z.string().trim().min(3),
  // price: z.number().min(0),
  categoryId: z.string().optional(),
  description: z.string().optional(),
  slug: z.string().optional(),
  soldCount: z.number().min(0).optional(),
  // stock: z.number().min(0).optional(),
  rate: z.number().min(1).max(5).optional(),
});

/**
 * ! Khi bổ sung biến thể sản phẩm, thì cần thêm thông tin chính trước, sau đó mới thêm biến thể, không nên ngược lại.
 * * Chính vì vậy mà không có giá và stock sản phẩm ở đây, vì giá sản phẩm có thể thay đổi theo biến thể.
 */

export default productSchema;
