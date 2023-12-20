import { cartType } from "@/app/type";
import axios from "axios";

const ApiCaller = () => {

    const AxiosRequest = axios.create({
        baseURL: "http://localhost:3004/",
      });
      
    const getSliderImage = ()=> AxiosRequest.get(`sliderImage`);
    const getDiscount = ()=> AxiosRequest.get('specialProduct');
    const addCart = (data:cartType)=> AxiosRequest.post('cart',data)
    const getCart = ()=> AxiosRequest.get('cart')
    const deletCart =(id:number)=>AxiosRequest.delete(`cart/${id}`)


    return {
        getSliderImage,
        getDiscount,
        addCart,
        getCart,
        deletCart
    };
}
 
export default ApiCaller;