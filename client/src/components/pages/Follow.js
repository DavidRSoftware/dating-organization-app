import Button from 'react-bootstrap/Button';

const Follow = () => {
    return (
        <div>
            <h1>Follow Up</h1>
            <h2>Select a Event</h2>
            <select name="" id="">
                <option value="">Select Event</option>
                <option value="">Local Restaurant</option>
                <option value="">Casual Meetup</option>
            </select>
            <h2>Select a person who you would like to comment about</h2>
            <select name="" id="">
                <option value="">Select Person</option>
                <option value="">Sarah Roberts</option>
                <option value="">Leah Samuels</option>
            </select>
            <div>
            <Button variant="secondary">Next</Button>
            </div>
        </div>
    )
}

export default Follow;