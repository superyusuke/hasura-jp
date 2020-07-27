import React, { FC } from "react"
import { Global, css } from "@emotion/core"
import emotionReset from "emotion-reset"

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            font-family: "Limelight", cursive, "Sawarabi Mincho", sans-serif;
          }
          body {
            padding: 0;
            margin: 0;
            background: #ef1a1a;
            color: white;
          }
          a {
            text-decoration: none;
            color: white;
            &:hover {
              background: black;
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
