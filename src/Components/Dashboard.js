import React, { useState } from 'react';
import { Card,Container,Button } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import InputGroup from 'react-bootstrap/InputGroup';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
function Dashboard(){
    const [publication, addpublication] = useState([])
    return(
      <Container className='align-items-center justify-content-center'>
        <h1>Publications</h1>
        <Form>
        <Form.Group id="input"></Form.Group>
        <InputGroup>
        <InputGroup.Text>Enter the publication details</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
        <Button variant="primary" type="submit">
            Add publication 
        </Button>
        </Form>
    </Container>
    )
}
export default Dashboard