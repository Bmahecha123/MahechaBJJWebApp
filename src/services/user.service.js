import { BASEURL, ENDPOINTS } from '../resources/constants';

export class UserService {
    login = async (email, password) => {
        try {
            let request = await fetch(`${BASEURL}${ENDPOINTS.login}`, {
                headers: {
                    'X-EMAIL': email,
                    'X-Password': password
                },
                mode: 'cors'
            });

            if (request.status !== 200) {
                // eslint-disable-next-line
                throw {status: request.status};
            }
    
            let json = await request.json();
            return json;
        }
        catch (exception) {
            return exception;
        }
    };

    getUser = async (email) => {
        try {
            let request = await fetch(`${BASEURL}${ENDPOINTS.findUserByEmail}`, {
                headers: {
                    'X-EMAIL': email
                },
                mode: 'cors'
            });

            if (request.status !== 200) {
                // eslint-disable-next-line
                throw {status: request.status};
            }
    
            let json = await request.json();
            return json;
        }
        catch (exception) {
            return exception;
        }
    };

    getUserById = async (id) => {
        try {
            let request = await fetch(`${BASEURL}${ENDPOINTS.findUserById}`, {
                headers: {
                    'X-Id': id
                },
                mode: 'cors'
            });

            if (request.status !== 200) {
                // eslint-disable-next-line
                throw 'Unable to fetch user.';
            }
    
            let json = await request.json();
            return json;
        }
        catch (exception) {
            return exception;
        }
    };

    getAllPlaylists = async (id) => {
        try {
            let request = await fetch(`${BASEURL}${ENDPOINTS.getPlaylists}${id}`, {
                mode: 'cors'
            });
            
            if (request.status !== 200) {
                // eslint-disable-next-line
                throw 'Unable to fetch Playlists.';
            }

            let json = await request.json();
            return json;
        }
        catch (exception) {
            return exception;
        }
    };

    getPlaylist = async (id, playlistName) => {
        try {
            let request = await fetch(`${BASEURL}${ENDPOINTS.getPlaylist}${id}`, {
                headers: {
                    'X-playlistName': playlistName
                },
                mode: 'cors'
            });

            if (request.status !== 200) {
                // eslint-disable-next-line
                throw 'Unable to get Playlist.';
            }

            let json = await request.json();
            return json;
        }
        catch (exception) {
            return exception;
        }
    };

    addPlaylist = async (id, body) => {
        try {
            let request = await fetch(`${BASEURL}${ENDPOINTS.addPlaylist}${id}`, {
                method: 'PUT',
                body: JSON.stringify(body),
                mode: 'cors'
            });

            return request.status === 201 ? true : false;
        }
        catch (exception) {
            return exception;
        }
    };

    updatePlaylist = async (id, playlist) => {
        try {
            let request = await fetch(`${BASEURL}${ENDPOINTS.updatePlaylist}${id}`, {
                method: 'POST',
                body: JSON.stringify(playlist),
                mode: 'cors'
            });

            return request.status === 201 ? true : false;
        }
        catch (exception) {
            return exception;
        }
    };

    deletePlaylist = async (id, playlist) => {
        try {
            let request = await fetch(`${BASEURL}${ENDPOINTS.deletePlaylist}${id}`, {
                method: 'POST',
                body: JSON.stringify(playlist),
                mode: 'cors'
            });

            return request.status === 200 ? true : false;
        }
        catch (exception) {
            return exception;
        }
    };

    deleteVideoFromPlaylist = async (videoName, id, playlist) => {
        try {
            let request = await fetch(`${BASEURL}${ENDPOINTS.deleteVideo}${id}`, {
                headers: {
                    'X-videoName': videoName
                },
                method: 'POST',
                body: JSON.stringify(playlist),
                mode: 'cors'
            });

            return request.status === 200 ? true : false;
        }
        catch (exception) {
            return exception;
        }
    };

    changePassword = async (id, answer, password) => {
        try {
            let request = await fetch(`${BASEURL}${ENDPOINTS.changePassword}`, {
                headers: {
                    'X-ID': id,
                    'X-ANSWER': answer,
                    'X-PASSWORD': password
                },
                method: 'POST',
                mode: 'cors'
            });

            return request.status === 200 ? true : false;
        }
        catch (exception) {
            return exception;
        }
    };
}