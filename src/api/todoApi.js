import axiosClient from "./axiosClient";

const todoApi = {
    getAll: (params) => {
        const url = '/todoapp';
        return axiosClient.get(url, {params});
    },

    get: (id) => {
        const url = `/todoapp/${id}`;
        return axiosClient.get(url);
    },

    add: (data) => {
        const url = '/todoapp';
        return axiosClient.post(url, data);
    },

    update : (data) => {
        const url = `/todoapp/${data.id}`;
        return axiosClient.patch(url, data);
    },

    remove : (id) => {
        const url = `/todoapp/${id}`;
        return axiosClient.delete(url);
    }
}

export default todoApi;