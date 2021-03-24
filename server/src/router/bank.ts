import { Router } from "express";
import elasticRouter from "../controllers/elasticsearch";

const router = Router();
const { getBanksData } = elasticRouter;

router.get("/", getBanksData);

export default router;
