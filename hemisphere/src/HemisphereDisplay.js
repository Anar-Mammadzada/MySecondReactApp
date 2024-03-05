import React from 'react';
import './Hemisphere.css';
import northernPic from './image/Northern.png';
import southernPic from './image/Southern.jpg';

const hemisphereConfig = {
    Northern: {
        text: 'it is northern hemisphre',
        picture: northernPic
    },
    Southern: {
        text: 'it is southern hemisphere',
        picture: southernPic
    }
}

const HemisphereDisplay = ({ latitude }) => {

    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const { text, picture } = hemisphereConfig[hemisphere]

    return (
        <div className={hemisphere}>
            <div className='ui reaised textcontainer segment'>
                <div className='image'>
                    <img src={picture} alt='hemisphere' />
                </div>
                <div className='ui teal bottom attached label'>
                  <h1>{text}</h1>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay;