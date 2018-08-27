const BASEURL = process.env.USER_SERVICE || `https://mahechabjj.cfapps.io/`;
const BASEVIMEOURL = 'https://api.vimeo.com';

const ENDPOINTS = {
    login: 'user/findByEmail',
    findUserById: 'user/findById',
    findUserByEmail: 'user/getUser',
    changePassword: 'password/changePassword',
    addPlaylist: 'user/addplaylist/',
    getPlaylists: 'user/getplaylists/',
    getPlaylist: 'user/getplaylist/',
    updatePlaylist: 'user/updatePlaylists/',
    deletePlaylist: 'user/deleteplaylist/',
    deleteVideo: 'user/deleteVideo/',
    getFullAccessTechniques: (count) => {
        return `${BASEVIMEOURL}/me/albums/4802536/videos?access_token=5d3d5a50aae149bd4765bbddf7d94952&version=3.2&per_page=${count}`;
    },
    getGiTechniques: (count) => {
        return `${BASEVIMEOURL}/me/albums/4802538/videos?access_token=5d3d5a50aae149bd4765bbddf7d94952&version=3.2&per_page=${count}`;
    },
    getNoGiTechniques: (count) => {
        return `${BASEVIMEOURL}/me/albums/4802539/videos?access_token=5d3d5a50aae149bd4765bbddf7d94952&version=3.2&per_page=${count}`;
    },
    vimeoPaging: (nextUrl) => {
        return `${BASEVIMEOURL}${nextUrl}`;
    },
    getAllBlogPosts: 'https://api.tumblr.com/v2/blog/mahechabjj/posts?api_key=vPbcUP6WSBbQ6RiVQC5ZO9paNGQE7QT4kXGefQXKlkM2jBJdos'
};

const LOCALSTORAGE = {
    userName: 'mahechaBjjUserName'
}

const generateSlug = text => {
    return text.replace(' ', '_');
}

export {
    BASEURL,
    ENDPOINTS,
    LOCALSTORAGE,
    generateSlug
}