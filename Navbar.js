import React from 'react';
import { Link, } from 'react-router-dom';


const Navbar = () => {
  return (

    <div style={styles.navbg}>

      <img style={styles.image} src={require('../assets/GG-Logo.png')} alt='logo' />
      <div style={styles.navbar}>


        <div style={styles.navitem}>
          <Link to="/">Home</Link>
        </div>
        <div style={styles.navitem}>
          <Link to="/chat">Music+Chat</Link>
        </div>
        <div style={styles.navitem}>
          <Link to="/movie">Movie</Link>
        </div>
        <div style={styles.navitem}>
          <Link to="/room">Common Room</Link>
        </div>

      </div>
      
    </div>
  )

}

export default Navbar;


const styles = {
  image: {
    backgroundColor: "black",
    height: '80px',
    width: '120px',
    color: "white",
    alignItem: 'center',
    marginLeft: '200px',
    marginTop: '-12px'


  },
  navbg: {
    backgroundColor: 'black',
    height: '60px',
    width: '100%',
    padding: '1rem',

  },
  navbar: {
    backgroundColor: "white",
    display: 'flex',
    alignItem: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    width: '900px',
    marginLeft: '400px',
    marginTop: '-65px'




  },
  navitem: {
    margin: '0.5rem',
    color: 'black',
    fontSize:'35px',
    padding:'20px'

  },

  icons:{
    backgroundColor:'red',
    height:'40px',
    width:'20px',
  

  }
}