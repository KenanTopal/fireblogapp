import React from 'react';
import { Layout } from '../components/';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const UserProfile = () => {
  return (
    <Layout>
      <Form className="container mt-4">
        <FormGroup>
          <Label>Email</Label>
          <Input placeholder="with a placeholder" type="email" disabled />
        </FormGroup>
        <FormGroup>
          <Label for="first_name">First Name</Label>
          <Input
            id="first_name"
            name="first_name"
            placeholder="First Name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="last_name">Last Name</Label>
          <Input
            id="last_name"
            name="last_name"
            placeholder="Last Name"
            type="text"
          />
        </FormGroup>
        <Button style={{ width: '100%', marginTop: '2rem' }}>Submit</Button>
      </Form>
    </Layout>
  );
};

export default UserProfile;
