import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <div>
    <h2>Hasura Japan User Group</h2>
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
    </ol>
  </div>
)

export default IndexPage
