import { ExpressRequestFnMapper } from "./express";

export interface ElasticSearch {
  getBanksData: ExpressRequestFnMapper;
  getCharacters: ExpressRequestFnMapper;
  getDocumentById: ExpressRequestFnMapper;
  getBySuggestion: ExpressRequestFnMapper;
  characterExistsById: ExpressRequestFnMapper;
  getDocuments: ExpressRequestFnMapper;
  bulkCreate: ExpressRequestFnMapper;
  sql: ExpressRequestFnMapper;
  updateById: ExpressRequestFnMapper;
  updateQuery: ExpressRequestFnMapper;
}
