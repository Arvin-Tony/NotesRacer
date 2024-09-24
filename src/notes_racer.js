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
        <Form.Group controlId="textBox">
            <Form.Label>Let's Race!</Form.Label>
            <Form.Control
                type="text"
                value={text}
                onChange={enterText}
                placeholder="Copy-Paste/Type your notes:"
            />
        </Form.Group>
    )
};

export default TypingGame;