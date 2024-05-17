import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TaskList({ tasks, completeTask, deleteTask }) {
    return (
        <Card>
            <Card.Header as="h5">Tareas</Card.Header>
            <ListGroup as="ol" numbered>
                {tasks.map((task, index) => (
                    <ListGroup.Item
                        as="li"
                        key={index}
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none',
                            color: task.completed ? 'lightgrey' : 'black',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <span onClick={() => completeTask(index)} style={{ cursor: 'pointer', flexGrow: 1 }}>
                            {task.text}
                        </span>
                        <Button variant="danger" onClick={() => deleteTask(index)}>Eliminar</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    );
}

export default TaskList;
