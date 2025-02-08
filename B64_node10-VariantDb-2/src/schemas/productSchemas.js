import { z } from "zod";

const productSchema = z.object({
  title: z.string().trim().min(3),
  price_default: z.number().min(0),
  stock_default: z.number().min(0),
  categoryId: z.string().optional(),
  description: z.string().optional(),
  slug: z.string().optional(),
  soldCount: z.number().min(0).optional(),
  rate: z.number().min(1).max(5).optional(),
});

export default productSchema;
