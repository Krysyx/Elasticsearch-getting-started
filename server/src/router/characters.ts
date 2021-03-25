import Router from "express";
import controller from "../controllers/elasticsearch";

const {
  bulkCreate,
  getCharacters,
  characterExistsById,
  getDocumentById,
  getDocuments,
} = controller;
const router = Router();

router.get("/", getCharacters);
router.get("/exists/:id", characterExistsById);
router.get("/exists/json/:index/:id", getDocumentById);
router.get("/msearch", getDocuments);
router.post("/bulk", bulkCreate);

export default router;
