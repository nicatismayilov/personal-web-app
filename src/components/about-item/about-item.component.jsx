import React from 'react';

const AboutItem = ({ date, content }) => {
    return (
        <div className="about-item">
            <div className="about-item__left">
                <div className="about-item__date">
                    { date }
                </div>
                <span />
            </div>

            <div className="about-item__right">
                <span />
                <p className="about-item__content">
                    { content }
                </p>
            </div>
        </div>
    )
}

export default AboutItem;