"use server";

import { prisma } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deletePost(postId: number) {
  try {
    await prisma.post.delete({
      where: { id: postId },
    });
    revalidatePath("/posts");
    return { success: true, errorMessage: "" };
  } catch (error) {
    return {
      success: false,
      errorMessage: "Database Error: Failed to detele post.",
    };
  }
}
