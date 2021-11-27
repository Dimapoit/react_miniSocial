import * as axios from "axios";

const instanceAxios = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'fe9200bb-e4c6-47b0-a0da-dc482a059b47'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instanceAxios.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    unfollowUser(userId) {
        return instanceAxios.delete(`follow/${userId}`)
    },

    followUser(userId) {
        return instanceAxios.post(`follow/${userId}`)
    },

    getProfile(userId) {
        //return instanceAxios.get(`profile/${userId}`)
        console.warn('Устарейший API')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {

    getProfile(userId) {
        return instanceAxios.get(`profile/${userId}`)
    },

    getStatus(userId) {
        return instanceAxios.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instanceAxios.put(`profile/status`, {status: status})
    },

    savePhoto(filePhoto) {

        let formData = new FormData()
        formData.append('image', filePhoto)
        return instanceAxios.put(`profile/photo`, formData, { headers: {'Content-Type': 'multipart/form-data'} })
    }
}

export const authAPI = {

    me() {
        return instanceAxios.get('auth/me')
    },

    login(email, password, rememberMe = false) {
        return instanceAxios.post('auth/login', {
            email: email,
            password: password,
            rememberMe: rememberMe
        })
    },

    logout() {
        return instanceAxios.delete('auth/login')
    }
}