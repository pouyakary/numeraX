
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
                    return generators.compileLiteralNode( <jsep.interfaces.literalNode> node )

                case 'Identifier':
                    return generators.compileIdentifierNode( <jsep.interfaces.identiferNode> node )

                case 'BinaryExpression':
                    return generators.compileBinaryExpressionNode( <jsep.interfaces.binaryExpressionNode> node )

                case 'UnaryExpression':
                    return generators.compileUnaryExpressionNode( <jsep.interfaces.unaryExpressionNode> node )

                case 'CallExpression':
                    return generators.compileCallExpressionNode( <jsep.interfaces.callExpressionNode> node )
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}