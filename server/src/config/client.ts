import { Client } from "@elastic/elasticsearch";
import { config } from "dotenv";
config({ path: `${process.env.NODE_ENV}.env` });

const client = new Client({
  node: process.env.ELASTICSEARCH_URL,
  auth: {
    username: process.env.ELASTICSEARCH_USERNAME!,
    password: process.env.ELASTICSEARCH_PASSWORD!,
  },
});

export default client;
