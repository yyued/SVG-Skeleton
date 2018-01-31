import SVGSkeleton from './svg-skeleton';

const { h, render, diff } = SVGSkeleton;

const Item = (
    <svg width="750" height="191">
        <circle cx="95" cy="102" r="63" fill="#edeff0" mask="url(#shining)" />
        <rect width="160" height="35" x="190" y="45" fill="#edeff0" mask="url(#shining)" />
        <rect width="400" height="35" x="190" y="90" fill="#edeff0" mask="url(#shining)" />
        <line x1="0" y1="190" x2="750" y2="190" stroke="#edeff0" />
    </svg>
);

const Page = ( ( ) => {
    let List = [ ];

    for ( let i = 0; i < 6; i++ ) {
        List.push( ( <Item y={ i == 0 ? 0 : i * 191 } /> ) );
    }

    return (
        <svg width="750" height="1334" fill="#fafafa">
            { List }
        </svg>
    );
} )( );

const PageString = `
                    <svg width="750px" height="191px">
                        <circle cx="95" cy="102" r="63" fill="#edeff0" mask="url(#shining)" />
                        <rect width="160" height="35" x="190" y="45" fill="#edeff0" mask="url(#shining)" />
                        <rect width="400" height="35" x="190" y="90" fill="#edeff0" mask="url(#shining)" />
                        <line x1="0" y1="190" x2="750" y2="190" stroke="#edeff0" />
                    </svg>
                `;

// render( diff( Page, require('./img/list.png') ),  document.body );
render( PageString, document.body );
