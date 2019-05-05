import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import footerStyles from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer className={footerStyles.footer}>
      Site by {data.site.siteMetadata.author} © 2019
    </footer>
  );
};

export default Footer;
