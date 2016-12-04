
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

namespace numeraX.compiler {

    //
    // ─── MAIN ───────────────────────────────────────────────────────────────────────
    //

        export function generate ( node: jsep.interfaces.baseNode ): string {
            switch ( node.type ) {
                case 'Literal':
                    return generators.compileLiteralNode( 
                        node as jsep.interfaces.literalNode )

                case 'Identifier':
                    return generators.compileIdentifierNode( 
                        node as jsep.interfaces.identiferNode )

                case 'BinaryExpression':
                    return generators.compileBinaryExpressionNode( 
                        node as jsep.interfaces.binaryExpressionNode )

                case 'UnaryExpression':
                    return generators.compileUnaryExpressionNode( 
                        node as jsep.interfaces.unaryExpressionNode )

                case 'CallExpression':
                    return generators.compileCallExpressionNode( 
                        node as jsep.interfaces.callExpressionNode )

                case 'ArrayExpression':
                    return generators.compileArrayExpressionNode( 
                        node as jsep.interfaces.arrayExpressionNode )
            }
            return ''
        }

    // ────────────────────────────────────────────────────────────────────────────────

}