import express from "express";
import dotenv from "dotenv";
import { bankRouter, charactersRouter } from "./router";
dotenv.config({ path: `${process.env.NODE_ENV}.env` });

const PORT = process.env.PORT || 7201;
const server = express();

server.use(express.json());
server.use("/api/elasticsearch/banks", bankRouter);
server.use("/api/elasticsearch/characters", charactersRouter);
server.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
