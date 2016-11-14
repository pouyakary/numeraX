

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

        export function compileBinaryExpressionNode ( node: jsep.interfaces.binaryExpressionNode ) {

            let left = compiler.generate( node.left )
            let right = compiler.generate( node.right )

            switch ( node.operator ) {
                case '/':
                    return `\\frac{ ${ left } }{ ${ right } }`

                case '*':
                    return `${ left } \\times ${ right }`

                case '^':
                    return `{ ${ left } }^{ ${ right } }`

                case '==':
                    return `{ ${ left } } = { ${ right } }`

                default:
                    return `${ left } ${ node.operator } ${ right }`
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}