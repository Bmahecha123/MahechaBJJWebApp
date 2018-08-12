import { ENDPOINTS } from "../resources/constants";

export class BlogService {
    getMostRecentBlogPosts = async () => {
        try {
            const request = await fetch(ENDPOINTS.getAllBlogPosts);

            if (request.status !== 200) {
                // eslint-disable-next-line
                throw { status: request.status };
            }

            const json = await request.json();
            return json.response.posts[0];
        }
        catch (exception) {
            return exception;
        }
    };

    getAllBlogPosts = async () => {
        try {
            const request = await fetch(ENDPOINTS.getAllBlogPosts);
            
            if (request.status !== 200) {
                // eslint-disable-next-line
                throw { status: request.status };
            }

            const json = await request.json();
            return json.response.posts;
        }
        catch (exception) {
            return exception;
        }
    };
}