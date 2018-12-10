import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
// import ProfileImage from '../components/profile-image';
import 'semantic-ui-css/semantic.min.css'

const IndexPage = () => (
  <Layout>
    <div className="segment">
      <h1>Hi I'm Sasheem</h1>
      <p>Mobile App and Web Developer</p>
      <p>I build using React and React Native</p>
    </div>
    
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
