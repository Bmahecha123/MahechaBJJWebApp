import { ENDPOINTS } from "../resources/constants";

export class BlogService {
    getBlogPosts = async () => {
        try {
            const request = await fetch(ENDPOINTS.getAllBlogPosts);

            if (request.status !== 200) {
                throw { status: request.status };
            }

            const json = await request.json();
            return json.response.posts[0];
        }
        catch (exception) {
            return exception;
        }
    };
}