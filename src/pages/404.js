import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Something went wrong" />
    <h1>This page doesn’t exist</h1>
    <p>You might have mistyped the address, or the page might have moved.</p>
  </Layout>
);

export default NotFoundPage;
