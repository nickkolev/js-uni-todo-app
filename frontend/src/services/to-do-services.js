import axios from "axios";

const BASE_URL = "http://localhost:8082/tasks";

export const getAllTasks = () => {
    return axios.get(BASE_URL).catch((err) => {
      console.log(err);
    });
  };

export const createTask = (task) => {
  return axios.post(BASE_URL, task).catch((err) => {
    console.log(err);
  });
};

export const getTaskByIdRequest = (taskId) => {
  //const token = localStorage.getItem("auth");
  //axios.defaults.headers.get["Authorization"] = token;
  return axios.get(BASE_URL + "/" + taskId).catch((err) => {
    console.log(err);
  });
};

export const updateTaskRequest = (taskId, title, description) => {
  //const token = localStorage.getItem('auth');
  //axios.defaults.headers.put['Authorization'] = token;
  return axios
    .put(`${BASE_URL}/${taskId}`, {
      title,
      description,
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteTaskRequest = (taskId) => {
  return axios.delete(BASE_URL + "/" + taskId).catch((err) => {
    console.log(err);
  });
};
