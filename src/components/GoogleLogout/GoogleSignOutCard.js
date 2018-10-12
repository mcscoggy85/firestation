import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { Card, Col, Row, Container, CardBody, CardTitle, CardHeader } from 'reactstrap';

const removeToken = () => {
  console.log('REMOVE TOKEN')
  localStorage.removeItem('token');
  window.location.reload();
};

const logout = (response) => {
  console.log(response);
}



const GoogleSignOutCard = () => {
  return (
    <Container fluid className='mt-4'>
      <Row sm='6'>
        <Col sm='6'>
          <Card >
            <CardHeader>
              <CardTitle>Sign Out of Firestation</CardTitle>
            </CardHeader>
            <CardBody>
              <GoogleLogout 
                // buttonText='Logout of Firestation'
                onLogoutSuccess={logout}
              ><span onClick={removeToken} >Logout of Firestation</span>
              </GoogleLogout>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GoogleSignOutCard;
