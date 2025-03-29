import axios from "axios";

const API_BASE_URL = "https://reqres.in/api";

export const login = (email, password) => {
  return axios.post(`${API_BASE_URL}/login`, { email, password });
};

export const getUsers = (page = 1) => {
  return axios.get(`${API_BASE_URL}/users?page=${page}`);
};

export const updateUser = (id, userData) => {
  return axios.put(`${API_BASE_URL}/users/${id}`, userData);
};

export const deleteUser = (id) => {
  return axios.delete(`${API_BASE_URL}/users/${id}`);
};
