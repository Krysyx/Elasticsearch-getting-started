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
  getCharacters: async (req, res, next) => {
    try {
      const { body } = await client.search({
        index: "got",
        body: { query: { match_all: {} } },
      });

      return res.status(200).json(body);
    } catch (error) {
      next(error);
    }
  },
  getDocumentById: async ({ params: { id, index } }, res, next) => {
    try {
      const { body } = await client.get({ index, id });
      return res.status(200).json(body);
    } catch (error) {
      next(error);
    }
  },
  characterExistsById: async ({ params: { id } }, res, next) => {
    try {
      const { body } = await client.exists({ index: "got", id });
      return res.status(200).json(body);
    } catch (error) {
      next(error);
    }
  },
  bulkCreate: async (req, res, next) => {
    try {
      const { body: results } = await client.bulk({ body, refresh: true });
      return res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  },
  getDocuments: async (req, res, next) => {
    try {
      const { body } = await client.msearch({
        body: [
          { index: "got" },
          { query: { match: { user: "tyrion" } } },
          { index: "got" },
          { query: { range: { id: { gte: 3 } } } },
        ],
      });

      return res.status(200).json(body);
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
