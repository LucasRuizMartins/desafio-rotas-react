import { Outlet } from "react-router-dom";
import ProductBar from "../../components/ProductsBar";


export default function Products(){
    return(
        <>
        <ProductBar />
        <Outlet />
        </>
    );
}