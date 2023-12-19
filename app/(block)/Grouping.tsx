'use client'

import Link from "next/link";
import { GroupingData } from "./StableData";
import Image from "next/image";
import { useAppSelector } from "@/hook/Redux";

const Grouping = () => {

    const {all:{loading}}=useAppSelector(state=>state)


    console.log(loading);
    

    return ( 
        loading &&
        (
            <div className="w-full container mx-auto flex flex-col gap-10 mb-10 justify-center items-center">
            <div className="text-center">
                <h2 className="text-xl font-semibold">
                    خرید بر اساس دسته بندی
                </h2>
            </div>
            <div className="flex flex-row-reverse flex-wrap justify-center items-center gap-10">
                {GroupingData.map((item)=>(
                    <Link 
                        key={item.id}
                        className=""
                        href={item.href}
                    > 
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={100}
                                height={100}
                            />
                            <span>
                                {item.title}
                            </span>
                        </div>

                    </Link>
                ))}
            </div>
        </div>
        )
     );
}
 
export default Grouping;