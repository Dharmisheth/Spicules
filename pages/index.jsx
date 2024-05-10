// // pages/index.js
// import {
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   CardGroup,
//   Button,
//   Row,
//   CardHeader,
//   Col,
// } from "reactstrap";
// import Head from "next/head";
// import { Container } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../components/Navbar";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "../public/Color logo - no background.png";
// import { Height } from "@mui/icons-material";

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Spicules Insight</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Navbar></Navbar>

//       <main>
//         <section className="hero">
//           <div className="overlay"></div>
//           <Container>
//             <h1>Manage Your Customers Effectively!</h1>
//             <p>
//               A powerful CRM web application to streamline your business
//               processes.
//             </p>
//             {/* <Button color="primary" className='inverse'>Get Started</Button> */}
//           </Container>
//         </section>
//       </main>

//       <div>
//         <section style={{ display: "flex", alignItems: "center" }}>
//           <Container>
//             <div
//               style={{ display: "flex", alignItems: "center", height: "45vh" }}
//             >
//               <div style={{ paddingRight: "1rem" }}>
//                 <h1 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
//                   Spicules Insight
//                 </h1>
//                 <p style={{ width: "80%", margin: 1 }}>
//                   Automating your workflows, processes, campaigns, customer
//                   journeys, and more enables you to focus on building great
//                   relationships. Spicules Insight CRM is built to get more done
//                   in less time.
//                 </p>
//                 <Button
//                   className="button"
//                   color="primary"
//                   href="/login"
//                   style={{ marginTop: "1rem" }}
//                 >
//                   Get Started
//                 </Button>
//               </div>
//               <div>
//                 <Image
//                   alt="hero"
//                   src={logo}
//                   height={170}
//                   style={{ margin: 1 }}
//                 />
//               </div>
//             </div>
//           </Container>
//         </section>
//       </div>

//       <div
//         style={{
//           backgroundColor: "skyblue",
//           alignContent: "center",
//         }}
//       >
//         <Container>
//           <h2
//             style={{
//               marginTop:"1rem",
//               marginBottom:'1rem',
//               textAlign:'center',
//               color:'white',
//             }}
//           >
//             Our Features
//           </h2>
//         </Container>
//       </div>

//       {/* Cards  */}

//       <div
//         style={{
//           width: "100%",
//           paddingLeft: "1rem",
//           paddingRight: "1rem",
//           paddingBottom: "1rem",
//           paddingTop: "1rem",
//           alignItems: "justify-content",
//         }}
//       >
//         <Row>
//           <Col md="6" lg="3">
//             <Card
//               className="my-2"
//               color="primary"
//               outline
//               style={{
//                 width: "20rem",
//                 height: "10rem",
//               }}
//             >
//               <CardHeader tag="h5">Lead Management</CardHeader>
//               <CardBody>
//                 <CardText>
//                   With supporting text below as a natural lead-in to additional
//                   content.
//                 </CardText>
//               </CardBody>
//             </Card>
//           </Col>

//           <Col md="6" lg="3">
//             <Card
//               className="my-2"
//               color="primary"
//               outline
//               style={{
//                 width: "20rem",
//                 height: "10rem",
//               }}
//             >
//               <CardHeader tag="h5">Sales Management</CardHeader>
//               <CardBody>
//                 <CardText>
//                   With supporting text below as a natural lead-in to additional
//                   content.
//                 </CardText>
//               </CardBody>
//             </Card>
//           </Col>
//           <Col md="6" lg="3">
//             <Card
//               className="my-2"
//               color="primary"
//               outline
//               style={{
//                 width: "20rem",
//                 height: "10rem",
//               }}
//             >
//               <CardHeader tag="h5">Ticket Management</CardHeader>
//               <CardBody>
//                 <CardText>
//                   With supporting text below as a natural lead-in to additional
//                   content.
//                 </CardText>
//               </CardBody>
//             </Card>
//           </Col>
//           <Col md="6" lg="3">
//             <Card
//               className="my-2"
//               color="primary"
//               outline
//               style={{
//                 width: "20rem",
//                 height: "10rem",
//               }}
//             >
//               <CardHeader tag="h5">Marketing Management</CardHeader>
//               <CardBody>
//                 <CardText>
//                   With supporting text below as a natural lead-in to additional
//                   content.
//                 </CardText>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </div>

