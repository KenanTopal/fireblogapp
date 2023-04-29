import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';
import { BiLike, BiCommentDots, BiBullseye } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <Card
      style={{
        width: '20rem',
      }}
    >
      <CardImg
        alt="Card image cap"
        src="https://clarusway.com/wp-content/uploads/2022/02/Adsiz-tasarim-4.png"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">Title</CardTitle>
        <div className="d-flex justify-content-between">
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Author: author info
          </CardSubtitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            publish date
          </CardSubtitle>
        </div>
        <CardText>content</CardText>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/post/details/11`}>
            <Button>See More</Button>
          </Link>
          <div className="d-flex gap-2">
            <span className="d-flex align-items-center justify-content-center">
              1
              <BiLike className="fs-4" />
            </span>
            <span>
              2
              <BiCommentDots className="fs-4" />
            </span>
            <span>
              3
              <BiBullseye className="fs-4" />
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
