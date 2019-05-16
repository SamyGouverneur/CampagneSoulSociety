import React from 'react';

window.onscroll = () => {
    const backArrow = document.getElementById('backArrow');
    backArrow.className = (window.pageYOffset > 100) ? "visible" : "invisible";
};

const BackArrow = () => {
    return (
        <div>
            <a href="#home" id="backArrow" className="invisible"> </a>
        </div>
    )
};

export default BackArrow;