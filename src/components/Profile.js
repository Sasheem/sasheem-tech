import React from 'react';
import styled from 'styled-components';

import Image from './image';

const ProfileContainer = styled.div`
  height: 87vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Profile = () => {
    return(
        <ProfileContainer>
            <div style={{ marginRight: '5em' }}>
                <h1>Hi I'm Sasheem</h1>
                <p>Mobile App and Web Developer</p>
                <p style={{ marginBottom: '3em' }}>I build things with React and React Native</p>
                <a
                    style={{
                        fontSize: '1em',
                        textDecoration: 'none',
                        color: 'rgba(0,0,0,0.4)',
                        border: '1px solid rgba(0, 0, 0, 0.4)',
                        padding: '0.3em',
                        borderRadius: '0.3em'
                    }}
                    href="https://www.unhousedhumanity.org/"
                >
                    Currently developing for Unhoused Humanity
        </a>
            </div>
            <div
                style={{
                    maxWidth: '300px',
                    width: '300px',
                    marginLeft: '5em'
                }}>
                <Image />
            </div>
        </ProfileContainer>
    );
};

export default Profile;