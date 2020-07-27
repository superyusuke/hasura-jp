import React from "react"
import { css } from "@emotion/core"

type Props = {
  text: string
  url: string
}

export const Button = (props: Props) => {
  const { text, url } = props
  return (
    <a
      href={url}
      css={css`
        background: #ef1a1a;
        color: white;
      `}
    >
      <button
        css={css`
          background: #ef1a1a;
          color: white;
          padding: 10px;
          margin: 0;
          border: 1px solid white;
          :hover {
            background: black;
          }
        `}
      >
        {text}
      </button>
    </a>
  )
}
