import { ElasticSearch } from "../models/controllers";
import body from "../data/characters";
import client from "../config/client";

const controller: ElasticSearch = {
  getBanksData: async (req, res, next) => {
    try {
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
    } catch (error) {
      next(error);
    }
  },
  bulkCreate: async (req, res, next) => {
    try {
      const { body: results } = await client.bulk({ body, refresh: true });
      console.log(results);
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
