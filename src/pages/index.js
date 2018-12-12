import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import Layout from '../components/layout'
import Image from '../components/image'

const ProfileContainer = styled.div`
  height: 88vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IndexPage = () => (
  <Layout>
    <ProfileContainer>
      <div style={{ marginRight: '5em' }}>
        <h1>Hi I'm Sasheem</h1>
        <p>Mobile App and Web Developer</p>
        <p>I build things with React and React Native</p>
      </div>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem', width: '300px', marginLeft: '5em' }}>
        <Image />
      </div>
    </ProfileContainer>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
