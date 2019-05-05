import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/layout';
import blogStyles from './blog.module.scss';

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
        <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.map((edge, idx) => {
            const blogLink = `/blog/${edge.node.fields.slug}`;
            return (
              <li key={idx} className={blogStyles.post}>
                <Link to={blogLink}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </Layout>
  );
};

export default BlogPage;
