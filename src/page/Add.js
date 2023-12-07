// Add.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addUserApi } from '../api/apiService'; // Đảm bảo import hàm thêm người dùng
import { addUserSuccess } from '../redux/slide/UserReducer';

const Add = ({ navigation }) => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [userMail, setUserMail] = useState('');

  const handleAddUser = async () => {
    const newUser = {
      name: userName,
      mail: userMail,
    };

    try {
      const addedUser = await addUserApi(newUser);
      dispatch(addUserSuccess(addedUser));
      navigation.goBack(); // Quay trở lại màn hình trước đó sau khi thêm
    } catch (error) {
      console.error('Error adding user:', error);
      // Handle error
    }
  };

  return (
    <View>
      <Text>Add User</Text>
      <TextInput
        placeholder="Name"
        value={userName}
        onChangeText={(text) => setUserName(text)}
      />
      <TextInput
        placeholder="Mail"
        value={userMail}
        onChangeText={(text) => setUserMail(text)}
      />
      <Button title="Add User" onPress={handleAddUser} />
    </View>
  );
};

export default Add;
