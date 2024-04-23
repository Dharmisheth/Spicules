import React from "react";
import { Card, CardBody, CardTitle, CardText, Button, Row, Col } from 'reactstrap';
import Image from "next/image";
// import 'bootstrap/dist/css/bootstrap.min.css';

// Define your images
import BG from "/public/Mimages/blog1.webp"
import BG1 from "/public/Mimages/blog2.webp"
import BG3 from "/public/Mimages/blog3.webp"
import BG4 from "/public/Mimages/blog4.webp"

// Custom Image Card component
const ImageCard = ({ src, alt, title, text, link }) => {
  return (
    <Card className="mb-4">
      <div style={{ width: '100%', position: 'relative', height: '200px' }}>
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      </div>
      <CardBody>
        <CardTitle tag="h5" className="text-gray-900 dark:text-white">{title}</CardTitle>
        <CardText className="text-gray-700 dark:text-gray-400">{text}</CardText>
        <Button href={link} color="primary">Read more</Button>
      </CardBody>
    </Card>
  );
};

const Blog = () => {
  return (
    <div>
      <Row className="mb-6 justify-content-between" style={{ marginLeft: '24px', paddingRight: '16px' }}>
        <Col sm="12" md="6" lg="3">
          <ImageCard 
            src={BG} 
            alt="Blog image 1" 
            title="Concept Of TrustZone By ARM" 
            text="Security is a big challenge for Embedded Hardware, especially for IOT/connected devices. Connection to the internet enables a venue for ..."
            link="/admin/Marketing/blog/blog1/page"
          />
        </Col>

        <Col sm="12" md="6" lg="3">
          <ImageCard 
            src={BG1} 
            alt="Blog image 2" 
            title="An Inside Look of Analogue to Digital & Digital to Analogue Audio Conversion" 
            text="A microphone captures an analogue sound wave, transmitting it as electrical ..."
            link="/admin/Marketing/blog/blog2/page"
          />
        </Col>

        <Col sm="12" md="6" lg="3">
          <ImageCard 
            src={BG3} 
            alt="Blog image 3" 
            title="World of Mobile Applications: Choosing the Right Path" 
            text="In the vast and ever-expanding universe of mobile applications, the decision to choose the right type can significantly ..."
            link="/admin/Marketing/blog/blog3/page"
          />
        </Col>

        <Col sm="12" md="6" lg="3">
          <ImageCard 
            src={BG4} 
            alt="Blog image 4" 
            title="A Comprehensive Guide to Ensuring Software Quality Delivery" 
            text="In the dynamic realm of product development, delivering a top-quality product is a paramount goal for every product ..."
            link="/admin/Marketing/blog/blog4/page"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Blog;
