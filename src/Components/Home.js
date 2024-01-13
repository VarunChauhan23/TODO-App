import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';

function Home() {

    // define a usestate hook to handle all tasks with default value an empty array
    const [tasks, setTasks] = useState([]);

    // define a usestate hook to handle date
    const [date, setDate] = useState(new Date());

    // define a usestate hook to handle time
    const [time, setTime] = useState("");

    // define a usestate hook to handle value of input textarea of task field
    const [taskValue, setTaskValue] = useState("");

    // function to handle the functionality of add task button
    const handleTaskAdd = () => {

        const newTask = {
            task: taskValue,
            date: date,
            time: time,
            completed: false,
        };

        // Update the state with the new task added to the list
        setTasks([...tasks, newTask]);

        // clear the input fields for new task
        setTaskValue("");
        setDate(new Date());
        setTime("");
    }

    // function to delete/remove the task when Remove-task button will click
    const handleRemoveTask = (task) => {

        const updatedTasks = tasks.filter(t => t !== task);
        setTasks(updatedTasks);

    }

    const handleTaskComplete = (taskToComplete) => {
        const updatedTasks = tasks.map(task => {
            if (task === taskToComplete) {
                // Toggle the completed status
                return { ...task, completed: !task.completed };
            }
            return task;
        });

        setTasks(updatedTasks);
    }


    return (
        <>
            <Container className='my-3 justify-content-center'>

                <h1 className='my-2 text-center'>Enter your tasks here</h1>

                <Form.Label htmlFor='task-area'><h4>Enter task</h4></Form.Label>

                <InputGroup>
                    <Form.Control as="textarea" value={taskValue} onChange={(e) => setTaskValue(e.target.value)} aria-label="With textarea" id='task-area' placeholder='Enter task here' />
                </InputGroup>

                <Form.Label className='my-2' htmlFor='setdate'><h4>Enter date</h4></Form.Label>
                <Form.Control
                    type="date"
                    name="datepic"
                    placeholder="DateRange"
                    id='setdate'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <Form.Label className='my-2' htmlFor='settime'><h4>Enter time</h4></Form.Label>
                <Form.Control
                    type="time"
                    className="modalTextField"
                    id='settime'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <Button variant="primary" onClick={handleTaskAdd} className='my-3'>Add Task</Button>

                <br />
                <br />

                {/* Check whether task is available or not, if available display it otherwise not */}
                {tasks.length > 0 &&
                    <div>
                        {tasks.map((task, index) => (
                            <div key={index} style={{
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                padding: '16px',
                                marginTop: '16px'
                            }}>
                                <Row>
                                    <Col className='overflow-scroll'>
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => handleTaskComplete(task)}
                                        />
                                        <h5 className={task.completed ? "completed-task" : ""}>Task: {task.task}</h5>
                                        <h5>On: {task.date.toString()} {task.time}</h5>
                                    </Col>
                                    <Col id='removebutton'>
                                        <div>
                                            <Button variant="danger" onClick={() => handleRemoveTask(task)}>Remove-task</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </div>
                }
            </Container >
        </>
    );
}

export default Home;
