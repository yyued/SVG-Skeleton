'use strict';

export function diff ( node, image ) {
    if ( !node || !image ) {
        return void 0;
    }

    const newNode = node.cloneNode( true );

    const imageNode = document.createElementNS( 'http://www.w3.org/2000/svg', 'image' );

    imageNode.x = 0;
    imageNode.y = 0;
    imageNode.opacity = .2;

    imageNode.setAttributeNS( 'http://www.w3.org/1999/xlink', 'xlink:href', image );

    newNode.childNodes.forEach( ( cNode ) => {
        cNode.setAttribute( 'opacity', .9 );
    } );

    newNode.insertBefore( imageNode, newNode.childNodes[ 0 ] );

    return newNode;
}
