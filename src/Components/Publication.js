import React, { useState } from "react"
import { Container,InputGroup,FormControl,ListGroup,Button} from "react-bootstrap"
function Publication(){
    const [data,setData]= useState([])
    const [print,setPrint]= useState(false)
    let count=0
    function handleChange(val){
        setData([...data,val.target.value])
    }
    function handleSubmit(){
        setPrint(true)
        count=count+1
    }
    return(
    <>
    <Container>
    <br></br>
    <h1>Enter the Publication</h1>
    <br></br>
    <InputGroup>
    <InputGroup.Text>Enter the publication details</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" onChange={handleChange} />
    <Button variant="primary" onClick={handleSubmit}>submit</Button>
  </InputGroup>
    </Container>
    <br></br>
    <Container>
    <ListGroup>
    <h1>Publication</h1>
  <ListGroup.Item><p>Valeria Turina, Zongshun Zhang, Flavio Esposito, and Ibrahim Matta. ‘‘Federated or Split? A Performance and Privacy Analysis of Hybrid Split and Federated Learning Architectures". In proc. of IEEE Int. Conference on Cloud Computing (IEEE CLOUD 2021). Sept. 5-10, 2021, Virtual event. Bibtex</p></ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  {

    print?
    <ListGroup.Item><p>{data}</p></ListGroup.Item>
    :null
  }
</ListGroup>
</Container>
    </>
    )
}
export default Publication