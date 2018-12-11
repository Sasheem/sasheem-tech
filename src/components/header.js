import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';

const styles = {
  links: {
    color: 'black',
    textDecoration: 'none',
    fontSize: '1.3rem',
  },
  socialLinks: {
    marginRight: '-2.5rem',
  }
}

const HeaderLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 2rem;
`;

const Header = ({ siteTitle }) => (
  <div
    className="ui secondary menu"
    style={{
      // background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <a class="item" style={styles.socialLinks} href="https://www.github.com/Sasheem">
      <i class="github square icon big link"></i>
    </a>
    <a class="item" style={styles.socialLinks} href="https://www.linkedin.com/in/sasheem/">
      <i class="linkedin icon big link"></i>
    </a>
    <a class="item" style={styles.socialLinks} href="https://twitter.com/sasheemdev">
      <i class="twitter square icon big link"></i>
    </a>
    <div className="right menu" style={{ marginTop: '.45rem', marginRight: '5rem' }}>
      <p>
        <HeaderLink to="/">
          About
        </HeaderLink>
        {/* <Link className="item" to="/" style={styles.links}>
          About
        </Link> */}
      </p>
      <p>
        <HeaderLink to="/">
          Projects
        </HeaderLink>
        {/* <Link className="item" to="/" style={styles.links}>
          Projects
        </Link> */}
      </p>
      <p>
        <HeaderLink to="/">
          Contact
        </HeaderLink>
        {/* <Link className="item" to="/" style={styles.links}>
          Contact
        </Link> */}
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

export default Header
