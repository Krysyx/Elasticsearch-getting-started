import Router from "express";
import controller from "../controllers/elasticsearch";

const { bulkCreate, getCharacters, characterExistsById, getDocumentById } = controller;
const router = Router();

router.get("/", getCharacters);
router.get("/exists/:id", characterExistsById);
router.get("/exists/json/:index/:id", getDocumentById);
router.post("/bulk", bulkCreate);

export default router;
