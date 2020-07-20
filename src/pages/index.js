import React from "react"
import { HasuraTutorial } from "src/components/HasuraTutorial"
import { HasuraMeetup1 } from "src/components/HasuraMeetup1"

const IndexPage = () => (
  <div>
    <h2>Hasura Japan User Group</h2>
    <HasuraMeetup1 />
    <HasuraTutorial />
  </div>
)

export default IndexPage