//       {/* Footer */}
//       <footer>
//         <Container className="cont">
//           <div className="footer-content">
//             <div className="contact">
//               <h3>Contact Us</h3>
//               <i class="bi bi-envelope" className="ml-2">
//                 <p>your.email@example.com</p>
//               </i>
//               <i class="bi bi-telephone"></i>
//             </div>
//             <div className="social">
//               <h3>Follow Us</h3>
//               <ul>
//                 <i href="" class="bi bi-instagram"></i>
//                 <i class="bi bi-twitter-x"></i>
//                 <i class="bi bi-linkedin"></i>
//               </ul>
//             </div>
//           </div>
//         </Container>
//       </footer>

//       <style jsx>{`
//         // *{
//         //   width:100%;
//         // }
//         .hero {
//           background: linear-gradient(to top, #62cff4, #2c67f2);
//           color: #fff;
//           text-align: center;
//           padding: 70px 0;
//           position: relative;
//         }
//         .logo {
//           height: 80%;
//         }
//         .cm {
//           background-color: rgba(255, 255, 255);
//           width: 100%;
//         }
//         .overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-color: rgba(0, 0, 0, 0.1);
//         }
//         .hero h1 {
//           font-size: 3rem;
//           margin-bottom: 20px;
//         }
//         .hero p {
//           font-size: 1.2rem;
//           margin-bottom: 40px;
//         }
//         // .fe {
//         //   width: 100%;
//         // }
//         // .features {
//         //   background-color: rgba(205, 240, 255);
//         //   width: 100%;
//         // }
//         // .feature {
//         //   text-align: center;
//         //   margin-bottom: 1rem;
//         // }

//         // .feature h2 {
//         //   font-size: 2rem;
//         // }
//         footer {
//           background: linear-gradient(#e1e1e1, #afafaf);
//           padding: 40px 0;
//           text-align: left;
//         }
//         .footer-content {
//           display: flex;
//           justify-content: space-between;
//         }
//         .footer h3 {
//           font-size: 1.5rem;
//           margin-bottom: 20px;
//         }
//         .footer p {
//           font-size: 1.2rem;
//           margin-bottom: 10px;
//         }
//         .footer ul {
//           list-style: none;
//           padding: 0;
//         }
//         .footer ul li {
//           display: inline;
//           margin-right: 10px;
//         }
//       `}</style>
//     </div>
//   );
// }

// // // pages/index.js
// // import {
// //   Card,
// //   CardImg,
// //   CardText,
// //   CardBody,
// //   CardTitle,
// //   CardSubtitle,
// //   CardGroup,
// //   Button,
// //   Row,
// //   CardHeader,
// //   Col,
// // } from "reactstrap";
// // import Head from 'next/head';
// // import { Container} from 'reactstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import Navbar from '../components/Navbar';
// // import Link from 'next/link';
// // import Image from 'next/image';
// // import logo from "../public/spicules insight-Logo (1).png";
// // export default function Home() {
// //   return (
// //     <div>
// //       <Head>
// //         <title>Spicules Insight</title>
// //         <link rel="icon" href="/favicon.ico" />
// //       </Head>
// // <Navbar></Navbar>

// //       <main>
// //         <section className="hero">
// //           <div className="overlay"></div>
// //           <Container>
// //             <h1>Manage Your Customers Effectively!</h1>
// //             <p>A powerful CRM web application to streamline your business processes.</p>
// //             {/* <Button color="primary" className='inverse'>Get Started</Button> */}
// //           </Container>
// //         </section>

