// apiService.js
import axios from 'axios';

export const BASE_URL = 'https://656f20bd6529ec1c623765d8.mockapi.io';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const updateUserApi = async (userId, updatedUser) => {
  try {
    const response = await axios.put(`${BASE_URL}/user/${userId}`, updatedUser);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const addUserApi = async (newUser) => { // Thêm hàm thêm người dùng
  try {
    const response = await axios.post(`${BASE_URL}/user`, newUser);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};
