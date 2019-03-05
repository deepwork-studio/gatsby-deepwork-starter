/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import { useSiteMetadata } from "../../hooks";

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();

  return (
    <>
      <header>{title}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://deepwork.studio">Deep Work Studio</a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
