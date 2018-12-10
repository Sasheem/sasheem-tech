import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const styles = {
  
}

const Header = ({ siteTitle }) => (
  <div
    className="ui secondary menu"
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div className="left menu">
      <i class="github square icon big"></i>
      <i class="linkedin icon big"></i>
      <i class="twitter square icon big"></i>
    </div>
    <div
      className="right menu"
      style={{
        
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
