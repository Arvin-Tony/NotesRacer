//TypingGame.js
import React, {
    useState,
    useEffect
} from 'react';
import './App.css';

import Button from 'react-bootstrap/Button';


import {Form} from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

const TypingGame = () => {

    const [text, setText] = useState('');
    const enterText = (event) => {
        setText(event.target.value);
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={8}>
                    <h1 className="text-center mt-5"></h1>
                    <Form.Group controlId="textBox">
                        <Form.Label>Let's Race!</Form.Label>
                        <Form.Control
                            type="text"
                            value={text}
                            onChange={enterText}
                            placeholder="Copy-Paste/Type your notes:"
                        />
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    )
};

export default TypingGame;