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
    deleteVideo: 'user/deleteVideo/'
};

const LOCALSTORAGE = {
    userName: 'mahechaBjjUserName'
}

export {
    BASEURL,
    ENDPOINTS,
    LOCALSTORAGE
}