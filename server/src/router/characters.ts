import Router from "express";
import controller from "../controllers/elasticsearch";

const { bulkCreate } = controller;
const router = Router();

router.post("/bulk", bulkCreate);

export default router;
