var numeraX;
(function (numeraX) {
    var compiler;
    (function (compiler) {
        function generate(node) {
            switch (node.type) {
                case 'Literal':
                    return compiler.generators.compileLiteralNode(node);
                case 'Identifier':
                    return compiler.generators.compileIdentifierNode(node);
                case 'BinaryExpression':
                    return compiler.generators.compileBinaryExpressionNode(node);
                case 'UnaryExpression':
                    return compiler.generators.compileUnaryExpressionNode(node);
            }
        }
        compiler.generate = generate;
    })(compiler = numeraX.compiler || (numeraX.compiler = {}));
})(numeraX || (numeraX = {}));
var numeraX;
(function (numeraX) {
    var compiler;
    (function (compiler) {
        var generators;
        (function (generators) {
            function compileBinaryExpressionNode(node) {
                var left = compiler.generate(node.left);
                var right = compiler.generate(node.right);
                switch (node.operator) {
                    case '/':
                        return "\\frac{ " + left + " }{ " + right + " }";
                    case '*':
                        return left + " \\times " + right;
                    case '^':
                        return "{ " + left + " }^{ " + right + " }";
                    case '==':
                        return "{ " + left + " } = { " + right + " }";
                    default:
                        return left + " " + node.operator + " " + right;
                }
            }
            generators.compileBinaryExpressionNode = compileBinaryExpressionNode;
        })(generators = compiler.generators || (compiler.generators = {}));
    })(compiler = numeraX.compiler || (numeraX.compiler = {}));
})(numeraX || (numeraX = {}));
var numeraX;
(function (numeraX) {
    var compiler;
    (function (compiler) {
        var generators;
        (function (generators) {
            function compileIdentifierNode(node) {
                if (symbols[node.name] === undefined)
                    return "\\text{" + node.name + "}";
                else
                    return symbols[node.name];
            }
            generators.compileIdentifierNode = compileIdentifierNode;
            var symbols = {
                pi: '\\pi',
                Pi: '\\Pi',
                alpha: '\\alpha',
                beta: '\\beta',
            };
        })(generators = compiler.generators || (compiler.generators = {}));
    })(compiler = numeraX.compiler || (numeraX.compiler = {}));
})(numeraX || (numeraX = {}));
var numeraX;
(function (numeraX) {
    var compiler;
    (function (compiler) {
        var generators;
        (function (generators) {
            function compileLiteralNode(node) {
                if (/^\d+(?:\.\d+)?$/.test(node.raw))
                    return node.value;
                else
                    return "\\text{" + node.value + "}";
            }
            generators.compileLiteralNode = compileLiteralNode;
        })(generators = compiler.generators || (compiler.generators = {}));
    })(compiler = numeraX.compiler || (numeraX.compiler = {}));
})(numeraX || (numeraX = {}));
var numeraX;
(function (numeraX) {
    var compiler;
    (function (compiler) {
        var generators;
        (function (generators) {
            function compileUnaryExpressionNode(node) {
                if (node.prefix)
                    return node.operator + "{" + compiler.generate(node.argument) + "}";
            }
            generators.compileUnaryExpressionNode = compileUnaryExpressionNode;
        })(generators = compiler.generators || (compiler.generators = {}));
    })(compiler = numeraX.compiler || (numeraX.compiler = {}));
})(numeraX || (numeraX = {}));
var numeraX;
(function (numeraX) {
    var parser;
    (function (parser) {
        function setupJSEP() {
            jsep.addBinaryOp("^", 10);
        }
        parser.setupJSEP = setupJSEP;
    })(parser = numeraX.parser || (numeraX.parser = {}));
})(numeraX || (numeraX = {}));
var numeraX;
(function (numeraX) {
    function compile(code) {
        numeraX.parser.setupJSEP();
        try {
            var ast = jsep(code.replace(/=(?!=)/g, '=='));
            return numeraX.compiler.generate(ast);
        }
        catch (error) {
            return "";
        }
    }
    numeraX.compile = compile;
})(numeraX || (numeraX = {}));
