import React from 'react';
import {
  Button,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from 'reactstrap';
import { Layout } from '../components/';

const CreateBlog = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <Form>
          <FormGroup row>
            <Label for="title" sm={2}>
              Blog Title
            </Label>
            <Col sm={10}>
              <Input
                name="title"
                id="title"
                placeholder="Enter a title"
                type="text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="content" sm={2}>
              Blog
            </Label>
            <Col sm={10}>
              <Input
                name="content"
                id="content"
                placeholder="Type something"
                type="textarea"
                style={{
                  resize: 'none',
                  height: '15rem',
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label id="image" sm={2}>
              Select Image
            </Label>
            <Col sm={10}>
              <Input id="image" name="image" type="file" accept="image/*" />
              <FormText>Choose the image for your blog</FormText>
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col
              sm={{
                offset: 2,
                size: 10,
              }}
            >
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </Layout>
  );
};

export default CreateBlog;
