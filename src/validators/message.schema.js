import { z } from "zod";

const MessageSchema = z.object({
  body: z.string(),
  from: z.string(),
  isGroupMsg: z.boolean().optional(),
});

export function validateMessage(message) {
  const result = MessageSchema.safeParse(message);

  if (!result.success) {
    return { success: false };
  }

  return {
    success: true,
    data: result.data,
  };
}
