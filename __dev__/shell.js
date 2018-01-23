'use strict';

const path = require('path');

module.exports = ( param ) => {
    const { del, folder, gulp, messager, node_exec_file } = param;

    const root = path.resolve( folder, '../' );
    const src = path.resolve( folder, '../src' );
    const source = path.resolve( folder, './src/js/svg-skeleton' );

    del( [ `${ src }/**/*` ], { force: true }, ( ) => {
        gulp.src( `${ source }/**/*` )
            .pipe( gulp.dest( src ) )
            .on( 'end', ( ) => {
                node_exec_file( `${ root }/build/index.js`, ( code ) => {
                    code == 0 ? messager.success( ) : messager.error( 'build error' );
                } )
            } )
    } );
}
