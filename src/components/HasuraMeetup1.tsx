import React from "react"
import { Button, Heading, Text } from "@adobe/react-spectrum"
import Play from "@spectrum-icons/workflow/Play"

export const HasuraMeetup1 = () => (
  <div>
    <Heading level={2}>HasuraMeetup1</Heading>
    <div>
      <Text>やりました。</Text>
    </div>
    <a href="https://www.youtube.com/playlist?list=PLs27JSo0NJ9MskGKPERrJQxI9UqI2bUfK">
      <Button
        variant="primary"
        marginTop={"single-line-height"}
        marginBottom={"single-line-height"}
      >
        <Play />
        <Text>動画でチェック！</Text>
      </Button>
    </a>
  </div>
)
