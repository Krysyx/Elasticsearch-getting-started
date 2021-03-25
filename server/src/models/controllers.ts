import { ExpressRequestFnMapper } from "./express";

export interface ElasticSearch {
  getBanksData: ExpressRequestFnMapper;
  getCharacters: ExpressRequestFnMapper;
  bulkCreate: ExpressRequestFnMapper;
}
