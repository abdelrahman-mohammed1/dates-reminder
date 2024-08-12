import { useState } from "react"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Error from "./Error";
import { v4 as uuidv4 } from 'uuid';

export default function WindowForm({ show, handleClose, personDates, setPersonDates }) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [vaildate, setVaildate] = useState({
        name: false,
        date: false
    })
    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !date) {
            setVaildate({
                name: !name,
                date: !date
            })
            return;
        }
        const randomId = uuidv4();

        const data = {
            id: randomId,
            name,
            date,
            image: `https://via.placeholder.com/150/0000000/FFFFFF?text=${name.split(' ')[0]}`
        }
        setPersonDates(prev => [...prev, data])
        handleClose();
    }
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            style={{ direction: 'ltr' }}

        >
            <Modal.Header closeButton>
                <Modal.Title>Add Date</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control type="text" value={name} required
                            onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                        {vaildate.name && <Error>this filed is Required place fill this filed</Error>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Enter Date</Form.Label>
                        <Form.Control type="text" value={date}
                            required
                            onChange={(e) => setDate(e.target.value)} placeholder="Enter Date" />

                        {vaildate.date && <Error>this filed is Required place fill this filed</Error>}
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit} type="submit">Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}
