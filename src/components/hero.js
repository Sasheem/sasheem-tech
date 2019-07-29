import React from "react"
import { Link } from "gatsby"
import Image from "./profileImage"

export default () => (
  <div
    style={{
      height: `70vh`,
      width: `100%`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
    }}
  >
    <div style={{ flex: 0.1 }} />
    <div
      style={{
        flex: 1,
      }}
    >
      <h1 style={{ margin: 0 }}>Hi I'm Sasheem</h1>
      <p style={{ margin: `0.5rem 0` }}>
        A web designer and developer based out of Tallahassee, FL
      </p>
      <p style={{ textAlign: `left`, marginTop: `1.5rem` }}>
        <Link
          to="/projectDetails/"
          style={{
            backgroundImage: `none`,
            border: `solid 1px #1d9f86`,
            padding: `0.3rem`,
            borderRadius: `0.3rem`,
          }}
        >
          Request a proposal
        </Link>
      </p>
    </div>
    <div style={{ flex: 0.5 }} />
    <div style={{ flex: 1 }}>
      <Image />
    </div>
    <div style={{ flex: 0.1 }} />
  </div>
)
