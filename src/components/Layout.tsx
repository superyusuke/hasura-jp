import React, { FC } from "react"
import { Global, css } from "@emotion/core"
import emotionReset from "emotion-reset"

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          body {
            padding: 0;
            margin: 0;
            background: white;
            color: black;
            @media (prefers-color-scheme: dark) {
              background: black;
              color: white;
            }
          }
          a {
            text-decoration: none;
            color: black;
            @media (prefers-color-scheme: dark) {
              color: white;
            }
          }
        `}
      />
      <div
        css={css`
          min-height: 100vh;
          margin: 0 20px;
        `}
      >
        {children}
      </div>
    </>
  )
}
