import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import hamrokitchen from "../assets/hamrokitchen.jpg"

const Header = ()=>{
return(
    <div className="border-b-2 border-b-orange-500 py-4">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold tracking-tigh text-orange-500"><img className="object-cover h-14" src={hamrokitchen} alt="" /></Link>
            <div className="md:hidden">
                <MobileNav />
            </div>
            <div className="hidden md:block">
                <MainNav />
            </div>
        </div>
    </div>
)
}
export default Header;