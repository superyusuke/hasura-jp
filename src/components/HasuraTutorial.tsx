import React from "react"
import { css } from "@emotion/core"
import { Button, Text, Heading } from "@adobe/react-spectrum"
import Play from "@spectrum-icons/workflow/Play"

export const HasuraTutorial = () => (
  <div>
    <Heading level={2}>Hasura First Tutorial</Heading>
    <a href="https://youtu.be/FMSDHXgyq2Y">
      <Button variant="primary" marginBottom={"single-line-height"}>
        <Play />
        <Text>動画でチェック！</Text>
      </Button>
    </a>
    <ol>
      <li>
        <a href="https://uncle-javascript.com/hasura-tutorial-1">
          <Text>Hasura チュートリアル1 Hasura を立ち上げよう</Text>
        </a>
      </li>
      <li>
        <a href="https://uncle-javascript.com/hasura-tutorial-2">
          Hasura チュートリアル2 データベース(PostgresDB)にテーブルを作ろう
        </a>
      </li>
      <li>
        <a href="https://uncle-javascript.com/hasura-tutorial-3">
          Hasura チュートリアル3 GraphQL で DB から値を取得する
        </a>
      </li>
      <li>
        <a href="https://uncle-javascript.com/hasura-tutorial-4">
          Hasura チュートリアル4 GraphQL で DB に item を追加する
        </a>
      </li>
      <li>
        <a href="https://uncle-javascript.com/hasura-tutorial-5">
          Hasura チュートリアル5 Hasura の全体像について理解しよう
        </a>
      </li>
    </ol>
  </div>
)
