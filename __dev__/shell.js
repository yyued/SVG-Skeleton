'use strict';

const path = require('path');

module.exports = ( param ) => {
    const { fs, del, folder, messager, args, gulp, shell } = param;

    const root = path.resolve( folder, '../' );
    const src = path.resolve( folder, '../src' );
    const source = path.resolve( folder, './src/js/svg-skeleton' );

    const nodePath = '/Users/lijialiang/.nvm/versions/node/v8.6.0/bin/node';

    shell.config.execPath = nodePath;

    del( [ `${ src }/**/*` ], { force: true }, ( ) => {
        gulp.src( `${ source }/**/*` )
            .pipe( gulp.dest( src ) )
            .on( 'end', ( ) => {
                shell.cd( root );

                if ( shell.exec( `${ nodePath } ${ root }/build/index.js` ).code == 0 ) {
                    messager.success();
                }
            } )
    } );
}
