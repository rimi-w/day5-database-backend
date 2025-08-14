import express from "express";
import { createOne, deleteOne, getAll, update } from "./controller.mjs";

const router = express.Router();
// router.get("/:commentId", getAll);
// router.post("/", createOne);

export const commentRouter = router;
export const commentGetRouter = getAll;
export const commentCreateRouter = createOne;
export const commentUpdateRouter = update;
export const commentDeleteRouter = deleteOne;
