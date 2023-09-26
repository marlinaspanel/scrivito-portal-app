import { url } from "inspector";
import { provideDataClass, unstable_JrRestApi } from "scrivito";

type ServiceObjectArray = {
  results?: []
}

export const ServiceObject =  provideDataClass("ServiceObject", {
  connection: {
    get: async (id) => {
      return unstable_JrRestApi.get(`../pisa-api/service-objects/${id}`)
    },

    index: async (params) => {
      const serviceObjectList: any = await unstable_JrRestApi.post(`../pisa-api/search-service-objects`, { 
        data: {
          "query": {
            // "group_id": "PSA_ORG_LEA",
            //"PSC_CRE": ">=$TIME-1W",
            "SNR": "!''",
            "NAM": "!''"
          },
          "sort": [
            {
              "PSC_CRE": false
            }
          ],
          "maximum": 5
        }
      });

      return {results : serviceObjectList?.results}
    },

    create: async (data) => {
      

      const newServiceObject: any = await unstable_JrRestApi.post(`../pisa-api/service-objects`, { data });

      return {
        _id: newServiceObject.id,
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
