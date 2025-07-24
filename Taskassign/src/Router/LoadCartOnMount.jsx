import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { axiosapi } from "../CustomAxios";
import { SetCart } from "../redux/CartSlice";



const LoadCartOnMount = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        const FetchData = async()=>{
            try{
                const res = await axiosapi.get("/cart/me",{
                    withCredentials:true
                });
                if(res.data.cartItems){
                    dispatch(SetCart(res.data.cartItems))    // loading..into redux
                }
            }
            catch(err){
                console.error("err loading cart:",err.response?.data || err.message)
            }
        }
        FetchData()
    },[])
    return null;
}

export default LoadCartOnMount;
