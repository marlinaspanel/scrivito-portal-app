import { userInfo } from "os";
import { provideDataClass, unstable_JrRestApi, currentUser, load } from "scrivito";
export const PastAppointment =  provideDataClass("PastAppointment", {
    connection: {
        get: async (id) => {
            
          return unstable_JrRestApi.get(`../pisa-api/activities/${id}`)
        },
    
        index: async (params) => {
          const appList: any = await unstable_JrRestApi.post(`../pisa-api/search-activities`, { 
            
            data: {
              "query": {
                "NAM": "!''",
                "END_DAT": "<'20231204000000'",
              },
              "sort": [
                {
                  "BEG_DAT": true
                }
              ],
              "maximum": 10
            }
    
          });
          
          const user = await load(currentUser)
          console.log(user?.email(), "email");
          console.log(appList, "appList");
         
          
    
          return {results : appList?.results}
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