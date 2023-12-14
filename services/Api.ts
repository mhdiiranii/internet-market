import axios from "axios";

const ApiCaller = () => {

    const AxiosRequest = axios.create({
        baseURL: "http://localhost:3004/",
      });
      
    const getSliderImage = ()=> AxiosRequest.get('sliderImage')


    return {
        getSliderImage
    };
}
 
export default ApiCaller;