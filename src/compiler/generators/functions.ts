

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
                    return safeGen( 3, node, stdlib.sum )

                case 'sqrt':
                    return safeGen( 1, node, stdlib.sqrt )

                case 'limit':
                case 'lim':
                    return safeGen( 2, node, stdlib.limit )

                case 'integral':
                case 'int':
                    return safeGen( 3, node, stdlib.integral )

                default:
                    return generateUnknownFunction( node )
            }
        }

    //
    // ─── UNKNOWN FUNCTION ───────────────────────────────────────────────────────────
    //

        function generateUnknownFunction ( node: jsep.interfaces.callExpressionNode ) {
            return `{${ node.callee.name }}(${
                node.arguments.map(
                    n => compiler.generate( n )
                ).join(', ') }
            )`
        }

    //
    // ─── GENERATOR WITH ARG NUMBERS ─────────────────────────────────────────────────
    //

        function safeGen ( argc: number, 
                           node: jsep.interfaces.callExpressionNode,
                           func: ( args: jsep.interfaces.baseNode[ ] ) => string ) {
            if ( node.arguments.length === argc )
                return func( node.arguments )
            else
                return generateUnknownFunction( node )
        }

    //
    // ─── TREE PART FUNCTIONS ────────────────────────────────────────────────────────
    //

        function generate3PartFunctions ( name: string,
                                          args: jsep.interfaces.baseNode[ ] ) {
            return `\\${ name }_{${ compiler.generate( args[ 0 ] ) }}^{${ compiler.generate( args[ 1 ]) }}{${ compiler.generate( args[ 2 ] ) }}`
        }

    //
    // ─── STANDARD LIBRARY ───────────────────────────────────────────────────────────
    //

        namespace stdlib {

            //
            // ─── SUM ─────────────────────────────────────────────────────────
            //

                export function sum ( args: jsep.interfaces.baseNode[ ] ) {
                    return generate3PartFunctions( 'sum', args )
                }

            //
            // ─── INTEGRAL ────────────────────────────────────────────────────
            //

                export function integral ( args: jsep.interfaces.baseNode[ ] ) {
                    return generate3PartFunctions( 'int', args )
                }

            //
            // ─── SQRT ────────────────────────────────────────────────────────
            //

                export function sqrt ( args: jsep.interfaces.baseNode[ ] ) {
                    return `\\sqrt{${ compiler.generate( args[ 0 ] ) }}`
                }

            //
            // ─── LIMIT ───────────────────────────────────────────────────────
            //

                export function limit ( args: jsep.interfaces.baseNode[ ] ) {
                    return `\\lim_{${ compiler.generate( args[ 0 ] ) }}{${ compiler.generate( args[ 1 ] ) }}`
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}