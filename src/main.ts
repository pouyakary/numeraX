
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
            parser.setupJSEP( );

            try {
                // getting the ast
                let ast = jsep( code.replace( /=(?!=)/g, '==' ) );

                // compiling the ast into TeX
                return compiler.generate( ast );

            } catch ( error ) {
                return "";
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}