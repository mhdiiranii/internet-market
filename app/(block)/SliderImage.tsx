"use client"

import ApiCaller from "@/services/Api";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
import { sliderImageType } from "../type";
// import {ApiCaller} from "../../services/Api"

const SliderImage = () => {

    const [count,setCount]=useState(1)
    const [slider,setSlider] = useState ([1,2,3,4,5,6])
    const [animate,setAnimate] = useState ('animate-none')
    const [myImage,setMyImage] = useState <sliderImageType|undefined> ()

     useEffect(()=>{
        ApiCaller().getSliderImage()
            .then(res => setMyImage(res.data))
     },[setMyImage])
     
    const arrowRight = () => {
        setAnimate('animate-sliderRight')
        if(count == slider.length){
            setCount(1)
        }else{
            setCount(count+1)
        }
    }
    const arrowLeft = () => {
        setAnimate('animate-sliderLeft')
        if(count == 1){
            setCount(slider.length)
        }else{
            setCount(count-1)
        }
    }

    

    return ( 
        <div className="w-full">
            <div className="flex w-full relative flex-col">
                {myImage?.filter((item)=>item.id == count).map((item)=>(
                    <div key={item.id} className="">
                        <Image
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                            width={1500}
                            height={1500}
                            alt='alaki'
                            src={item.src}
                            className={`${animate}`}
                        />
                    </div>
                ))}
                    <div className="flex flex-wrap w-full h-full absolute px-10 justify-between items-center">
                        <button onClick={arrowLeft} className="p-2 rounded-full duration-200 delay-100 text-white hover:text-black hover:bg-white hover:bg-opacity-50">
                            <FaArrowLeft />
                        </button>
                        <button onClick={arrowRight} className="p-2 rounded-full duration-200 delay-100 text-white hover:text-black hover:bg-white hover:bg-opacity-50">
                            <FaArrowRight/>
                        </button>
                        <div className="w-full flex justify-center  items-center absolute bottom-0 right-0 ">
                           <div className="flex gap-5 px-2 py-1 mb-1.5 rounded-full bg-white bg-opacity-40">
                                {slider.map((item,i)=>(
                                  <span key={i} className={`${count == i+1 && 'bg-black bg-opacity-50'} w-2 h-2 rounded-full border border-black`}></span>
                                ))}
                            </div>
                           </div>
                    </div>
            </div>
        </div>
     );
}
 
export default SliderImage;