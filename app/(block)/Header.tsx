'use client'

import { Button, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { PiShoppingCartLight } from "react-icons/pi";
import Fade from '@mui/material/Fade';
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { myAllCartType } from "@/app/type";
import ApiCaller from "@/services/Api";
import { useAppDispatch, useAppSelector } from "@/hook/Redux";
import { setCount, setFilled } from "@/Redux/faeture/allSlice";

const InternetMarketHeader = () => {

    const {
        all : {count}
    }=useAppSelector((state) => state)
    
    const dispatch = useAppDispatch();
    const [myProduct,setMyProduct] = useState<myAllCartType>()
    const [anchorEl, setAnchorEl] = useState <null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [check,setCheck]=useState(false);
    
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      if(myProduct != undefined){
        setAnchorEl(event.currentTarget);
      }else(
        setAnchorEl(null)
      )
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    useEffect(()=>{
        ApiCaller().getCart()
            .then((res)=> {
                setMyProduct(res.data)
            })
    },[count])
    
    useEffect(()=>{
        if(myProduct != undefined){
            if(myProduct?.length > 0){
                setCheck(true)
            }else{
                setCheck(false)
            }
       }else{
            setCheck(false)
        }
    })
    
    const trashClick = (e:React.MouseEvent<HTMLButtonElement> , id:number)=>{
        e.preventDefault()
        if(myProduct?.length == 1){
            handleClose()
            dispatch(setFilled(false))
        } 
        dispatch(setCount()) 
        ApiCaller().deletCart(id) 
    }

    return ( 
        <div className="bg-[#232f3e] justify-between  z-20 flex items-center  text-white">
            <div>
                <button className="px-4 py-2 hover:border-white border border-[#232f3e]">
                    Catalog
                </button>
            </div>
            <div>
                <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{
                        color:'white',
                    }}
                >
                    <PiShoppingCartLight size={20}/>
                    {check && 
                        <span className="w-[6px] h-[6px] rounded-full bg-red-600 absolute top-1 right-1/4"></span>
                     }
                </Button>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                    'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    PaperProps={{
                        style: {
                          width:"35%",
                          maxHeight:'45%',
                          display:"flex",
                          flexFlow:"column"
                        },
                      }}
                      sx={{
                        '& .MuiMenu-list': {
                            width:'100%',
                          },
                      }}
                >
                    {myProduct?.map((item,i)=>(
                        <div key={i} className="flex justify-between px-4">
                            <button onClick={(e)=>trashClick(e,item.id)}>
                                <FaTrash/>
                            </button>
                            <MenuItem 
                                onClick={handleClose}
                                sx={{
                                    width:'50%',
                                    height:100,
                                    display:'flex',
                                    justifyContent:'center', 
                                    gap:'20px'
                                }}
                                >
                                <div className="flex justify-center items-center">
                                    <Image
                                        src={item.src}
                                        alt = {'shop'}
                                        width={400}
                                        height={400}
                                        className="w-2/3"
                                    />
                                </div>    
                            </MenuItem>
                        </div>
                    ))}
                </Menu>
            </div>
        </div>
     );
}
 
export default InternetMarketHeader;