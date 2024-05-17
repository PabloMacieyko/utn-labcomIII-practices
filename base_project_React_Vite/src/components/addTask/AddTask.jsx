import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddTask({ addTask }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        addTask(inputValue);
        setInputValue('');
    };

    return (
        <Form onSubmit={handleSubmit} className="mb-4">
            <Form.Group controlId="formBasicTask">
                <Form.Label>Nueva Tarea</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa una tarea"
                    value={inputValue}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                AGREGAR TAREA
            </Button>
        </Form>
    );
}

export default AddTask;
