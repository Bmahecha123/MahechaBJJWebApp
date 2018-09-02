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

const STUBS = {
    techniques: [{
        name: 'Spider Stuff',
        pictures: {
            sizes: [{}, {}, {}, {}, {
                link: require('../assets/loadingImage.png')
            }]
        }
    }, {
        name: 'Lasso Stuff',
        pictures: {
            sizes: [{}, {}, {}, {}, {
                link: require('../assets/loadingImage.png')
            }]
        }
    }],
    technique: {
        name: 'Spider Stuff',
        pictures: {
            sizes: [{}, {}, {}, {}, {
                link: require('../assets/loadingImage.png')
            }]
        }
    },
    blogPost: {
        summary: 'Blog Post did not load. Please refresh and try to load again!',
        photos: [{
            original_size: {
                url: require('../assets/loadingImage.png')
            }
        }],
        caption: 'Blog Post'
    }
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
    generateSlug,
    STUBS
}