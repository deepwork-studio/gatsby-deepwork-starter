import React from "react";
import { Heading, Text } from "rebass";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Heading as="h1">Hi peeps</Heading>
    <Text as="p">Welcome to your new Deep Work Studio site.</Text>
    <Text as="p">Let's get building!</Text>
  </Layout>
);

export default IndexPage;
