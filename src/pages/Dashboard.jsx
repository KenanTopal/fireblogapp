import React from 'react';

import { BlogCard, Layout } from '../components/';

const Dashboard = () => {
  return (
    <Layout>
      <p className="fs-2 text-center mt-5">Dashboard</p>
      <div className="container d-flex flex-wrap gap-3 justify-content-center ">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </Layout>
  );
};

export default Dashboard;
