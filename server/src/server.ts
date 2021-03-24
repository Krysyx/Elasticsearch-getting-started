import express from "express";
import { config } from "dotenv";
config({ path: `${process.env.NODE_ENV}.env` });

const PORT = process.env.PORT || 7201;
const server = express();

server.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
