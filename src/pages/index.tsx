import React from "react"
import { Layout } from "src/pages/Layout"
import { HasuraTutorial } from "src/components/HasuraTutorial"
import { HasuraMeetup1 } from "src/components/HasuraMeetup1"

import { Provider, defaultTheme, Heading } from "@adobe/react-spectrum"

const IndexPage = () => (
  <Provider theme={defaultTheme}>
    <Layout>
      <Heading level={1}>Hasura Japan User Group</Heading>
      <HasuraMeetup1 />
      <HasuraTutorial />
    </Layout>
  </Provider>
)

export default IndexPage
