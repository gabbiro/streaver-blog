import { prisma } from "@/app/lib/prisma";

export async function fetchFilteredPosts(take?: number | null, query?: string | null) {
  try {
    const data = await prisma.post.findMany({
      ...(take && { take }),
      ...(query && {
        where: {
          user: {
            name: {
              contains: query,
            },
          },
        },
      }),
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
