'use strict';

const Shining = require('./shining_mask');

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

    node.appendChild( Shining( ) );

    parent ? parent.appendChild( node ) : void 0;
}
