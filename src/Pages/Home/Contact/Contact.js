import React from 'react';
import { Button, FormControl, InputGroup, ListGroup } from 'react-bootstrap';


const Contact = () => {
    return (
        <div className='container mb-4 '>
            <h1 className='text-danger'>Contact Us</h1>
            <div className=" d-flex bg-secondary  ">
       

       <div id="contacts" className="row-6 container ">
           <>
           <h3 className="mt-5 text-white">Leave a Message</h3>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <FormControl
             placeholder="First Name:"
           aria-label="First Name"
          aria-describedby="basic-addon1"
     
         />
      </InputGroup>
    <InputGroup className="mb-3">
   <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
   <FormControl
     placeholder="Email:"
     aria-label="Email"
     aria-describedby="basic-addon1"/>
     </InputGroup>
      <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <FormControl as="textarea" aria-label="With textarea" />
    </InputGroup>
     <Button className="m-2 " variant="primary" type="submit">
       Submit
    </Button>

       </> 
           </div >
           
           <div className=" row-6 mt-5 m-5 container">
            <ListGroup variant="flush">
            <h3 className=" text-center text-white">Contact</h3>
            <ListGroup.Item>121 King St, Melbourne VIC 3000, Australia</ListGroup.Item>
            <ListGroup.Item>+999 0170000</ListGroup.Item>
           <ListGroup.Item>info@healthcare.com</ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
       </ListGroup>
           </div>
   </div>
 </div>
    
    );
};

export default Contact;