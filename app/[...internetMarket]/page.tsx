'use client'


import { usePathname } from "next/navigation";
import Image from "next/image";
import { PiShoppingCartLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import { discountProductType } from "../type";
import ApiCaller from "@/services/Api";
import { useAppDispatch } from "@/hook/Redux";
import { setCount, setFilled } from "@/Redux/faeture/allSlice";

const DynamicItem = () => {

    const pathname = usePathname();
    // console.log(pathname.slice(16));
    const itemId = Number(pathname.slice(16));

    const dispatch = useAppDispatch();
    const [myData,setMyData] = useState<discountProductType|undefined>()


    useEffect(()=>{
        ApiCaller().getDiscount()
            .then(res => setMyData(res.data))
    },[])

    const shappingCard = (e:React.MouseEvent<HTMLButtonElement>)=> {
        dispatch(setFilled(true))
        dispatch(setCount())
        e.preventDefault()
        myData?.filter((item)=>{
            if(item.id === itemId){
                ApiCaller().addCart({
                    src:item.src
                })                
            }
        })
    }
    


    return ( 
        <div>
            {myData?.filter((item)=>item.id === itemId).map((item)=>(
                <div className="text-black w-2/3 float-right px-16 py-14">
                    <div className="flex justify-end gap-10">
                        <div className="flex justify-end gap-10 w-full">
                            <div className="flex py-8 flex-col justify-between gap-5 w-auto">
                                <div className="flex justify-end gap-3  items-center">
                                    <p>تومان</p>
                                    <p>{item.price}</p>
                                    <p>: قیمت</p>
                                </div>
                                <div className="flex flex-row-reverse w-full  gap-3">
                                        <p>: تخفیف</p>
                                        <span className="bg-red-600 rounded-full p-1 text-white items-center">
                                                {item.priceDiscount}
                                        </span>
                                </div>
                                <div className="flex justify-end gap-3 w-full">
                                    <p>تومان</p>
                                    <p>{item.previousPrice}</p>
                                    <p>: قیمت قبلی</p>
                                </div>
                            </div>
                            <div className="flex justify-center w-1/3 items-center">
                                <Image
                                    draggable={false}
                                    src={item.src}
                                    alt={'pic'}
                                    className="w-full"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="w-auto text-left px-16 py-14">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Omnis corrupti error sapiente culpa alias consequuntur 
                    numquam saepe. In amet ipsum reprehenderit excepturi explicabo 
                    iusto doloremque praesentium ut nulla maiores perferendis unde, 
                    officia deserunt optio commodi veritatis odit iure delectus tenetur, 
                    dolorem eum. Unde iure iusto magni dicta ratione, esse ducimus 
                    accusantium cum ex reiciendis dolore magnam expedita voluptate 
                    amet velit? Illum quae laudantium quam et, adipisci mollitia 
                    sequi, ut iste sapiente temporibus at odit quidem, porro quisquam 
                    impedit itaque error fuga voluptas fugit ea? Deserunt fuga 
                    quisquam, eaque facilis consectetur incidunt veritatis, a nisi 
                    odit ut aut dolorem, modi iure!
                </p>
            </div>
            <div className="w-full flex justify-end items-center px-24 ">
                <button 
                    // type="button" 
                    onClick={shappingCard} 
                    className="px-12 py-6 hover:drop-shadow-xl bg-green-700 rounded-xl text-lg text-white font-semibold"
                >
                    <PiShoppingCartLight size={50}/>
                </button>
            </div>
        </div>
     );
     }
     

     export default DynamicItem;