import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalB({ contact }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                US Contacts
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>US Contacts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Body>
                        <table style={{ width: '100%' }}>
                            <thead>
                                <th>ID</th>
                                <th>Phone</th>
                                <th>Country</th>
                            </thead>
                            <tbody>
                                {contact.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.country.name}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalB;