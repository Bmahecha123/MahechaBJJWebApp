
export class VimeoService {
    getVimeoVideos = async (endpoint) => {
        try {
            const request = await fetch(endpoint);
            
            if (request.status !== 200) {
                // eslint-disable-next-line
                throw {status: request.status};
            }
    
            const json = await request.json();
            return json;
        } catch (exception) {
            return exception;
        }
    };
}