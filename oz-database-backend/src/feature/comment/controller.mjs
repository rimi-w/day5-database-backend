import getPageStartEnd from "../../util/getPageStartEnd.mjs";
import {
  commentCreate,
  commentDelete,
  commentFindMany,
  commentUpdate,
} from "./model.mjs";

export const getAll = async (req, res) => {
  const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  const post_id = req.params.postId;
  const { pageStart, pageEnd } = getPageStartEnd(Number(limit), Number(page));

  try {
    const result = await commentFindMany(pageStart, pageEnd, Number(post_id));
    if (!result) return res.status(404).json({ error: "Not Found" });
    return res.status(200).json({ data: result });
  } catch (e) {
    return res.status(500).json({ error: e.stack });
  }
};

export const createOne = async (req, res) => {
  const content = req.body.content;
  const customer_id = req.body.customerId;
  const post_id = req.body.postId;
  if (!post_id || !customer_id || !content)
    return res.status(400).json({ error: "Bad Request" });

  const like = {
    post_id,
    customer_id,
    content,
  };

  try {
    const result = await commentCreate(like);
    return res.status(200).json({ data: result });
  } catch (e) {
    return res.status(400).json({ error: e.stack });
  }
};

// PATCH /api/comments/:id

export const update = async (req, res) => {
  try {
    const postId = Number(req.params.postId);
    const commentId = Number(req.params.commentId);
    const { content } = req.body;
    if (!Number.isInteger(postId) || !content) {
      return res.status(400).json({ message: "잘못된 입력" });
    }

    const updated = await commentUpdate(commentId, postId, content);
    console.log(updated);
    return res.status(200).json({ data: updated });
  } catch (e) {
    if (e.code === "P2025")
      return res.status(404).json({ message: "댓글이 없어요." });
    console.error(e);
    res.status(500).json({ message: "서버 에러" });
  }
};

// DELETE /api/comments/:id
export const deleteOne = async (req, res) => {
  try {
    const postId = Number(req.params.postId);
    const commentId = Number(req.params.commentId);
    if (!Number.isInteger(postId) || !Number.isInteger(commentId)) {
      return res.status(400).json({ message: "잘못된 입력" });
    }

    await commentDelete(commentId, postId);
    return res.status(204).send(`댓글 삭제 완료`); // No Content
  } catch (e) {
    if (e.code === "P2025")
      return res.status(404).json({ message: "이미 없거나 삭제됨" });
    console.error(e);
    res.status(500).json({ message: "서버 에러" });
  }
};
