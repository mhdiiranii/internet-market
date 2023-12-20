"use client"

import ApiCaller from "@/services/Api";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
import { sliderImageType } from "../type";
import { useAppDispatch } from "@/hook/Redux";
import { setLoading } from "@/Redux/faeture/allSlice";
// import {ApiCaller} from "../../services/Api"

interface props {
    route:string
}

const SliderImage = (prop:props) => {


    const dispatch = useAppDispatch()
    const [count,setCount]=useState<any>()
    const [firstCount,setFirstCunt]=useState<number>()
    const [slider,setSlider] = useState ([])
    const [animate,setAnimate] = useState ('animate-none')
    const [myImage,setMyImage] = useState <sliderImageType|undefined> ()
    const [load,setLoad] = useState<boolean>()
    const [span,setSpan] = useState<boolean>()
    const filterImage = myImage?.filter((item)=> item.route == prop.route);
    const lastIndex = filterImage?.length
    
    
    useEffect(()=>{
        filterImage?.filter((item,index)=> index == 0 ).map((item,index)=>{ 
                setCount(index)
                setFirstCunt(index)
            }
        )
    },[myImage])

     useEffect(()=>{
         setLoad(true)
         setSpan(true)
        ApiCaller().getSliderImage()
            .then(res => {
                    setMyImage(res.data),
                    // setSlider(res.data.slider)
                    setLoad(false)
                    setSpan(true)
                    // dispatch(setLoading(true))
            })
        dispatch(setLoading(true))
     },[])
     
     
    const arrowRight = () => {
        setAnimate('animate-sliderRight')
        if(count+1 == filterImage?.length){
            setCount(firstCount)
        }else{
            setCount(count+1)
        }
    }
    const arrowLeft = () => {
        setAnimate('animate-sliderLeft')
        if(count == firstCount){
            if(lastIndex != undefined)
                setCount(lastIndex-1)
        }else{
            setCount(count-1)
        }
    }

    const spanClick = (i:number)=>{
        setCount(i)
        setAnimate('animate-none')
    }
    console.log(filterImage);
    

    return ( 
        <div className="w-full">
            <div className={`${load && 'h-64 animate-pulse bg-slate-200'} flex w-full relative flex-col`}>
                {filterImage?.filter((item,i)=> i == count).map((item,i)=>(
                    <div key={item.id} >
                        <Image
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            width={1500}
                            height={1500}
                            alt='slider'
                            src={item.src}
                            className={`${animate}`}
                        />
                    </div>
                ))}
                   {span && ( 
                        <div className="flex flex-wrap w-full h-full absolute px-10 justify-between items-center">
                                <button 
                                onClick={arrowLeft} 
                                className="p-2 rounded-full duration-300  bg-gray-100 bg-opacity-50 text-black hover:text-white hover:bg-[rgba(0,0,0,0.5)] hover:bg-opacity-50"
                                >
                                    <FaArrowLeft />
                                </button>
                                <button 
                                onClick={arrowRight} 
                                className="p-2 rounded-full duration-300  bg-gray-100 bg-opacity-50 text-black hover:text-white hover:bg-[rgba(0,0,0,0.5)] hover:bg-opacity-50"
                                >
                                    <FaArrowRight/>
                                </button>
                            
                                    <div className="w-full flex justify-center  items-center absolute bottom-0 right-0 ">
                                    <div className="flex gap-1 px-2 py-1 mb-1.5 rounded-full bg-white bg-opacity-40">
                                        {filterImage?.map((item,i)=>(
                                        <div
                                            onClick={()=>spanClick(i)}
                                            key={i} 
                                            className="p-2 flex cursor-pointer"
                                        >
                                                <span
                                                className={`${count == i && 'bg-black bg-opacity-50'} w-2 h-2 rounded-full border border-black`}
                                                >
        
                                                </span>
                                        </div>
                                        ))}
                                    </div>
                                    </div>
                                
                        </div>
                   )}
            </div>
        </div>
     );
}
 
export default SliderImage;