// //         <section>
// //         <div className="cm">
// //             <div className="container mx-auto flex justify-center px-5 py-24 md:flex-row flex-col items-center">
// //       <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
// //         <h1>Spicules Insight
// //           <br className="hidden lg:inline-block" />
// //         </h1>
// //         <p className="mb-8 leading-relaxed text-left">Automating your workflows, processes, campaigns, customer journeys, and more enables you to focus on building great relationships. Spicules Insight CRM is built to get more done in less time.</p>
// //         <div className="flex justify-center">
// //         <Link href="/login"> <Button className="button" color='primary'>Get Started</Button></Link>
// //         </div>
// //       </div>
// //       <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
// //         <Image className="object-cover object-center rounded  py-100  " alt="hero" src={logo} />
// //       </div>
// //     </div>
// //     </div>
// //       </section>

// //       <section className="fe">
// //           <Container>
// //         <div className="feature">
// //           <h2
// //     className="features"
// //           >Our Features</h2>
// //           </div>
// //           </Container>
// //         </section>

// // {/*
// //             <div className="feature">
// //               <h3>Customer Management</h3>
// //               <p>Efficiently manage all your customers in one place.</p>
// //             </div>
// //             <div className="feature">
// //               <h3>Task Tracking</h3>
// //               <p>Track tasks and activities associated with each customer.</p>
// //             </div>
// //             <div className="feature">
// //               <h3>Reporting</h3>
// //               <p>Generate insightful reports to analyze your business performance.</p>
// //             </div>
// //           </Container> */}

// //       </main>
// // <div
// // style={{
// //       width: '100%',
// //       paddingLeft:'1rem',
// //       paddingRight:'1rem',
// //       paddingBottom:'1rem',
// //       paddingTop:'1rem',
// //       alignItems: 'justify-content',
// //     }}>

// // <Row>
// //         <Col md="6" lg="3">
// //         <Card
// //     className="my-2"
// //     color="primary"
// //     outline
// //     style={{
// //       width: '20rem',
// //       height: '10rem'
// //     }}
// //   >
// //     <CardHeader tag="h5">
// //       Lead Management
// //     </CardHeader>
// //     <CardBody>
// //       <CardText>
// //         With supporting text below as a natural lead-in to additional content.
// //       </CardText>
// //     </CardBody>
// //   </Card>
// //         </Col>

// //         <Col md="6" lg="3">
// //         <Card
// //     className="my-2"
// //     color="primary"
// //     outline
// //     style={{
// //       width: '20rem',
// //       height: '10rem'
// //     }}
// //   >
// //     <CardHeader tag="h5">
// //       Sales Management
// //     </CardHeader>
// //     <CardBody>
// //       <CardText>
// //         With supporting text below as a natural lead-in to additional content.
// //       </CardText>
// //     </CardBody>
// //   </Card>
// //         </Col>
// //         <Col md="6" lg="3">
// //             <Card
// //     className="my-2"
// //     color="primary"
// //     outline
// //     style={{
// //       width: '20rem',
// //       height: '10rem'
// //     }}
// //   >
// //     <CardHeader tag="h5">
// //      Ticket Management
// //     </CardHeader>
// //     <CardBody>
// //       <CardText>
// //         With supporting text below as a natural lead-in to additional content.
// //       </CardText>
// //     </CardBody>
// //   </Card>

// //         </Col>
// //         <Col md="6" lg="3">
// //         <Card
// //     className="my-2"
// //     color="primary"
// //     outline
// //     style={{
// //       width: '20rem',
// //       height: '10rem'
// //     }}
// //   >
// //     <CardHeader tag="h5">
// //       Marketing Management
// //     </CardHeader>
// //     <CardBody>
// //       <CardText>
// //         With supporting text below as a natural lead-in to additional content.
// //       </CardText>
// //     </CardBody>
// //   </Card>
// //         </Col>
// //       </Row>
// // </div>

