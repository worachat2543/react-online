import React from 'react'
import PropTypes from 'prop-types';

const Footer = () => {

    return(
    <>
    <footer className="container">
    <p>© Company 2000-{new Date().getFullYear()}</p>
  </footer>

    </>
    )
}

export default Footer
