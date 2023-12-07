import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, BASE_URL } from "../api/apiService";
import { deleteUser, setUsers } from "../redux/slide/UserReducer";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

const Home = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
  const users = useSelector((state) => state.user.userList);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await fetchUsers();
        console.log('API Response:', usersData);
        dispatch(setUsers(usersData));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleDelete = async (userId) => {
    try {
      // Thực hiện cuộc gọi API xóa
      await fetch(`${BASE_URL}/user/${userId}`, {
        method: 'DELETE',
      });

      // Sau khi xóa thành công, cập nhật state bằng cách dispatch action deleteUser
      dispatch(deleteUser(userId));
    } catch (error) {
      console.error('Error deleting user:', error);
      // Handle error
    }
  };

  const handleEdit = (user) => {
    navigation.navigate('Update', {
      userId: user.id,
      userName: user.name,
      userMail: user.mail,
    });
  };

//   const handleUpdateOnApi = async (userId, updatedUser) => {
//     try {
//       await updateUserOnApi(userId, updatedUser);
//       // Refresh the user list after updating on API
//       const updatedUsersData = await fetchUsers();
//       dispatch(setUsers(updatedUsersData));
//       navigation.goBack();
//     } catch (error) {
//       console.error('Error updating user on API:', error);
//     }
//   };




    return (
    <div>
        <h2>User CRUD</h2>
        <button onClick={() => navigation.navigate('Add')}>Add +</button>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.mail}</td>
                        <td>
                            <button onClick={() => handleEdit(user)}>Edit</button>
                            <button onClick={() => handleDelete(user.id)}>Delete</button>
                          
                        </td>
                    </tr>
                
                ))}
            </tbody>
        </table>    
    </div> 
    )
}
export default Home;