// //       <footer>
// //         <Container className='cont'>
// //           <div className="footer-content">
// //             <div className="contact">
// //               <h3>Contact Us</h3>
// //               <p>Email: your.email@example.com</p>
// //               <p>Phone: +1234567890</p>
// //             </div>
// //             <div className="social">
// //               <h3>Follow Us</h3>
// //               <ul>
// //                 <li><a href="#">Facebook</a></li>
// //                 <li><a href="#">Twitter</a></li>
// //                 <li><a href="#">Instagram</a></li>
// //               </ul>
// //             </div>
// //           </div>
// //         </Container>
// //       </footer>

// //       <style jsx>{`
// //       // *{
// //       //   width:100%;
// //       // }
// //         .hero {
// //           background: linear-gradient(to top, #62cff4, #2c67f2);
// //           color: #fff;
// //           text-align: center;
// //           padding: 70px 0;
// //           position: relative;
// //         }
// //         .cm{
// //           background-color: rgba(255, 255,255 );
// //           width: 100%;
// //         }
// //         .overlay {
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           width: 100%;
// //           height: 100%;
// //           background-color: rgba(0, 0, 0, 0.2);
// //         }
// //         .hero h1 {
// //           font-size: 3rem;
// //           margin-bottom: 20px;
// //         }
// //         .hero p {
// //           font-size: 1.2rem;
// //           margin-bottom: 40px;
// //         }
// //         .fe{
// //           width:100%;
// //         }
// //         .features {
// //           background-color: rgba(205,240,255);
// //           width: 100%;
// //         }
// //         .feature {
// //           text-align: center;
// //           margin-bottom: 1rem;
// //         }

// //         .feature h2 {
// //           font-size:2rem;

// //         }
// //         footer {
// //           background: linear-gradient(#E1E1E1, #AFAFAF);
// //           padding: 40px 0;
// //           text-align: left;
// //         }
// //         .footer-content {
// //           display: flex;
// //           justify-content: space-between;
// //         }
// //         .footer h3 {
// //           font-size: 1.5rem;
// //           margin-bottom: 20px;
// //         }
// //         .footer p {
// //           font-size: 1.2rem;
// //           margin-bottom: 10px;
// //         }
// //         .footer ul {
// //           list-style: none;
// //           padding: 0;
// //         }
// //         .footer ul li {
// //           display: inline;
// //           margin-right: 10px;
// //         }

// //       `}</style>
// //     </div>
// //   );
// // }

// import {
//   Card,
//   CardText,
//   CardBody,
//   CardHeader,
//   Container,
//   Row,
//   Col,
//   Button
// } from "reactstrap";
// import Head from "next/head";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../components/Navbar";
// import Image from "next/image";
// import logo from "../public/Color logo - no background.png";
// import { FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Spicules Insight</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Navbar />

//       <main>
//         <section className="hero">
//           <div className="overlay"></div>
//           <Container>
//             <h1 style={{
//               justifyContent:'left'
//             }}>Manage Your Customers Effectively!</h1>
//             <p>
//               A powerful CRM web application to streamline your business
//               processes.
//             </p>
//           </Container>
//         </section>
//       </main>

//       <section style={{
//         height:'35vh',
//         marginTop:'5rem',
//       }}>
//         <Container>
//           <Row className="align-items-center justify-content-center ">
//             <Col md={6} className="text-center mb-4 mb-md-0">
//               <h1>Spicules Insight</h1>
//               <p>
//                 Automating your workflows, processes, campaigns, customer
//                 journeys, and more enables you to focus on building great
//                 relationships. Spicules Insight CRM is built to get more done
//                 in less time.
//               </p>
//               <Button color="primary" href="/login">
//                 Get Started
//               </Button>
//             </Col>
//             <Col md={6} className="text-center">
//               <Image src={logo} alt="Logo" height={250} width={400} />
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <div className="bg-primary">
//         <Container>
//           <h2 className="text-center text-white py-4">Our Features</h2>
//         </Container>
//       </div>

