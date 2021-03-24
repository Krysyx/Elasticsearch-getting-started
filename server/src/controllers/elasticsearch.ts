import { ElasticSearch } from "../models/controllers";
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

const controller: ElasticSearch = {
  getBanksData: async (req, res, next) => {
    const {
      body: {
        hits: { hits: results },
      },
    } = await client.search({
      index: "bank",
      body: {
        query: {
          match_all: {},
        },
        sort: [
          {
            account_number: "asc",
          },
        ],
      },
    });

    return res.status(200).json(results);
  },
};

export default controller;
