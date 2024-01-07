import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.deleteMany();
  console.log("Deleted records in post table");
  await prisma.user.deleteMany();
  console.log("Deleted records in user table");

  const userApiUrl = "https://jsonplaceholder.typicode.com/users";
  const postsApiUrl = "https://jsonplaceholder.typicode.com/posts";
  const [users, posts] = await Promise.all([
    axios.get(userApiUrl),
    axios.get(postsApiUrl),
  ]);

  await Promise.all(
    users.data?.map(
      async ({
        id,
        name,
        username,
        email,
      }: {
        id: number;
        name: string;
        username: string;
        email: string;
      }) => {
        await prisma.user.create({
          data: {
            id,
            name,
            username,
            email,
          },
        });
      }
    )
  );
  console.log("Added user data");

  await Promise.all(
    posts.data?.map(
      async ({
        id,
        title,
        body,
        userId,
      }: {
        id: number;
        title: string;
        body: string;
        userId: number;
      }) => {
        await prisma.post.create({
          data: {
            id,
            title,
            body,
            userId,
          },
        });
      }
    )
  );
  console.log("Added post data");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
