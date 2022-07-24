import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Home(){
    return(
      <div>
        <br></br>
    <Container>
    <Card className="text">
      <Card.Header><h1>Saravanamuthu Muthusamy</h1></Card.Header>
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
        <p> <li>I am a passionate, self-driven, proactive, and quick learner with a passion for developing software using python,react and Django framework.</li> 
        <li>I have 4 years of  hands on experience with python programming</li>
        <li>I am currently pursuing master's in computer science at Saint Louis University.</li></p>
        </Card.Text>
      </Card.Body>
    </Card>
    <br></br>
    <Card className="text">
      <Card.Body>
        <Card.Title>Progamming skills</Card.Title>
        <Card.Text>
        <p> <li>Python</li> 
        <li>javascript</li>
        <li>HTML and CSS </li>
        <li>React js </li>
        <li>Django</li>
        <li>My sql and postgre sql</li>
        <li>Google Firebase</li>
        <li>Aws s3</li>
        <li>Aws Sagemaker</li>
        </p>
        </Card.Text>
      </Card.Body>
    </Card>
</Container>
        </div>
    )
}
export default Home