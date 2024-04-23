import { Button, Nav, NavItem } from "reactstrap";
import {
  Row,
  Col,
  CardTitle,
  CardBody,
  Card,
  CardSubtitle,
} from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import TimeTracker from "@/pages/tracker";

const navigation = [
  
  {
    title: "Dashboard",
    href: "/admin",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Leads",
    href: "/admin/Leads/leads",
    icon: "bi bi-people",
  },
  {
    title: "Marketing",
    href: "/admin/Marketing/page",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Sales",
    href: "/admin/sales",
    icon: "bi bi-receipt",
  },
  {
    title: "Ticket",
    href: "/admin/TicktingAssigne/page",
    icon: "bi bi-ticket-perforated",
  },
  // {
  //   title: "Alert",
  //   href: "/admin/ui/alerts",
  //   icon: "bi bi-bell",
  // },
  // {
  //   title: "Tables",
  //   href: "/admin/ui/tables",
  //   icon: "bi bi-bell",
  // },
  {
    title: "About",
    href: "/admin/about",
    icon: "bi bi-people",
  },
  // {
  //   title: "Button",
  //   href: "/admin/ui/buttons",
  //   icon: "bi bi-people",
  // },
]
const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;
  const[isOpen , setIsOpen] = useState(showMobilemenu);
  
  return ( 
    <div className="p-3">      
      <Button color="primary" className="d-lg-none" onClick={showMobilemenu}>
          <i className="bi bi-list"></i>
      </Button>
      <div className="d-flex align-items-center mt-1 ml-3 mb-1">
 
      {/* // style={{
      //   marginBlock:'2rem',
      //   height:'10vh',
      //  }} */}

      <Logo></Logo>
   
        </div>
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link  className={
                    location === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  } href={navi.href}>
               
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
            
          ))}
          <TimeTracker></TimeTracker>
        </Nav>
      </div>
  );
};

export default Sidebar;
