import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from "reactstrap";
import { Layout } from "../components/";
import { BlogContext } from "../context/BlogContext";

const CreateBlog = () => {
  const location = useLocation();
  const isUpdate = location.state?.isUpdate;
  const { addBlog, updateBlog, currentBlog } = useContext(BlogContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: isUpdate ? currentBlog?.title : "",
    content: isUpdate ? currentBlog?.content : "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target?.files?.[0] || e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.content) {
      if (isUpdate) {
        updateBlog(currentBlog?.id, formData, navigate);
      } else addBlog(formData, navigate);
    }
  };
  return (
    <Layout>
      <div className="container mt-5">
        <Form onSubmit={handleSubmit}>
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
                value={formData.title}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="content" sm={2}>
              Blog
            </Label>
            <Col sm={10}>
              <Input
                value={formData.content}
                onChange={handleChange}
                name="content"
                id="content"
                placeholder="Type something"
                type="textarea"
                style={{
                  resize: "none",
                  height: "15rem",
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label id="image" sm={2}>
              Select Image
            </Label>
            <Col sm={10}>
              <Input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleChange}
              />
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