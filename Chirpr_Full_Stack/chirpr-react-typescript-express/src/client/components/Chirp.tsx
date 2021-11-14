import React, {useState} from 'react';
import { Modal } from 'react-bootstrap';

const Chirp = ({ userName, input, id, counter, setCounter }) => {
    const [modal, setModal] = useState(false);
    const [editInput, setInput] = useState('');

    const handleEdit = () => {
        if (modal) {
            setInput('')
            setModal(false);
        }
        else {
            setModal(true);
        }
    }

    const handleEditInput = (val: React.SetStateAction<string>) => {
        setInput(val)
    }
    const handleEditSave = () => {
        let data = {
            content: editInput,
            id: id
        };
        fetch('/api/chirps', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        setCounter(counter +1);
        setModal(false);
    }

    const handleDelete = () => {
        let data = {
            id: id
        }
        fetch('/api/chirps', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        setCounter(counter +1)
    }
    return (
        <div className="row" onDoubleClick={handleEdit}>
            <div className="users col-2">
                <p>User: {userName}</p>
            </div>
            <div className="messages col-8">
                <p>{input}</p>
            </div>
            <div className="edit col-1">
                <button className="btn btn-outline-danger" onClick={handleDelete}>Delete</button>
            </div>
            <Modal show={modal}>
                <Modal.Header>Edit chirp</Modal.Header>
                <Modal.Body>
                    <input type='text' onChange={e => handleEditInput(e.target.value)}></input>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn" onClick={handleEdit}>Close</button>
                    <button className="btn btn-outline-primary" onClick={handleEditSave}>Save</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Chirp;