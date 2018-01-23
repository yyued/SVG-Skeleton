'use strict';

const createElement = ( tag ) => {
    return document.createElementNS( 'http://www.w3.org/2000/svg', tag );
}

const setAttribute = ( node, attributes ) => {
    for ( let key in attributes ) {
        const value = attributes[ key ];

        switch ( key ) {
            case 'xlink:href': {
                node[ 0 ].setAttributeNS( 'http://www.w3.org/1999/xlink', key, value );
                break;
            }
            default: {
                node.setAttribute( key, value );
            }
        }
    }
}


export function h ( nodeName, attributes, ...children ) {

    let node = void 0;

    if ( !node && typeof nodeName === 'object' ) {
        node = nodeName.cloneNode( true );

        attributes ? setAttribute( node, attributes ) : void 0;

        return node;
    }

    nodeName && typeof nodeName === 'string' ? node = createElement( nodeName ) : void 0;

    node && attributes ? setAttribute( node, attributes ) : void 0;

    if ( node && children.length > 0 ) {
        children.forEach( ( cNode ) => {
            if ( Array.isArray( cNode ) ) {
                cNode.forEach( ( _c ) => {
                    node.appendChild( _c );
                } )
            }
            else {
                node.appendChild( cNode );
            }
        } );
    }

    return node;
}
