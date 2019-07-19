import React from 'react'
import styled from 'styled-components'

import Image from './image'
import ProjectLink from './ProjectLink'

// when screen < 925px
const ProfileContainer = styled.div`
  height: 40em;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 925px) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
    height: 35em;
  }
`
// when screen < 925px
const LeftContainer = styled.div`
  margin-right: 5em;
  @media only screen and (max-width: 925px) {
    margin-right: 0;
    text-align: center;
  }
`
// when screen < 925px
const RightContainer = styled.div`
  margin-left: 5em;
  width: 300px;
  max-width: 300px;
  @media only screen and (max-width: 925px) {
    margin-left: 0;
  }
`

const Profile = () => {
  return (
    <ProfileContainer>
      <LeftContainer>
        <h1>Hi I'm Sasheem</h1>
        <p>Web Developer based out of Tallahssee, Florida</p>
        <p style={{ marginBottom: '3em' }}>
          I build websites with HTML5, CSS3, and Javascript(React)
        </p>
        <ProjectLink destination="https://www.unhousedhumanity.org/">
          Currently developing for Unhoused Humanity
        </ProjectLink>
      </LeftContainer>
      <RightContainer>
        <Image />
      </RightContainer>
    </ProfileContainer>
  )
}

export default Profile
