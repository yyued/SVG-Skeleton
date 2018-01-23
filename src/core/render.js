'use strict';

export function render ( node, parent ) {
    node && parent ? parent.appendChild( node ) : void 0;
}
