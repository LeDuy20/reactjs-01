import React from 'react';
import './Footer.css';
import video2 from '../../assets/video-2.mp4';
import { FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { BiChevronRight } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                    <div className="inputDiv flex">
                        <input type="text" placeholder="Enter Email Address" />
                        <button className="btn flex" type="submit">
                            SEND <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#!" className="logo flex">
                                <MdOutlineTravelExplore className="icon" /> Travel.
                            </a>
                        </div>
                        <div className="footerParagraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ab cumque similique
                            blanditiis molestias consectetur voluptatum ratione eaque quod officia.
                        </div>

                        <div className="footerSocials flex">
                          <AiOutlineTwitter className='icon'/>
                          <AiFillYoutube className='icon'/>
                          <AiFillInstagram className='icon'/>
                          <FaTripadvisor className='icon'/>
                        </div>
                    </div>

                    <div className="footerLink grid">
                      {/* Group 1 */}
                      <div className="linkGroup">
                        <span className="groupTitle">
                          OUR AGENCY
                        </span>

                        <li className="footerList flex">
                          <BiChevronRight className='icon'/> 
                          Services
                        </li>
                        <li className="footerList flex">
                          <BiChevronRight className='icon'/> 
                          Insurance
                        </li>
                        <li className="footerList flex">
                          <BiChevronRight className='icon'/> 
                          Agency
                        </li>
                        <li className="footerList flex">
                          <BiChevronRight className='icon'/> 
                          Tourism
                        </li>
                        <li className="footerList flex">
                          <BiChevronRight className='icon'/> 
                          Payment
                        </li>
                      </div>

                      {/* Group 2 */}
                      <div className="linkGroup">
                        <span className="groupTitle">
                          PARTNERS
                        </span>

                        <li className="footerList flex">
                          <BiChevronRight className='icon'/> 
                          Bookings
                        </li>
                        <li className="footerList flex">
                          <BiChevronRight className='icon'/> 
                          Rentcars
                        </li>
                        <li className="footerList flex">
                          <BiChevronRight className='icon'/> 
                          HostelWorld
                        </li>
                        <li className="footerList flex">
                          <BiChevronRight className='icon'/> 
                          Trivago
                        </li>
                        <li className="footerList flex">
                          <BiChevronRight className='icon'/> 
                          TripAdvisor
                        </li>
                      </div>

                      {/* Group 3 */}
                      <div className="linkGroup">
                        <span className="groupTitle">
                          LAST MINUTE
                        </span>

                        <li className="footerList flex">
                          <BiChevronRight className='icon'/> 
                          Lon Don
                        </li>
                        <li className="footerList flex">
                          <BiChevronRight className='icon'/> 
                          Californida
                        </li>
                        <li className="footerList flex">
                          <BiChevronRight className='icon'/> 
                          Indonesia
                        </li>
                        <li className="footerList flex">
                          <BiChevronRight className='icon'/> 
                          Europe
                        </li>
                        <li className="footerList flex">
                          <BiChevronRight className='icon'/> 
                          Oceania
                        </li>
                      </div>
                    </div>

                    <div className="footerDiv flex">
                      <small>BEST TRAVEL WEBSITE THEME</small>
                      <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
