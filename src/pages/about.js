import React from 'react';

import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
      <div>
        <h1>About</h1>
        <p>
          This is a sample about page
          <a href="/blog">Blog</a>
        </p>
      </div>
    </Layout>
  );
};

export default About;
