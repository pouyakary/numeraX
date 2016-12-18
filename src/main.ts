
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

namespace numeraX {

    //
    // ─── THE VERY MAIN ──────────────────────────────────────────────────────────────
    //

        // Compiles a simple math expression into TeX mathematical expression natation.
        export function compile ( code: string ): string {
            parser.setupJSEP( )

            try {
                let normalizedCode = code.replace( /=(?!=)|\n/g, match => {
                    if ( match === '=' )
                        return '=='
                    if ( match === '\n' )
                        return ' '
                    return ''
                })

                // the ------ grammar:
                normalizedCode = normalizedCode.replace( /--+/g, '/' );

                // getting the ast
                let ast = jsep( normalizedCode )

                // compiling the ast into TeX
                return compiler.generate( ast )

            } catch ( error ) {
                return ''
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}