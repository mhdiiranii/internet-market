import Image from 'next/image'
import SliderImage from './(block)/SliderImage'
import DiscountItem from './(block)/DiscountProduct'
import  Grouping from './(block)/Grouping'

export default function Home() {
  return (
    <>
      <SliderImage route='home'/>
      <DiscountItem/>
      <Grouping/>
    </>
  )
}
