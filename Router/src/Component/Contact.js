import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Divider from '@material-ui/core/Divider';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';
import Post from "./Post";

const Contact = () =>{
    
    return(
        // <div className='ui raised very padded text container segment' style={{marginTop:'80px'}}>
        //     <h3 className='ui header'>Contact</h3>
        //     <p>This is Contact Us Page </p>
        // </div>
        <div className="home" > 
                <div className="container-fluid" style={{width:'100%'}}>
                   <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://fontmeme.com/images/instagram-new-logo.png"
              width="150"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>


      <Post />

      
             
      
              </div>
              </div>
    )
}
export default Contact