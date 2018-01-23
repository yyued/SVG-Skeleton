'use strict';

module.exports = ( ) => {
    const defs = document.createElementNS( 'http://www.w3.org/2000/svg', 'defs' );

    defs.innerHTML = `
                        <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="100%">
                            <animate id="color" attributeName="stop-color" color="#fff" dur="1.5s" begin="0" />
                            <stop stop-color="white" offset="-10%">
                                <animate attributeName="offset" values="-.05;.95" dur="1.5s" begin="color.end" repeatCount="indefinite" />
                            </stop>
                            <stop stop-color="black" offset="-5%">
                                <animate attributeName="offset" values="0;1" dur="1.5s" begin="color.end" repeatCount="indefinite" />
                            </stop>
                            <stop stop-color="white" offset="0%">
                                <animate attributeName="offset" values=".05;1.05" dur="1.5s" begin="color.end" repeatCount="indefinite" />
                            </stop>
                        </linearGradient>
                        <mask id="shining">
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#shine)" />
                        </mask>
                    `;


    return defs;
};
