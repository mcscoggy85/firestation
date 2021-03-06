import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Card, Col, Row, Container, CardBody, CardTitle, CardHeader } from 'reactstrap';
import axios from 'axios';

const responseGoogle = (response) => {
  const userInfo = response;

  state.userData = userInfo.profileObj;
  state.tokenData = userInfo.tokenObj

  axios.post('http://localhost:3001/login', state)
  .then(res => {
    localStorage.setItem('token', res.data.token);
    window.location.reload();
  }).catch(e => console.log(e));
  
};

const state = {
  userData : {},
  tokenData : {}
};

// console.log(state);



const GoogleSignInCard = () => {
  return (
    <Container fluid className='mt-4'>
      <Row sm='6'>
        <Col sm='6'>
          <Card >
            <CardHeader>
              <CardTitle>Sign In to Firestation</CardTitle>
            </CardHeader>
            <CardBody>
              <GoogleLogin
                clientId='<ENTER CLIENTID HERE>'
                buttonText='Login'
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              >
                <span>Login with Google</span>
              </GoogleLogin>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GoogleSignInCard;
