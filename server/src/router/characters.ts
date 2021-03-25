import Router from "express";
import controller from "../controllers/elasticsearch";

const { bulkCreate, getCharacters } = controller;
const router = Router();

router.get("/", getCharacters);
router.post("/bulk", bulkCreate);

export default router;
