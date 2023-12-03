import { provideDataClass, unstable_JrRestApi } from "scrivito";

export const CRM_QuoteObject =  provideDataClass("CRM_QuoteObject", {
  connection: {
    get: async (id) => {
      return unstable_JrRestApi.get(`../pisa-api/quotes/${id}`)
    },

    index: async (params) => {
      const quoteList: any = await unstable_JrRestApi.post(`../pisa-api/search-quotes`, { 
        data: {
          "query": {
            "NAM": "!''",
            "CON_GID": "B714FFAEA1A449B0A67CCFCAE1479221",
          },
          "sort": [
            {
              "PSC_CRE": true
            }
          ],
          "maximum": 10
        }

      });
      

      return {results : quoteList?.results}
    },

    create: async (data) => {
      return {
        _id: "",
      };
    },

    update: async (id, data) => {
      return {};
    },

    delete: async (id) => { 
      return {};
    },
  },
});
