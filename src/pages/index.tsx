import React from "react"
import { css } from "@emotion/core"
import { Layout } from "src/components/Layout"
import { HasuraTutorial } from "src/components/HasuraTutorial"
import { HasuraMeetup1 } from "src/components/HasuraMeetup1"

const IndexPage = () => (
  <Layout>
    <h1
      css={css`
        margin: 0;
        padding-top: 20px;
      `}
    >
      Hasura Japan User Group
    </h1>
    <HasuraMeetup1 />
    <HasuraTutorial />
  </Layout>
)

export default IndexPage
