import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
// import { library, icon } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { twitter-square } from '@fortawesome/free-solid-svg-icons';
// import { linkedin } from '@fortawesome/free-solid-svg-icons';
// import { github } from '@fortawesome/free-solid-svg-icons';

// library.add(twitter);
// library.add(linkedin);
// library.add(github);

// const twitter = icon({ prefix: 'fab', iconName: 'twitter-square' });

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      className="ui secondary menu"
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <p>
        <Link 
          className="item" to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          About
        </Link>
      </p>
      <p>
        <Link
          className="item" to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Projects
        </Link>
      </p>
      <p>
        <Link
          className="item" to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Contact
        </Link>
      </p>
      
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
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
