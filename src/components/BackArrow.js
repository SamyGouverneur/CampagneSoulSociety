import React from 'react';

document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function(ev) {
        document.getElementById("backArrow").className = (window.pageYOffset > 100) ? "visible" : "invisible";
    };
});

const BackArrow = () => {

        return (
            <div><a id="backArrow" className="invisible" href="#home"></a></div>
        );
}

export default BackArrow;
