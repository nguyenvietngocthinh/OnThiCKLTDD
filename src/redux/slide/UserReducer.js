// userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { addUserApi, updateUserApi } from '../../api/apiService';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userList: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.userList = action.payload;
    },
    deleteUser: (state, action) => {
      const userIdToDelete = action.payload;
      state.userList = state.userList.filter(user => user.id !== userIdToDelete);
    },
    updateUserSuccess: (state, action) => {
      const updatedUser = action.payload;
      state.userList = state.userList.map(user =>
        user.id === updatedUser.id ? updatedUser : user
      );
    },
    addUserSuccess: (state, action) => {
      const addedUser = action.payload;
      state.userList = [...state.userList, addedUser];
    },
  },
});

export const { setUsers , deleteUser, updateUserSuccess, addUserSuccess } = userSlice.actions;
export default userSlice.reducer;

export const updateUser = (userId, updatedUser) => async (dispatch) => {
  try {
    const updatedUserData = await updateUserApi(userId, updatedUser);
    dispatch(updateUserSuccess(updatedUserData));
  } catch (error) {
    console.error('Error updating user:', error);
    // Handle error
  }
};


export const addUser = (newUser) => async (dispatch) => { // Thêm action thêm người dùng
  try {
    const addedUserData = await addUserApi(newUser);
    dispatch(addUserSuccess(addedUserData));
  } catch (error) {
    console.error('Error adding user:', error);
    // Handle error
  }
};

