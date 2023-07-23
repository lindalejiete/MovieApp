import React from 'react'
import './Footer.css'
// @ts-ignore
import FBLogo from '../../assets/FB_logo.svg'
// @ts-ignore
import IGLogo from '../../assets/IG_logo.svg'
// @ts-ignore
import YTLogo from '../../assets/YT_logo.svg'

const Footer = () => {
    return (
        <div id="footer" className="Footer">
            <div className='FooterContainerWrapper'>
                <div className='FooterContainer'>
                    <div className="FooterFollow">
                        <h4>FOLLOW</h4>
                        <ul>
                            <li>
                                <div>
                                    <img src={YTLogo} alt="youtube"></img>
                                </div>
                                YOUTUBE
                            </li>
                            <li>
                                <div>
                                    <img src={IGLogo} alt="instagram"></img>
                                </div>
                                INSTAGRAM
                            </li>
                            <li>
                                <div>
                                    <img src={FBLogo} alt="facebook"></img>
                                </div>
                                FACEBOOK
                            </li>
                        </ul>
                    </div>
                    <div className="FooterPagemap">
                        <div className="FooterPagemapSection">
                            <h4>MOVIES</h4>
                            <ul>
                                <li>TOP</li>
                                <li>MY LIST</li>
                            </ul>
                        </div>
                        <div className="FooterPagemapSection">
                            <h4>TV SERIES</h4>
                            <ul>
                                <li>TOP</li>
                                <li>MY LIST</li>
                            </ul>
                        </div>
                        <div className="FooterPagemapSection">
                            <h4>DOCUMENTARIES</h4>
                            <ul>
                                <li>TOP</li>
                                <li>MY LIST</li>
                            </ul>
                        </div>
                    </div>
                    <div className="FooterContact">
                        <h4>GET IN TOUCH</h4>
                        <ul>
                            <li>MOVIE LIBRARY</li>
                            <li>info@ml.com</li>
                            <li>Riga, Latvia</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer