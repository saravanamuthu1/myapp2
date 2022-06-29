import React from 'react';
import "./Sidebar.css";

import { FormControl,InputGroup, Button,Container} from 'react-bootstrap';
function Sidebar(){
  return (
    <div className='elem'>
    <br></br>
    <InputGroup>
    <InputGroup.Text>Enter the publication details</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" />
    <Button variant="primary">submit</Button>
  </InputGroup>
    </div>
  )
};

export default Sidebar;