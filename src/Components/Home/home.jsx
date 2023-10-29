import React from 'react';
import './home.css';
import video from '../../assets/video-1.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram, AiOutlineUnorderedList } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { TbApps } from 'react-icons/tb';

const Home = () => {
    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop typeof="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span className="smallText">Our Packages</span>
                    <h1 className="homeTitle">Search Your Holiday</h1>
                </div>

                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination: </label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter name here.." />
                            <GrLocation className="icon" />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Select your Date: </label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label-total flex">
                            <label htmlFor="price">Max price: </label>
                            <h3 className="total">$50000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="50000" min="1000" />
                        </div>
                    </div>
                    <div className="searchOptions flex">
                        <HiFilter className="icon" />
                        <span>MORE FILTERS</span>
                    </div>
                </div>

                <div className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon" />
                        <AiOutlineInstagram className="icon" />
                        <FaTripadvisor className="icon" />
                    </div>
                    <div className="leftIcons">
                        <AiOutlineUnorderedList className="icon" />
                        <TbApps className="icon" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
