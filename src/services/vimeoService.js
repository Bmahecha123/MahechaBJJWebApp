import { ENDPOINTS } from "../resources/constants";

export class VimeoService {
    getVimeoVideos = async (count) => {
        try {
            const request = await fetch(ENDPOINTS.getFullAccessTechniques(count));
            
            if (request.status !== 200) {
                // eslint-disable-next-line
                throw {status: request.status};
            }
    
            const json = await request.json();
            return json;
        } 
        catch (exception) {
            return exception;
        }
    };
}