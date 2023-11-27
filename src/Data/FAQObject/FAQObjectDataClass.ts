import { provideDataClass, unstable_JrRestApi } from "scrivito";

export const FAQObject =  provideDataClass("FAQObject", {
  connection: {
    get: async (id) => {
      return unstable_JrRestApi.get(`../pisa-api/faq/${id}`)
    },

    index: async (params) => {
      const faqList: any = await unstable_JrRestApi.post(`../pisa-api/search-faqs`, { 
        data: {
          "query": {
            "NAM": "!''",
            "PSC_UPD": ">= '20231127000000'",
          },
          "sort": [
            {
              "PSC_CRE": true
            }
          ],
          "maximum": 10
        }

      });

      console.log(faqList, "asdfsadffaqList");
      

      return {results : faqList?.results}
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
