import SliderImage from "./SliderImage";

interface props {
    route:string
}

const AllPage = (prop:props) => {
    return ( 
        <div>
            <div>
                <SliderImage route={prop.route} />
            </div>
        </div>
     );
}
 
export default AllPage;