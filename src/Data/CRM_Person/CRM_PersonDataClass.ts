import { url } from "inspector";
import { provideDataClass, unstable_JrRestApi } from "scrivito";

type PersonArray = {
  results?: []
}

export const CRM_Person =  provideDataClass("CRM_Person", {
  connection: {
    get: async (id) => {
      return unstable_JrRestApi.get(`../pisa-api/persons/${id}`)
    },

    index: async (params) => {
      const personList: any = await unstable_JrRestApi.post(`../pisa-api/search-persons`, { 
        data: {
          "query": {
            "NAM": "!''",
          },
          "sort": [
            {
              "PSC_CRE": false
            }
          ],
          "maximum": 5
        }
      });

      return {results : personList?.results}
    },

    create: async (data) => {
      

      const newPerson: any = await unstable_JrRestApi.post(`../pisa-api/persons`, { data });

      return {
        _id: newPerson.id,
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
