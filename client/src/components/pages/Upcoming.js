import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion'

const Upcoming = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Upcoming Events</h1>
                    </Col>
                </Row>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Meetup at Local Restaurant</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Casual Meetup</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Row>
                    <Col>
                        <h2>Meetup at Local Restaurant</h2>
                        <Button variant="danger">Expand</Button>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <h2>Casual Meetup</h2>
                        <Button variant="danger">Expand</Button>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <h2>Virtual Meetup</h2>
                        <Button variant="danger">Expand</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Upcoming;