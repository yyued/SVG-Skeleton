import SVGSkeleton from './svg-skeleton';

const { h, render } = SVGSkeleton;

const Item = (
    <svg width="750" height="170">
        <rect width="750" height="170" x="0" y="0" fill="#fafafa" rx="0" ry="0"/>
        <circle cx="70" cy="86" r="35" fill="#edeff0" mask="url(#shining)" />
        <rect width="100" height="35" x="135" y="50" fill="#edeff0" rx="0" ry="0" mask="url(#shining)" />
        <rect width="550" height="35" x="135" y="90" fill="#edeff0" rx="0" ry="0" mask="url(#shining)" />
    </svg>
);

const Page = ( ( ) => {
    let List = [ ];

    for ( let i = 0; i < 10; i++ ) {
        List.push( ( <Item y={ i == 0 ? 0 : i * ( 170 + 20 ) } /> ) );
    }

    return (
        <svg width="750" height="1334" class="transform-light">
            { List }
        </svg>
    );
} )( );

render( Page,  document.body );
