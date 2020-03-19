import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h4
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h4>
      </Link>
      <Link
        to={`/OpticalCharReader/`}
        css={css`
          margin: 12px;
        `}
      >
        OpticalCharReader
      </Link>
      <Link
        to={`/about/`}
        css={css`
          margin: 12px;
        `}
      >
        About
      </Link>

      {children}
    </div>
  )
}
