/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Box, Text, Link } from "rebass";

import Theme from "../Theme";

import { useSiteMetadata } from "../../hooks";

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();

  return (
    <Theme>
      <>
        <Box as="header">{title}</Box>
        <Box as="main">{children}</Box>
        <Box as="footer">
          <Text as="p">
            © {new Date().getFullYear()}, Built by
            {` `}
            <Link href="https://deepwork.studio">Deep Work Studio</Link>
          </Text>
        </Box>
      </>
    </Theme>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
