import React from "react";
import { Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
function App() {
  return (
    <div className="App">
      <Container className="p3">
        <Card style={{ width: "18rem" }}>
          <ProfilePhoto/>
          <Card.Body>
            <Card.Title>
              <FullName/>
            </Card.Title>
            <Card.Text>
              <Address/>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
