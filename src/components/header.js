import { Link } from 'gatsby'
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { TwitterSquare } from 'styled-icons/fa-brands/TwitterSquare';
import { Linkedin } from 'styled-icons/fa-brands/Linkedin';
import { GithubSquare } from 'styled-icons/fa-brands/GithubSquare';

import ProjectLink from './ProjectLink';

const HeaderLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1em;
  margin-right: 4em;
`;
const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1em;
  margin-right: 4em;
`;

const TwitterLink = styled(TwitterSquare)``;
const LinkedinLink = styled(Linkedin)``;
const GithubLink = styled(GithubSquare)``;

const styles = {
  socialStyles: {
    color: 'black',
    marginRight: '0.1em',
  },
}



const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
      display: 'flex',
    }}
  >
    <div 
      id="leftMenu" 
      style={{  
        display: 'flex', 
        paddingTop: '0.9em',
        flex: '2',
        marginLeft: '1em', 
      }}>
      <a class="item" href="https://www.github.com/Sasheem">
        <GithubLink title="Github Link" size="40" style={styles.socialStyles} />
      </a>
      <a class="item" href="https://www.linkedin.com/in/sasheem/">
        <LinkedinLink title="Linkedin Link" size="40" style={styles.socialStyles} />
      </a>
      <a class="item" href="https://twitter.com/sasheemdev">
        <TwitterLink title="Twitter Link" size="40" style={styles.socialStyles} />
      </a>
    </div>
    
    <div 
      id="rightMenu" 
      style={{ 
        display: 'flex', 
        paddingTop: '1.2em',
        flex: '2',
        justifyContent: 'flex-end',
        marginRight: '1em',
      }}
    >
      {/* <p>
        <HeaderLink to="/">
          Home
        </HeaderLink>
      </p> */}
      {/* <p>
        <HeaderLink to="/">
          About
        </HeaderLink>
      </p> */}
      <p>
        <StyledLink href="https://github.com/Sasheem?tab=repositories">
          Projects
        </StyledLink>
      </p>
      <p>
        {/* <StyledLink onClick={ () => {
          document.getElementById('contactSection').scrollIntoView()
        }}>
          Contact
        </StyledLink> */}
        {/* <HeaderLink to="/">
          Contact
        </HeaderLink> */}
      </p>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header;
