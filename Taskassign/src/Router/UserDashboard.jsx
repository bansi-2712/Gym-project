 import React, { useEffect, useState } from "react";
import { useAuth } from "../Router/Authcontext"; // adjust path if different
import { axiosapi } from "../CustomAxios";
 import './UserDashboard.css'
import { Navigate } from "react-router-dom";

 export const UserDashboard = () => {
  const { user, loading ,setuser } = useAuth();
  
  const [orders, setOrders] = useState([]);
  const [orderLoading, setOrderLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axiosapi.get("/order", { withCredentials: true });
        setOrders(res.data.orders);
      } catch (err) {
        setError("Failed to fetch orders");
      } finally {
        setOrderLoading(false);
      }
    };

    if (user) fetchOrders();
  }, [user]);

  const handlelogout = async ()=>{
  try{
    await axiosapi.get('/logout');
    setuser(null)
    Navigate('/login')
  }catch(err){
    console.log("logout failed",err.message)
  }

  }

  if (loading || orderLoading) return <div>Loading...</div>;

  if (!user) return <div>Please log in to view your dashboard.</div>;

  return (
    <div className="dashboard">
      <button className="logout-button" onClick={handlelogout}>Logout</button> <br />
      <div className="user-detail">
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      </div> <br />

      <hr />
       <h3 className="order-title">Your Orders History:</h3>
     <div className="order-detail">
       
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
       
        orders.map((order) => (
          <div key={order._id} className="order-box"> 
            <p><strong>Order ID:</strong> {order._id}</p>
            <p><strong>Total:</strong> ₹{order.totalAmount}</p>
            <p><strong>Payment Mode:</strong> {order.paymentMode}</p>
            <p><strong>Payment Status:</strong> {order.paymentStatus}</p>
            <p><strong>Order Status:</strong> {order.orderStatus}</p>
            <p><strong>Ordered On:</strong> {new Date(order.createdAt).toLocaleString()}</p>
            <h4>Items:</h4>
            <ul>
              {order.cartItems.map((item, idx) => (
                <li key={idx}>
                  {item.name} — ₹{item.price} — {item.validity}
                </li>
              ))}
            </ul>
          </div>
         
        ))
      )}
      </div>
    </div>
  );
};

const styles = {
  orderBox: {
     
   
  
   
    
    
  }
};

 
