import Router from "express";
import controller from "../controllers/elasticsearch";

const {
  bulkCreate,
  getCharacters,
  characterExistsById,
  getDocumentById,
  getDocuments,
  getBySuggestion,
  sql,
  updateById,
  updateQuery,
  reIndexDocuments,
} = controller;
const router = Router();

router.get("/:index", getCharacters);
router.get("/exists/:id", characterExistsById);
router.get("/exists/json/:index/:id", getDocumentById);
router.get("/suggest", getBySuggestion);
router.get("/msearch", getDocuments);
router.get("/sql", sql);
router.post("/bulk", bulkCreate);
router.post("/update/:id", updateById);
router.post("/update_query", updateQuery);
router.post("/re_index/:user", reIndexDocuments);

export default router;
