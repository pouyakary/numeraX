
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

//
// ─── MAIN FUNCTIONS ─────────────────────────────────────────────────────────────
//

    declare function jsep ( code: string ): jsep.interfaces.baseNode

    declare module jsep {
        /**
         * Add a custom binary __operator__ with __precedence__
         */
        export function addBinaryOp ( operator: string, precedence: number ): void

        /**
         * Add a custom unary __operator__
         */
        export function addUnaryOp ( operator: string ): void

        /**
         * Remove binary __operator__
         */
        export function removeBinaryOp ( operator: string ): void

        /**
         * Remove a unary __operator__
         */
        export function removeUnaryOp ( operator: string ): void

        /**
         * Restores the previous value of _window.jsep_ and returns a function as a
         * substitution for __jsep( )__
         */
        export function noConflict ( ): ( code: string ) => jsep.interfaces.baseNode
    }

//
// ─── NODES ──────────────────────────────────────────────────────────────────────
//

    declare module jsep.interfaces {

        //
        // ─── BASE NODE ───────────────────────────────────────────────────
        //

            export interface baseNode {
                type: "Compound" | "Identifier" | "MemberExpression" | "Literal" | "ThisExpression" | "CallExpression" | "UnaryExpression" | "BinaryExpression" | "LogicalExpression" | "ConditionalExpression" | "ArrayExpression"
            }

        //
        // ─── LEFT RIGHT NODE ─────────────────────────────────────────────
        //

            interface leftRightNode extends baseNode {
                left: baseNode
                right: baseNode
            }

        //
        // ─── IDENTIFIER NODE ─────────────────────────────────────────────
        //

            export interface identiferNode extends baseNode {
                name: string
            }

        //
        // ─── LITERAL NODE ────────────────────────────────────────────────
        //

            export interface literalNode extends baseNode {
                value: string
                raw: string
            }

        //
        // ─── BINARY EXPRESSION ───────────────────────────────────────────
        //

            export interface binaryExpressionNode extends leftRightNode {
                operator: string
            }

        //
        // ─── UNARY EXPRESSION ────────────────────────────────────────────
        //

            export interface unaryExpressionNode extends baseNode {
                operator: string
                argument: baseNode
                prefix: boolean
            }

        //
        // ─── CALL EXPRESSION ─────────────────────────────────────────────
        //

            export interface callExpressionNode extends baseNode {
                callee: identiferNode
                arguments: baseNode[ ]
            }

        // ─────────────────────────────────────────────────────────────────

    }

// ────────────────────────────────────────────────────────────────────────────────
