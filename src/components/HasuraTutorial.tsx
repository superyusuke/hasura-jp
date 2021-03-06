import React from "react"
import { Button } from "src/components/Button"

export const HasuraTutorial = () => (
  <div>
    <h2>Hasura First Tutorial</h2>
    <Button url={"https://youtu.be/FMSDHXgyq2Y"} text={"動画でチェック！"} />
    <ol>
      <li>
        <a href="https://uncle-javascript.com/hasura-tutorial-1">
          Hasura チュートリアル1 Hasura を立ち上げよう
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
