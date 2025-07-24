
 
 import './AdminDashboard.css'
import { useEffect, useState } from 'react';
 
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Authcontext';
import { axiosapi } from '../CustomAxios';
 

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const {user,setUser}= useAuth()
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axiosapi.get('/users'); // Backend route must return all users
        setUsers(res.data.users);
      } catch (error) {
        alert(error.response?.data?.msg ||'failed to fetch users');
        navigate('/login'); // Redirect non-admin
      } finally{
        setLoading(false)
      } 
    };

    fetchUsers();
  }, [navigate]);
  
if (loading) return <div>Loading users...</div>;

 const handleLogout = async()=>{
  try{
    await axiosapi.get('/logout');
    setUser(null);
    navigate('/login')
  }catch(err){
    alert("logout failed")
  }
 }

  return (
      <div style={{ padding: "2rem" }} className='admin-dashboard'>
      <h2 className='heading'>Welcome, {user?.name} (Admin)</h2>
    <span className='btn'> <button onClick={handleLogout}
       className='logout'>Logout</button></span> 

      <h3 className='reguser'>All Registered Users</h3>
      <table border="1" cellPadding="10"    className='table'>
        <thead className='table-heading'>
          <tr className='t-row'>
            <th style={{padding:"10px"}} >NO</th>
            <th style={{padding:"10px"}} >Name</th>
            <th style={{padding:"10px"}} >Username</th>
            <th style={{padding:"10px"}} >Email</th>
            <th style={{padding:"10px"}} >Message</th>
            <th style={{padding:"10px"}} >Role</th>
          </tr>
        </thead>
        <tbody className='t-body' >
          {users.map((u,index) => (
            <tr key={u._id}>
              <td style={{padding:"5px"}}>{index+1}</td>
              <td style={{padding:"5px"}}>{u.name}</td>
              <td style={{padding:"5px"}}>{u.username}</td>
              <td style={{padding:"5px"}}>{u.email}</td>
              <td style={{padding:"5px"}}>{u.message}</td>
              <td style={{padding:"5px"}}>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
