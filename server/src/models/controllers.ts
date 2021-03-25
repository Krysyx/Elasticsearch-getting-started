import { ExpressRequestFnMapper } from "./express";

export interface ElasticSearch {
  getBanksData: ExpressRequestFnMapper;
  bulkCreate: ExpressRequestFnMapper;
}
