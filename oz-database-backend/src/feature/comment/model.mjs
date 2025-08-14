import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const commentFindMany = async (pageStart, pageEnd, post_id) =>
  prisma.film_comment.findMany({
    where: {
      post_id,
    },
    include: {
      customer: {
        select: {
          first_name: true,
          last_name: true,
        },
      },
    },
    orderBy: {
      created_at: "desc",
    },
    skip: pageStart,
    take: pageEnd,
  });

export const commentCreate = async ({ post_id, customer_id, content }) =>
  prisma.film_comment.create({
    data: {
      content,
      post_id,
      customer_id,
    },
  });

export const commentUpdate = async (comment_id, post_id, newContent) => {
  return prisma.film_comment.update({
    where: { comment_id_post_id: { comment_id, post_id } },
    data: { content: newContent },
  });
};

export const commentDelete = async (comment_id, post_id) => {
  return prisma.film_comment.delete({
    where: { comment_id_post_id: { comment_id, post_id } },
  });
};
