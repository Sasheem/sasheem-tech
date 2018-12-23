import React from 'react';
import styled from 'styled-components';

import Image from './image';
import ProjectLink from './ProjectLink';

const ProfileContainer = styled.div`
  height: 87vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
      flex-direction: column-reverse;
      justify-content: space-evenly;
  }
`;

const LeftContainer = styled.div`
  margin-right: 5em;
  @media only screen and (max-width: 768px) {
      margin-right: 0;
      text-align: center;
  }
`;
const RightContainer = styled.div`
  margin-left: 5em;
  width: 300px;
  max-width: 300px;
  @media only screen and (max-width: 768px) {
      margin-left: 0;
  }
`;

const Profile = () => {
    return(
        <ProfileContainer>
            <LeftContainer>
                <h1>Hi I'm Sasheem</h1>
                <p>Mobile App and Web Developer</p>
                <p style={{ marginBottom: '3em' }}>I build things with React and React Native</p>
                <ProjectLink destination="https://www.unhousedhumanity.org/">Currently developing for Unhoused Humanity</ProjectLink>
            </LeftContainer>
            <RightContainer>
                <Image />
            </RightContainer>
        </ProfileContainer>
    );
};

export default Profile;