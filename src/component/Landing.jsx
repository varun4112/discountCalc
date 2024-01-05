import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form } from 'react-bootstrap';
import { TextField } from '@mui/material';



function Landing() {
    const [total,setTotal] = useState(0);
    const [amount,setAmount] = useState(0);
    console.log(amount);
    const [perc,setPerc] = useState(0);
    console.log(perc);


    function calc(){
        const disc=(amount*perc)/100;
        let tot=amount-disc;
        setTotal(tot)
    }


  return (
    <>
    <Container className='mt-5' style={{backgroundColor:"#f4f3f4"}}>
      <Row >
        <Col>
        <img className='m-5' style={{height:"400px",textAlign:'center' }} src="https://cdn.myportfolio.com/eb5d7870-77fd-45fe-b452-9ca4f3e4e9e2/51704304-7ca2-48a3-96ef-bd85bd01251c_rw_600.gif?h=fe28b7f10be56cede6386f37f5d9edc4" alt="" />
        </Col>
        <Col className='m-5 p-5' style={{backgroundColor:"#f4f3f4"}}>
        <h1 style={{textAlign:"center"}}>Discount Calculator</h1>
        <Form>
        <TextField
          required
          id="amount outlined-required"
          label="Amount"
          placeholder='Enter Amount'
          className=' w-100'
          onChange={(e)=>setAmount(e.target.value)}
        />
        <br />
        <TextField
          required
          id="discount outlined-required"
          label="Discount"
          placeholder='Enter discount Percentage'
          className=' mt-3 w-100'
          onChange={(e)=>setPerc(e.target.value)}
          
        />
        <br></br>
        <Button className='btn-success mt-2 w-100' onClick={calc} >Submit</Button>
        <br />
        <Button className='btn-danger mt-2 w-100' type='submit' >Reset</Button>        
        </Form>
        <h3 className='mt-3' style={{textAlign:"center"}}>Total Amount:{total}</h3>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Landing