import { StaticImageData } from "next/image"

export type sliderImageType = Array<{
    id:number,
    src:StaticImageData
}>

export type discountProductType = Array<{
    id:number,
    src:string,
    price:string,
    priceDiscount:string,
    previousPrice:string
}>

export interface cartType {
    src : string,
}
export type myAllCartType = Array<{
    id:number,
    src : string,
}>

export type myNavType = Array<{
    id:number,
    title:string,
    href?:any
}>

export type stableData = Array <{
        id: number,
        href:string,
        title:string,
        img:string
}>