import { VideoObject } from "../interfaces";
import { constants, store, get } from "../utility/cache";

export const API = {
  fetchVideos: async (referesh:boolean = false): Promise<VideoObject[] | []> => {
    /*
    We will not consider the concept of pagination here because, 
    the list of videos in the project as provided through the Api link
    is limited and inconsequential.
    Also, errors in the try-catch block  could be thrown or handled 
    in different ways depending on implementation details.
    Also, since the data is not much, we could catch it in the phone's memory
    in order to improve performance
    */ 
   try {
     const url = 'https://66acf2fdf009b9d5c733eeea.mockapi.io/api/v1/videos';
     
     // get cached items
      const ExistingResource = await get(constants.cache_prefix+url);
      if(ExistingResource !== null && !referesh){
        return ExistingResource;
      }
      
      const result = await fetch(url);
      if(!result.ok){
        return [];
      }
      const data: VideoObject[] = await result.json();
      // store items
      await store(url,data);
      return data;
   } catch (error) {
      console.error(error);
      return [];
   }
  }
}