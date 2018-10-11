import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Card, Col, Row, Container, CardBody, CardTitle, CardHeader } from 'reactstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { google } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab);

const responseGoogle = (response) => {
  const userInfo = response;
  console.log(response);
  console.log('USER-INFO',userInfo);

  state.userData = userInfo.profileObj;
  state.tokenData = userInfo.tokenObj

  axios.post('http://localhost:3001/login', state)
  .then(res => {
    localStorage.setItem('token', res.data.token);
  }).catch(e => console.log(e));
};

const state = {
  userData : {},
  tokenData : {}
};

console.log(state);



const GoogleSignInCard = () => {
  return (
    <Container className='mt-4'>
      <Row sm='6'>
        <Col sm='6'>
          <Card>
            <CardHeader>
              <CardTitle>Sign In to Firestation</CardTitle>
            </CardHeader>
            <CardBody>
              <GoogleLogin
                clientId='933105496273-j3plqu9mnj4gcvng7arq45kmjvdi98iu.apps.googleusercontent.com'
                buttonText='Login'
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              >
                <FontAwesomeIcon icon={'google'}/>
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