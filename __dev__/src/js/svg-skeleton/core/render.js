'use strict';

const shining = require('./shining_mask');

const StringToDOMElement = function( string ) {
    const frame = document.createElement('iframe');

    frame.style.display = 'none';

    document.body.appendChild( frame );

    frame.contentDocument.open( );
    frame.contentDocument.write( string );
    frame.contentDocument.close( );

    const el = frame.contentDocument.body.firstChild;

    document.body.removeChild( frame );

    return el;
}

export function render ( node, parent ) {
    if ( !node || !parent ) {
        return void 0;
    }

    switch ( typeof parent ) {
        case 'object': {
            break;
        }
        case 'string': {
            parent = document.body.querySelector( parent );
            break;
        }
    }

    switch ( typeof node ) {
        case 'string': {
            node = StringToDOMElement( node );
            break;
        }
    }

    node.appendChild( shining( ) );

    parent ? parent.appendChild( node ) : void 0;
}