//       <section>
//         <Container>
//           <Row xs={1} md={2} lg={4} className="mt-4">
//             <Col className="mb-4" >
//               <Card className="h-100">
//                 <CardHeader tag="h5">Lead Management</CardHeader>
//                 <CardBody>
//                   <CardText>
//                     With supporting text below as a natural lead-in to
//                     additional content.
//                   </CardText>
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col className="mb-4">
//               <Card className="h-100">
//                 <CardHeader tag="h5">Sales Management</CardHeader>
//                 <CardBody>
//                   <CardText>
//                     With supporting text below as a natural lead-in to
//                     additional content.
//                   </CardText>
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col className="mb-4">
//               <Card className="h-100">
//                 <CardHeader tag="h5">Ticket Management</CardHeader>
//                 <CardBody>
//                   <CardText>
//                     With supporting text below as a natural lead-in to
//                     additional content.
//                   </CardText>
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col className="mb-4">
//               <Card className="h-100">
//                 <CardHeader tag="h5">Marketing Management</CardHeader>
//                 <CardBody>
//                   <CardText>
//                     With supporting text below as a natural lead-in to
//                     additional content.
//                   </CardText>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <footer>
//         <Container>
//           <Row>
//             <Col md={10}>
//               <div className="contact">
//                 <h3>Contact Us</h3>
//                 <p>your.email@example.com</p>
//               </div>
//             </Col>
//             <Col>
//               <div className="justify-content-center">
//                 <h3>Follow Us</h3>
//                 <ul className="list-inline">
//                   <li className="list-inline-item">
//                     <FaInstagram />
//                   </li>
//                   <li className="list-inline-item">
//                     <FaGoogle />
//                   </li>
//                   <li className="list-inline-item">
//                     <FaLinkedin />
//                   </li>
//                 </ul>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </footer>

//       <style jsx>{`
//         .hero {
//           background: linear-gradient(to top, #62cff4, #2c67f2);
//           color: #fff;
//           text-align: center;
//           padding: 70px 0;
//           position: relative;
//         }
//         .overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-color: rgba(0, 0, 0, 0.1);
//         }
//         .hero h1 {
//           font-size: 3rem;
//           margin-bottom: 20px;
//         }
//         .hero p {
//           font-size: 1.2rem;
//           margin-bottom: 40px;
//         }
//         footer {
//           background: linear-gradient(#e1e1e1, #afafaf);
//           padding: 40px 0;
//           text-align: left;
//         }
//         .footer h3 {
//           font-size: 1.5rem;
//           margin-bottom: 20px;
//         }
//         .footer p {
//           font-size: 1.2rem;
//           margin-bottom: 10px;
//         }
//         .footer ul {
//           list-style: none;
//           padding: 0;
//         }
//         .footer ul li {
//           display: inline;
//           margin-right: 10px;
//         }
//       `}</style>
//     </div>
//   );
// }

// import {
//   Card,
//   CardText,
//   CardBody,
//   CardHeader,
//   Container,
//   Row,
//   Col,
//   Button,
// } from "reactstrap";
// import Head from "next/head";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../components/Navbar";
// import Image from "next/image";
// import logo from "../public/Color logo - no background.png";
// import { FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Spicules Insight</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Navbar />

//       <main>
//         <section className="hero">
//           <div className="overlay"></div>
//           <Container>
//             <h1 style={{ justifyContent: "left" }}>
//               Manage Your Customers Effectively!
//             </h1>
//             <p>
//               A powerful CRM web application to streamline your business
//               processes.
//             </p>
//           </Container>
//         </section>

//         <section
//           style={{ height: "auto", marginTop: "2rem", marginBottom: "2rem" }}
//         >
//           <Container>
//             <Row className="align-items-center justify-content-center">
//               <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
//                 <h1 style={{ textAlign: "justify" }}>Spicules Insight</h1>
//                 <p style={{ textAlign: "justify" }}>
//                   Automating your workflows, processes, campaigns, customer
//                   journeys, and more enables you to focus on building great
//                   relationships. Spicules Insight CRM is built to get more done
//                   in less time.
//                 </p>
//                 <div style={{ textAlign: "left" }}>
//                   <Button color="primary" href="/login">
//                     Get Started
//                   </Button>
//                 </div>
//               </Col>
//               <Col xs={12} md={6} className="text-center">
//                 <Image src={logo} alt="Logo" height={150} width={500} />
//               </Col>
//             </Row>
//           </Container>
//         </section>

