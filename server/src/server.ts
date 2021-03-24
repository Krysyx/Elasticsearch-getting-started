import express from "express";
import { config } from "dotenv";
import bankRouter from "./router/bank";
config({ path: `${process.env.NODE_ENV}.env` });

const PORT = process.env.PORT || 7201;
const server = express();

server.use(express.json());
server.use("/api/elasticsearch/banks", bankRouter);
server.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
