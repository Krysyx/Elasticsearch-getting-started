import express from "express";
import { config } from "dotenv";
import { Client } from "@elastic/elasticsearch";
config({ path: `${process.env.NODE_ENV}.env` });

const PORT = process.env.PORT || 7201;
const server = express();
const client = new Client({
  node: "http://elastic:krysyx@localhost:9200",
});

server.use(express.json());
server.use("/banks");
server.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
