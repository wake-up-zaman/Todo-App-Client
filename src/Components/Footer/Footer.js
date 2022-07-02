import React from 'react';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <div className='footer'>
            <div className='footer2'>
                <div className='social'>
                    <span className='mr-4 icon2'><TiSocialLinkedin  /></span>
                    <span className='mr-4 icon2'><TiSocialFacebook /></span>
                    <span className='mr-4 icon2'><TiSocialTwitter /></span>
                    <span className='mr-4 icon2'><TiSocialYoutube /></span>
                </div>
                
            </div>
            
        </div>

    );
};

export default Footer;