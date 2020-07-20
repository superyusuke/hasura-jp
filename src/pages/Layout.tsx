import React, { FC } from "react"
import { Global, css } from "@emotion/core"
import emotionReset from "emotion-reset"

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
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
          padding-top: 30px;
        `}
      >
        {children}
      </div>
    </>
  )
}
