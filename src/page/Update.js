// Update.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/slide/UserReducer';

const Update = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { userId, userName: initialUserName, userMail: initialUserMail } = route.params;

  const [userName, setUserName] = useState(initialUserName);
  const [userMail, setUserMail] = useState(initialUserMail);

  const handleUpdate = () => {
    const updatedUser = {
      id: userId,
      name: userName,
      mail: userMail,
    };

    dispatch(updateUser(userId, updatedUser));
    navigation.goBack(); // Quay trở lại màn hình trước đó sau khi cập nhật
  };

  return (
    <View>
      <Text>User Update</Text>
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
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default Update;
