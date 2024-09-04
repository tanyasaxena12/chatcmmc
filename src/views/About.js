import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            About The CMMC Bot
          </CardTitle>
          <CardBody className="p-4">
            <Row justify-content>
              <Col lg="8">
                <h2 className="mt-4">About The CMMC Bot 🧑🏻‍✈️</h2>
                <h5 className=" mb-4">
                The CMMC Bot, designed by Jun Cyber, represents a cutting-edge solution in the realm of cybersecurity compliance and certification. Specifically crafted to assist organizations in navigating the complexities of the Cybersecurity Maturity Model Certification (CMMC), this bot leverages advanced technologies like PostgreSQL for robust data management and VertexAI (Dialogflow CX) to deliver intelligent, context-aware interactions.
                  
                </h5>
                <img src="/about.jpg" alt="my"/>
                <br />
                <Button
                  className="mt-3"
                  color="primary"
                  href="https://www.wrappixel.com/templates/adminpro-react-redux-admin/?ref=33"
                  target="_blank"
                >
                  Check Pro Version
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