//         <section className="bg-primary py-2">
//           <Container>
//             <h2 className="text-center text-white">Our Features</h2>
//           </Container>
//         </section>

//         <section className="py-4">
//           <Container>
//             <Row xs={1} md={2} lg={4}>
//               <Col className="mb-4">
//                 <Card className="h-100">
//                   <CardHeader tag="h5">Lead Management</CardHeader>
//                   <CardBody>
//                     <CardText>
//                       With supporting text below as a natural lead-in to
//                       additional content.
//                     </CardText>
//                   </CardBody>
//                 </Card>
//               </Col>
//               <Col className="mb-4">
//                 <Card className="h-100">
//                   <CardHeader tag="h5">Sales Management</CardHeader>
//                   <CardBody>
//                     <CardText>
//                       With supporting text below as a natural lead-in to
//                       additional content.
//                     </CardText>
//                   </CardBody>
//                 </Card>
//               </Col>
//               <Col className="mb-4">
//                 <Card className="h-100">
//                   <CardHeader tag="h5">Ticket Management</CardHeader>
//                   <CardBody>
//                     <CardText>
//                       With supporting text below as a natural lead-in to
//                       additional content.
//                     </CardText>
//                   </CardBody>
//                 </Card>
//               </Col>
//               <Col className="mb-4">
//                 <Card className="h-100">
//                   <CardHeader tag="h5">Marketing Management</CardHeader>
//                   <CardBody>
//                     <CardText>
//                       With supporting text below as a natural lead-in to
//                       additional content.
//                     </CardText>
//                   </CardBody>
//                 </Card>
//               </Col>
//             </Row>
//           </Container>
//         </section>
//       </main>

//       <footer className="bg-light py-4">
//         <Container>
//           <Row>
//             <Col md={6}>
//               <div className="contact">
//                 <h3>Contact Us</h3>
//                 <p>your.email@example.com</p>
//               </div>
//             </Col>
//             <Col md={6}>
//               <div className="justify-content-center">
//                 <h3>Follow Us</h3>
//                 <ul className="list-inline">
//                   <li className="list-inline-item">
//                     <FaInstagram />
//                   </li>
//                   <li className="list-inline-item">
//                     <FaGoogle />
//                   </li>
//                   <li className="list-inline-item">
//                     <FaLinkedin />
//                   </li>
//                 </ul>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </footer>

//       <style jsx>{`
//         .hero {
//           background: linear-gradient(to top, #62cff4, #2c67f2);
//           color: #fff;
//           text-align: center;
//           padding: 70px 0;
//           position: relative;
//         }
//         .overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-color: rgba(0, 0, 0, 0.1);
//         }
//         .hero h1 {
//           font-size: 3rem;
//           margin-bottom: 20px;
//         }
//         .hero p {
//           font-size: 1.2rem;
//           margin-bottom: 40px;
//         }
//         footer {
//           padding: 40px 0;
//           text-align: left;
//         }
//         .contact h3,
//         .follow h3 {
//           font-size: 1.5rem;
//           margin-bottom: 20px;
//         }
//         .list-inline {
//           padding-left: 0;
//           list-style: none;
//           display: flex;
//         }
//         .list-inline-item {
//           margin-right: 10px;
//         }
//       `}</style>
//     </div>
//   );
// }

