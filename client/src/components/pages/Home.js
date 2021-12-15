import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Dating Events App</h1>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Sign Up for Upcoming Events</h2>
                    </Col>
                </Row>
                <Row className="justify-content-end">
                    <Col xs="auto">
                        <LinkContainer to="/upcoming-events">
                            <Button variant="danger">Click Here</Button>
                        </LinkContainer>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <h2>Follow Up After a Event</h2>
                    </Col>
                </Row>
                <Row className="justify-content-end">
                    <Col xs="auto">
                        <LinkContainer to="/follow-up">
                            <Button variant="danger">Click Here</Button>
                        </LinkContainer>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Home;