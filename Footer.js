import React from 'react'
import PropTypes from 'prop-types';

const Footer = ({title,website,address,postcode,isOpen}) => {
    //const{title,website,address,postcode} = props;
    /*const nickName = "Por"
    return (
        <div>
            <h1>Worachat Wituwinit {nickName}</h1>
        </div>
    )*/
    return(
    <div>
        <h3 style={styles.title}>{title}&copy; {new Date().getFullYear()}</h3>
        <p style={{color:'green',fontSize:18}}>{website} {address} {postcode} {isOpen.toString()}</p>
    </div>
    )
}

const styles ={
    title : {
        color:'red'

    }
}

Footer.propTypes = {
    title: PropTypes.string,
    website: PropTypes.string,
    address: PropTypes.string,
    postcode: PropTypes.number,
    isOpen: PropTypes.bool
    
    
  };

export default Footer