import {
  Card,
  CardText,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Image from "next/image";
import logo from "../public/Color logo - no background.png";
import { MdEmail, MdCall } from "react-icons/md";
import { FaGoogle, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spicules Insight</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main>
        <section className="hero">
          <div className="overlay"></div>
          <Container>
            <h1 className="text-center">Manage Your Customers Effectively!</h1>
            <p className="text-center">
              A powerful CRM web application to streamline your business
              processes.
            </p>
          </Container>
        </section>

        <section className="py-5">
          <div className="">
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col xs={12} md={6} className="mb-4 mb-md-0">
                <h1 className="text-left mb-3">Spicules Insight</h1>
                <p className="text-left mb-3">
                  Automating your workflows, processes, campaigns, customer
                  journeys, and more enables you to focus on building great
                  relationships. Spicules Insight CRM is built to get more done
                  in less time.
                </p>
                <div className="text-left">
                  <Button color="primary" href="/login">
                    Get Started
                  </Button>
                </div>
              </Col>
              <Col xs={12} md={6} className="text-center">
                <Image src={logo} alt="Logo" height={100} width={300} />
              </Col>
            </Row>
          </Container>
          </div>
        </section>

        <section
          className=" py-2"
          style={{
            background: "#e9f5f8",
          }}
        >
          <Container>
            <h2 className="text-center ">Our Features</h2>
          </Container>
        </section>

        <section className="py-4">
          <Container>
            <Row xs={1} md={2} lg={4}>
              <Col className="mb-4">
                <Card className="h-100">
                  <CardHeader tag="h5">Lead Management</CardHeader>
                  <CardBody>
                    <CardText>
                      Lead management in CRM involves capturing, tracking, and
                      nurturing potential customers.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mb-4">
                <Card className="h-100">
                  <CardHeader tag="h5">Sales Management</CardHeader>
                  <CardBody>
                    <CardText>
                      Sales management in CRM involves overseeing and optimizing
                      the entire sales process, from lead generation to closing
                      deals.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mb-4">
                <Card className="h-100">
                  <CardHeader tag="h5">Ticket Management</CardHeader>
                  <CardBody>
                    <CardText>
                      Ticket management in CRM involves efficiently handling and
                      resolving customer inquiries, issues, or requests.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mb-4">
                <Card className="h-100">
                  <CardHeader tag="h5">Marketing Management</CardHeader>
                  <CardBody>
                    <CardText>
                      Marketing management in CRM involves strategizing,
                      executing, and analyzing marketing campaigns.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <footer
        className="py-4"
        style={{
          background: "#e9f5f8",
        }}
      >
        <Container>
          <Row>
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-center mb-3 mb-md-0 justify-content-center justify-content-md-start"
            >
              <div className="d-flex flex-column align-items-left justify-content-center">
                <h3>Contact Us</h3>
                <MdEmail className="list-inline-item fs-4"></MdEmail>
                <p>info@spiculestech.com</p>
                <div class="contact-info">
                  <MdCall className="phone-icon"></MdCall>
                  <p className="phone-number">+91 9998 787 527</p>
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-right justify-content-center justify-content-md-end"
            >
              <div className="d-flex flex-column align-items-end justify-content-center">
                <h3>Follow Us</h3>
                <ul className="list-inline">
                  <li className="list-inline-item fs-4">
                    <FaInstagram />
                  </li>
                  <li className="list-inline-item fs-4">
                    <FaYoutube />
                  </li>
                  <li className="list-inline-item fs-4">
                    <FaLinkedin />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      <style jsx>{`
        .hero {
          background: linear-gradient(to top, #62cff4, #2c67f2);
          color: #fff;
          text-align: center;
          padding: 40px 0;
          position: relative;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.1);
        }
        .hero h1 {
          font-size: 2rem;
          margin-bottom: 15px;
        }
        .hero p {
          font-size: 1rem;
          margin-bottom: 20px;
        }
        footer {
          padding: 20px 0;
          text-align: left;
        }
        .contact h3,
        .follow h3 {
          font-size: 1rem;
          margin-bottom: 15px;
        }
        .list-inline {
          padding-left: 0;
          list-style: none;
          display: flex;
          justify-content: center;
        }
        .list-inline-item {
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
}
