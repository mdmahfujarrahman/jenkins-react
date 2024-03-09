import axios from "axios";
const API = axios.create({
    baseURL: "http://localhost:3006/api/v1",
});

const getAllTask = () => API.get(`/taskManegment/getAllTask/`);

const updateTask = (payload) =>
    API.patch(`/taskManegment/updateTask/`, payload);

const getSingleTask = (id) => API.get(`/taskManegment/${id}`);

export const AppService = {
    getAllTask,
    updateTask,
    getSingleTask
};
