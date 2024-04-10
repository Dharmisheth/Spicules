import LogoDark from "../../../public/Color logo - no background.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
    <div>
   
     <Link href="/admin">    
         <Image src={LogoDark} alt="logo" height={63}
   ></Image>
     </Link>
    </div>
    </>
  );
};

export default Logo;