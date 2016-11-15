

//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

namespace numeraX.compiler.generators {

    //
    // ─── MAIN ───────────────────────────────────────────────────────────────────────
    //

        export function compileCallExpressionNode ( node: jsep.interfaces.callExpressionNode ) {
            switch ( node.callee.name ) {
                case 'sum':
                    return generateForSumFunction( node.arguments )
            }
        }

    //
    // ─── SUM FUNCTION GENERATOR ─────────────────────────────────────────────────────
    //

        function generateForSumFunction ( args: jsep.interfaces.baseNode[ ] ) {
            if ( args.length === 3 )
                return `\\sum_{${ compiler.generate( args[ 0 ] ) }}^{ ${ compiler.generate( args[ 1 ] ) } }{ ${ compiler.generate( args[ 2 ] ) } }`
            else
                return ''
        }

    // ────────────────────────────────────────────────────────────────────────────────

}