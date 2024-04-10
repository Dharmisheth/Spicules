// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { useRouter } from "next/router";
// import {
//   Navbar,
//   Collapse,
//   Nav,
//   NavItem,
//   NavbarBrand,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Dropdown,
//   Button,
// } from "reactstrap";
// import toast, { Toaster } from "react-hot-toast";
// import LogoWhite from "../../assets/images/logos/monsterlogowhite.svg";
// import user1 from "../../assets/images/users/user1.jpg";

// const Header = ({ showMobmenu }) => {
//   const [isOpen, setIsOpen] = React.useState(false);
  
//   const [dropdownOpen, setDropdownOpen] = React.useState(false);

//   const toggle = () => setDropdownOpen((prevState) => !prevState);
//   const Handletoggle = () => {
//     setIsOpen(!isOpen);
//   };

//   async function doLogout() {
//     try {
//       const result = await doLogout();
//       console.log(result);
//       contextType.setUser(undefined);
//     } catch (error) {
//       console.log(error);
//       toast.error("Logout Error");
//     }
//   }

//   return (
//     <Navbar color="primary" dark expand="md">
//       <div className="d-flex align-items-center">
//         <NavbarBrand href="/" className="d-lg-none">
//           <Image src={LogoWhite} alt="logo" />
//         </NavbarBrand>
//         <Button color="primary" className="d-lg-none" onClick={showMobmenu}>
//           <i className="bi bi-list"></i>
//         </Button>
//       </div>
//       <div className="hstack gap-2">
//         <Button
//           color="primary"
//           size="sm"
//           className="d-sm-block d-md-none"
//           onClick={Handletoggle}
//         >
//           {isOpen ? (
//             <i className="bi bi-x"></i>
//           ) : (
//             <i className="bi bi-three-dots-vertical"></i>
//           )}
//         </Button>
//       </div>

//       <Collapse navbar isOpen={isOpen}>
//         <Nav className="me-auto" navbar>
//           <NavItem>
//             <Link className="nav-link" href="/admin">
//               Starter
//             </Link>
//           </NavItem>
//           <NavItem>
//             <Link className="nav-link" href="/about">
//               About
//             </Link>
//           </NavItem>
//           <UncontrolledDropdown inNavbar nav></UncontrolledDropdown>
//         </Nav>
//         <Dropdown isOpen={dropdownOpen} toggle={toggle}>
//           <DropdownToggle color="primary">
//             <div style={{ lineHeight: "0px" }}>
//               <Image
//                 src={user1}
//                 alt="profile"
//                 className="rounded-circle"
//                 width="30"
//                 height="30"
//               />
//             </div>
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem header>Info</DropdownItem>
//             <DropdownItem>
//               <Link href="/admin/myAccount">My Account</Link>
//             </DropdownItem>
//             <DropdownItem>
//               <Link href="/editprofile">Edit Profile</Link>
//             </DropdownItem>
//             <DropdownItem divider />
//             <DropdownItem onClick={doLogout}>Logout</DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       </Collapse>
//     </Navbar>
//   );
// };

// export default Header;


import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import toast, { Toaster } from "react-hot-toast";
import LogoWhite from "../../assets/images/logos/monsterlogowhite.svg";
import user1 from "../../assets/images/users/user1.jpg";

const Header = ({ showMobmenu }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const router = useRouter(); // Initialize useRouter hook

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };

  async function doLogout() {
    try {
      // Perform logout actions here
      // For now, let's simulate a logout by clearing localStorage
      localStorage.clear();
      toast.success("Logout Successful");
      // Redirect to the sign-in page after logout
      router.push("/login"); // Replace "/signin" with the actual path to your sign-in page
    } catch (error) {
      console.log(error);
      toast.error("Logout Error");
    }
  }

  return (
    <Navbar color="primary" dark expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <Image src={LogoWhite} alt="logo" />
        </NavbarBrand>
        <Button color="primary" className="d-lg-none" onClick={showMobmenu}>
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link className="nav-link" href="/admin">
              Starter
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" href="/admin/about">
              About
            </Link>
          </NavItem>
          <UncontrolledDropdown inNavbar nav></UncontrolledDropdown>
        </Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="primary">
            <div style={{ lineHeight: "0px" }}>
              <Image
                src={user1}
                alt="profile"
                className="rounded-circle"
                width="30"
                height="30"
              />
            </div>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Info</DropdownItem>
            <DropdownItem>
              <Link href="/admin/myAccount">My Account</Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/editprofile">Edit Profile</Link>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={doLogout}>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
