import { url } from "inspector";
import { provideDataClass, unstable_JrRestApi, currentUser, load } from "scrivito";

type PersonArray = {
  results?: []
}

export const GdprItem =  provideDataClass("GdprItemMB", {
  connection: {
    get: async (id) => {
      return unstable_JrRestApi.get(`../pisa-api/gdpr/${id}`)
    },

    index: async (params) => {
      const user = await load(currentUser)
      if (!user) return {results : null}

      const gdprList: any = await unstable_JrRestApi.post(`../pisa-api/search-gdpr-mb`, { 
        data: {
          "email": user.email(),
          "query": {
            "SRC_NAM_GER": "'Mercedes Benz'",
          },
          "sort": [
            {
              "PSC_CRE": false
            }
          ],
          "maximum": 6
          
        }
      });

      return {results : gdprList?.results}
    },

    create: async (data) => {
      

      const newPerson: any = await unstable_JrRestApi.post(`../pisa-api/persons`, { data });

      return {
        _id: newPerson.id,
      };
    },

    update: async (id, data) => {
      const gdpr: any = await unstable_JrRestApi.put(`../pisa-api/gdpr/${id}`, {data});
      return {};
    },

    delete: async (id) => { 
      return {};
    },
  },
});
