import { ElasticSearch } from "../models/controllers";
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
};

export default controller;
