import React from "react"
import { css } from "@emotion/core"

export const HasuraDocumentTranslation = () => (
  <div
    css={css`
      a {
        border-bottom: 1px solid cornflowerblue;
      }
    `}
  >
    <h2>Hasura 公式ドキュメントの翻訳</h2>
    <a href="https://uncle-javascript.com/hasura-document-remote-schema">
      Remote Schema
    </a>
  </div>
)
