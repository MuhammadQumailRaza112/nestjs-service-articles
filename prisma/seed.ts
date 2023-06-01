import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.article.upsert({
    where: { title: 'add support m2/3' },
    update: {},
    create: {
      title: 'add support m2/3',
      body: 'asd asdjasidiasd jiasduiasud............',
      description: 'asdasdasd asdjaksdkasdkjkasd',
      published: false,
    },
  });
  const post2 = await prisma.article.upsert({
    where: { title: 'add support m2/6' },
    update: {},
    create: {
      title: 'add support m2/6',
      body: 'asd asdjasidiasd jiasduiasud............',
      description: 'asdasdasd asdjaksdkasdkjkasd',
      published: false,
    },
  });

  const post3 = await prisma.article.upsert({
    where: { title: 'add support m2/9' },
    update: {},
    create: {
      title: 'add support m2/9',
      body: 'asd asdjasidiasd jiasduiasud............',
      description: 'asdasdasd asdjaksdkasdkjkasd',
      published: false,
    },
  });

  const post4 = await prisma.article.upsert({
    where: { title: 'add support m2/7' },
    update: {},
    create: {
      title: 'add support m2/7',
      body: 'asd asdjasidiasd jiasduiasud............',
      description: 'asdasdasd asdjaksdkasdkjkasd',
      published: false,
    },
  });

  const post5 = await prisma.article.upsert({
    where: { title: 'add support m2/10' },
    update: {},
    create: {
      title: 'add support m2/10',
      body: 'asd asdjasidiasd jiasduiasud............',
      description: 'asdasdasd asdjaksdkasdkjkasd',
      published: true,
    },
  });

  console.log({ post1, post2, post3, post4 });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
