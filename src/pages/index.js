import React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1>This is Index Page</h1>
        <p>
          <Link to="/blog">Blog</Link>
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
