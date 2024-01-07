import { prisma } from "@/app/lib/prisma";

export async function fetchPosts(take?: number) {
  try {
    const data = await prisma.post.findMany({
      ...(take && { take }),
      include: {
        user: {
          select: { name: true },
        },
      },
    });

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch posts data.");
  }
}
