This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting started

### 1. Download and install dependencies

Clone this repository:

```
git clone git@github.com:gabbiro/streaver-blog.git
```

Install npm dependencies:

```
cd streaver-blog
npm install
```

Use the current version of node:

```
nvm use
```

### 2. Create and seed the database

Run the following command to create your SQLite database. This also creates the `User` and `Post` tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```
npx prisma migrate dev
```

When `npx prisma migrate dev` is executed against a newly created database, seeding is also triggered. The seed file in [`prisma/seed.ts`](./prisma/seed.ts) will be executed and your database will be populated with the sample data.


### 3. Start the app

```
npm run dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.
