const BASEURL = process.env.USER_SERVICE || `https://mahechabjj.cfapps.io/`;

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
        return `https://api.vimeo.com/me/albums/4802536/videos?access_token=5d3d5a50aae149bd4765bbddf7d94952&version=3.2&per_page=${count}`;
    },
    getGiTechniques: (count) => {
        return `https://api.vimeo.com/me/albums/4802538/videos?access_token=5d3d5a50aae149bd4765bbddf7d94952&version=3.2&per_page=${count}`;
    },
    getNoGiTechniques: (count) => {
        return `https://api.vimeo.com/me/albums/4802539/videos?access_token=5d3d5a50aae149bd4765bbddf7d94952&version=3.2&per_page=${count}`;
    }
};

const LOCALSTORAGE = {
    userName: 'mahechaBjjUserName'
}

export {
    BASEURL,
    ENDPOINTS,
    LOCALSTORAGE
}