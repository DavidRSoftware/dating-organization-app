import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Follow = () => {
    return (
        <div>
            <h1>Follow Up</h1>
            <h2>Select a Event</h2>
            <Form.Select aria-label="Select Event">
                <option value="">Select Event</option>
                <option value="">Local Restaurant</option>
                <option value="">Casual Meetup</option>
            </Form.Select>
            <h2>Select a person who you would like to comment about</h2>
            <Form.Select aria-label="Select Person">
                <option value="">Select Person</option>
                <option value="">Sarah Roberts</option>
                <option value="">Leah Samuels</option>
            </Form.Select>
            <div>
                <Button variant="secondary">Next</Button>
            </div>
        </div>
    )
}

export default Follow;