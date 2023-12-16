'use client'


import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import { discountProductType } from "../type";
import ApiCaller from "@/services/Api";

const DiscountItem = () => {
   
    const router = useRouter()
    const [myData,setMyData] = useState<discountProductType|undefined>()

    useEffect(()=>{
        ApiCaller().getDiscount()
            .then(res => setMyData(res.data))
    },[])
    
    const clickItem = (id:number) => {
            router.push(`/internetMarket/${id}`)
    }

    return ( 
        <div className="w-full px-14 py-8">
            <div className="bg-black  rounded-md bg-opacity-50 rounded-r-lg">
                <div
                    className="h-full overflow-auto mx-4 py-3"
                >
                    <div 
                        className={`w-full overflow-auto  flex flex-row-reverse  gap-2`}
                        
                        >

                        {myData?.map((item)=>(
                            <div 
                                key={item.id}
                                onClick={()=>clickItem(item.id)}
                                className={`flex flex-col cursor-pointer w-full rounded-md select-none gap-4  bg-white justify-between items-center p-4`} 
                                >
                                <div className=" h-2/3">
                                    <Image
                                        draggable={false}
                                        src={item.src}
                                        alt={"discount-product"}
                                        className="w-full"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="flex w-full items-center gap-20">
                                    <div className="flex gap-2">
                                        <p>تومان</p>
                                        <p>{item.price}</p>
                                    </div>
                                    <span className="bg-red-600 rounded-full p-1 text-white items-center">
                                        {item.priceDiscount}
                                    </span>
                                </div>
                                <div className="text-left w-full">
                                    {item.previousPrice}
                                </div>
                            </div>
                        ))}
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
     )}

     export default DiscountItem;