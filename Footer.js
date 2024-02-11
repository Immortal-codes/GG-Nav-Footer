import React from 'react'
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
export default function Footer() {
  return (
    <div style={styles.footerMain}>
      <div style={styles.icondiv}>
        <div style={styles.icons}> <SlSocialFacebook /> </div>
        <div style={styles.icons}>  <SlSocialInstagram /></div>
        <div style={styles.icons}> <SlSocialLinkedin /></div>
        <div style={styles.icons}> <TiSocialTwitter /></div>
      </div>

      <div style={styles.copyright}>
        <h1>Copyright @2024; Designed by Rajan Sharma</h1>
      </div>

    </div>
  )
}

const styles = {
  footerMain: {
    backgroundColor: "black",
    alignitem: 'center',
    color: 'white',
    justifyContent: 'center',
    height: '110px',


  },

  icondiv: {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    height: '50px',
    fontSize: '35px',
    color:'white',
  },

  icons:{
    padding:'10px',
    border:'100px',
  },

  copyright: {
    marginLeft: '500px',
    marginTop:'-15px'
  }

}
