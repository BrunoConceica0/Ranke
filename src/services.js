import axios from "axios";

const axiosInsatnce = axios.create({
  baseURL: "http://localhost:3000",
});

export const api = {
  get(endpoint) {
    return axiosInsatnce.get(endpoint);
  },
};
