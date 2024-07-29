import Image from "next/image";


const Navbar = () =>{
    return (
        <nav>
            <Image src="/Zillow_logo.svg" alt="Zillow logo" width={100} height={50} />
            {/* <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul> */}
        </nav>
    )
}

export default Navbar;