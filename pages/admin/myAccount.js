import { useState, useEffect } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";

const MyAccount = () => {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    // Retrieve user email from local storage
    const storedUserEmail = localStorage.getItem("userEmail");
    if (storedUserEmail) {
      setUserEmail(storedUserEmail);
    }
  }, []);

  return (
    <Row>
      <Col>
        <Card>
          <CardBody>
            <h5>User Profile</h5>
            {userEmail ? (
              <div>
                <p>Email: {userEmail}</p>
                {/* Add other user information here */}
              </div>
            ) : (
              <p>Please log in to view your profile.</p>
            )}
            {/* Add other features or actions related to the user's account */}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default MyAccount;
