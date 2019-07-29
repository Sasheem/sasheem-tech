import React from "react"

import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1140,
          display: `flex`,
          minHeight: `100vh`,
          flexDirection: `column`,
        }}
      >
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: `description`,
              content: `Portfolio website showcasing websites and mobile apps developed by Sasheem Dev LLC`,
            },
            {
              name: `keywords`,
              content: `website design, website development, website, mobile app, Sasheem, Snell`,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <div style={{ flex: 1, marginBottom: `20vh` }}>{children}</div>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
    )}
  />
)

export default Layout


// import React from 'react'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'
//
// import Header from './header'
// import './layout.css'
//
// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             { name: 'description', content: 'Personal portfolio website for Sasheem Snell' },
//             { name: 'keywords', content: 'mobile app, website, Sasheem, Snell, development' },
//           ]}
//         >
//           <html lang="en" />
//         </Helmet>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div style={{ margin: '0 auto' }}>
//           {children}
//         </div>
//       </>
//     )}
//   />
// )
//
// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }
//
// export default Layout
