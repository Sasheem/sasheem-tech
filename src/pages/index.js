// import React from 'react'
// import styled from 'styled-components';
//
// import Layout from '../components/layout'
// import Profile from '../components/Profile';
// // import About from '../components/About';
// import Projects from '../components/Projects';
// import Contact from '../components/Contact';
//
// const PageLessLayout = styled(Layout)`
//   display: flex;
//   flex-direction: column;
// `;
//
// const IndexPage = () => (
//   <PageLessLayout>
//     <Profile />
//     {/* <About /> */}
//     {/* <Projects /> */}
//     <Contact id="contactSection" />
//   </PageLessLayout>
// )
//
// export default IndexPage
// //

import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Contact from "../components/Contact"

export default () => (
  <Layout>
    <Hero />
    <Contact />
  </Layout>
)
