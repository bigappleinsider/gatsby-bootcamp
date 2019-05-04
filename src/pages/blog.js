import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

import { graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <div>
        <h1>Blog Page</h1>
        <ol>
          {data.allMarkdownRemark.edges.map((edge, idx) => {
            const blogLink = `/blog/${edge.node.fields.slug}`;
            return (
              <li key={idx}>
                <h2>
                  <Link to={blogLink}>{edge.node.frontmatter.title}</Link>
                </h2>
                <p>{edge.node.frontmatter.date}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </Layout>
  );
};

export default BlogPage;
