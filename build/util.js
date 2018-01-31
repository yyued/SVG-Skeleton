'use strict';

Date.prototype.format = function ( fmt ) {
    let date = {
        'M+': this.getMonth() + 1,
        'D+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
    };

    if ( /(Y+)/.test( fmt ) ) {
        fmt = fmt.replace( RegExp.$1, ( this.getFullYear() + '' ).substr( 4 - RegExp.$1.length ) );
    }

    for ( let k in date ) {
        if ( new RegExp('(' + k + ')').test( fmt ) ) {
            fmt = fmt.replace( RegExp.$1, ( RegExp.$1.length == 1 ) ? ( date[ k ] ) : (( '00' + date[ k ] ).substr( ('' + date[ k ]).length) ) );
        }
    }

    return fmt;
}

module.exports = { };
