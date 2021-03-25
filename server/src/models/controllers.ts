import { ExpressRequestFnMapper } from "./express";

export interface ElasticSearch {
  getBanksData: ExpressRequestFnMapper;
  getCharacters: ExpressRequestFnMapper;
  getDocumentById: ExpressRequestFnMapper;
  characterExistsById: ExpressRequestFnMapper;
  getDocuments: ExpressRequestFnMapper;
  bulkCreate: ExpressRequestFnMapper;
}
