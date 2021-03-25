import { Router } from "express";
import elasticRouter from "../controllers/elasticsearch";

const { getBanksData } = elasticRouter;
const router = Router();

router.get("/", getBanksData);

export default router;
