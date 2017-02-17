import * as ts from 'typescript';

export function isAsExpression(node: ts.Node): node is ts.AsExpression {
    return node.kind === ts.SyntaxKind.AsExpression;
}

export function isAccessorDeclaration(node: ts.Node): node is ts.AccessorDeclaration {
    return node.kind === ts.SyntaxKind.GetAccessor ||
        node.kind === ts.SyntaxKind.SetAccessor;
}

export function isArrayBindingPattern(node: ts.Node): node is ts.ArrayBindingPattern {
    return node.kind === ts.SyntaxKind.ArrayBindingPattern;
}

export function isArrayLiteralExpression(node: ts.Node): node is ts.ArrayLiteralExpression {
    return node.kind === ts.SyntaxKind.ArrayLiteralExpression;
}

export function isArrayTypeNode(node: ts.Node): node is ts.ArrayTypeNode {
    return node.kind === ts.SyntaxKind.ArrayType;
}

export function isArrowFunction(node: ts.Node): node is ts.ArrowFunction {
    return node.kind === ts.SyntaxKind.ArrowFunction;
}

export function isAwaitExpression(node: ts.Node): node is ts.AwaitExpression {
    return node.kind === ts.SyntaxKind.AwaitExpression;
}

export function isBinaryExpression(node: ts.Node): node is ts.BinaryExpression {
    return node.kind === ts.SyntaxKind.BinaryExpression;
}

export function isBindingElement(node: ts.Node): node is ts.BindingElement {
    return node.kind === ts.SyntaxKind.BindingElement;
}

export function isBindingPattern(node: ts.Node): node is ts.BindingPattern {
    return node.kind === ts.SyntaxKind.ArrayBindingPattern ||
        node.kind === ts.SyntaxKind.ObjectBindingPattern;
}

export function isBlock(node: ts.Node): node is ts.Block {
    return node.kind === ts.SyntaxKind.Block;
}

export function isBlockLike(node: ts.Node): node is ts.BlockLike {
    return (<any>node).statements !== undefined;
}

export function isBreakOrContinueStatement(node: ts.Node): node is ts.BreakOrContinueStatement {
    return node.kind === ts.SyntaxKind.BreakStatement ||
        node.kind === ts.SyntaxKind.ContinueStatement;
}

export function isBreakStatement(node: ts.Node): node is ts.BreakStatement {
    return node.kind === ts.SyntaxKind.BreakStatement;
}

export function isCallExpression(node: ts.Node): node is ts.CallExpression {
    return node.kind === ts.SyntaxKind.CallExpression;
}

export function isCallSignatureDeclaration(node: ts.Node): node is ts.CallSignatureDeclaration {
    return node.kind === ts.SyntaxKind.CallSignature;
}

export function isCaseBlock(node: ts.Node): node is ts.CaseBlock {
    return node.kind === ts.SyntaxKind.CaseBlock;
}

export function isCaseClause(node: ts.Node): node is ts.CaseClause {
    return node.kind === ts.SyntaxKind.CaseClause;
}

export function isCaseOrDefaultClause(node: ts.Node): node is ts.CaseOrDefaultClause {
    return node.kind === ts.SyntaxKind.CaseClause ||
        node.kind === ts.SyntaxKind.DefaultClause;
}

export function isCatchClause(node: ts.Node): node is ts.CatchClause {
    return node.kind === ts.SyntaxKind.CatchClause;
}

export function isClassDeclaration(node: ts.Node): node is ts.ClassDeclaration {
    return node.kind === ts.SyntaxKind.ClassDeclaration;
}

export function isClassExpression(node: ts.Node): node is ts.ClassExpression {
    return node.kind === ts.SyntaxKind.ClassExpression;
}

export function isClassLikeDeclaration(node: ts.Node): node is ts.ClassLikeDeclaration {
    return node.kind === ts.SyntaxKind.ClassDeclaration ||
        node.kind === ts.SyntaxKind.ClassExpression;
}

export function isConditionalExpression(node: ts.Node): node is ts.ConditionalExpression {
    return node.kind === ts.SyntaxKind.ConditionalExpression;
}

export function isConstructorDeclaration(node: ts.Node): node is ts.ConstructorDeclaration {
    return node.kind === ts.SyntaxKind.Constructor;
}

export function isConstructorTypeNode(node: ts.Node): node is ts.ConstructorTypeNode {
    return node.kind === ts.SyntaxKind.ConstructorType;
}

export function isConstructSignatureDeclaration(node: ts.Node): node is ts.ConstructSignatureDeclaration {
    return node.kind === ts.SyntaxKind.ConstructSignature;
}

export function isContinueStatement(node: ts.Node): node is ts.ContinueStatement {
    return node.kind === ts.SyntaxKind.ContinueStatement;
}

export function isComputedPropertyName(node: ts.Node): node is ts.ComputedPropertyName {
    return node.kind === ts.SyntaxKind.ComputedPropertyName;
}

export function isDebuggerStatement(node: ts.Node): node is ts.DebuggerStatement {
    return node.kind === ts.SyntaxKind.DebuggerStatement;
}

export function isDefaultClause(node: ts.Node): node is ts.DefaultClause {
    return node.kind === ts.SyntaxKind.DefaultClause;
}

export function isDoStatement(node: ts.Node): node is ts.DoStatement {
    return node.kind === ts.SyntaxKind.DoStatement;
}

export function isElementAccessExpression(node: ts.Node): node is ts.ElementAccessExpression {
    return node.kind === ts.SyntaxKind.ElementAccessExpression;
}

export function isEntityNameExpression(node: ts.Node): node is ts.EntityNameExpression {
    return node.kind === ts.SyntaxKind.Identifier ||
        isPropertyAccessExpression(node) && isEntityNameExpression(node.expression);
}

export function isEnumDeclaration(node: ts.Node): node is ts.EnumDeclaration {
    return node.kind === ts.SyntaxKind.EnumDeclaration;
}

export function isExportAssignment(node: ts.Node): node is ts.ExportAssignment {
    return node.kind === ts.SyntaxKind.ExportAssignment;
}

export function isExportDeclaration(node: ts.Node): node is ts.ExportDeclaration {
    return node.kind === ts.SyntaxKind.ExportDeclaration;
}

export function isExportSpecifier(node: ts.Node): node is ts.ExportSpecifier {
    return node.kind === ts.SyntaxKind.ExportSpecifier;
}

export function isExpressionStatement(node: ts.Node): node is ts.ExpressionStatement {
    return node.kind === ts.SyntaxKind.ExpressionStatement;
}

export function isExternalModuleReference(node: ts.Node): node is ts.ExternalModuleReference {
    return node.kind === ts.SyntaxKind.ExternalModuleReference;
}

export function isForInStatement(node: ts.Node): node is ts.ForInStatement {
    return node.kind === ts.SyntaxKind.ForInStatement;
}

export function isForOfStatement(node: ts.Node): node is ts.ForOfStatement {
    return node.kind === ts.SyntaxKind.ForOfStatement;
}

export function isForStatement(node: ts.Node): node is ts.ForStatement {
    return node.kind === ts.SyntaxKind.ForStatement;
}

export function isFunctionDeclaration(node: ts.Node): node is ts.FunctionDeclaration {
    return node.kind === ts.SyntaxKind.FunctionDeclaration;
}

export function isFunctionExpression(node: ts.Node): node is ts.FunctionExpression {
    return node.kind === ts.SyntaxKind.FunctionExpression;
}

export function isFunctionTypeNode(node: ts.Node): node is ts.FunctionTypeNode {
    return node.kind === ts.SyntaxKind.FunctionType;
}

export function isGetAccessorDeclaration(node: ts.Node): node is ts.GetAccessorDeclaration {
    return node.kind === ts.SyntaxKind.GetAccessor;
}

export function isIdentifier(node: ts.Node): node is ts.Identifier {
    return node.kind === ts.SyntaxKind.Identifier;
}

export function isIfStatement(node: ts.Node): node is ts.IfStatement {
    return node.kind === ts.SyntaxKind.IfStatement;
}

export function isImportClause(node: ts.Node): node is ts.ImportClause {
    return node.kind === ts.SyntaxKind.ImportClause;
}

export function isImportDeclaration(node: ts.Node): node is ts.ImportDeclaration {
    return node.kind === ts.SyntaxKind.ImportDeclaration;
}

export function isImportEqualsDeclaration(node: ts.Node): node is ts.ImportEqualsDeclaration {
    return node.kind === ts.SyntaxKind.ImportEqualsDeclaration;
}

export function isIndexSignatureDeclaration(node: ts.Node): node is ts.IndexSignatureDeclaration {
    return node.kind === ts.SyntaxKind.IndexSignature;
}

export function isInterfaceDeclaration(node: ts.Node): node is ts.InterfaceDeclaration {
    return node.kind === ts.SyntaxKind.InterfaceDeclaration;
}

export function isIterationStatement(node: ts.Node): node is ts.IterationStatement {
    switch (node.kind) {
        case ts.SyntaxKind.ForStatement:
        case ts.SyntaxKind.ForOfStatement:
        case ts.SyntaxKind.ForInStatement:
        case ts.SyntaxKind.WhileStatement:
        case ts.SyntaxKind.DoStatement:
            return true;
        default:
            return false;
    }
}

export function isJsxAttribute(node: ts.Node): node is ts.JsxAttribute {
    return node.kind === ts.SyntaxKind.JsxAttribute;
}

export function isJsxClosingElement(node: ts.Node): node is ts.JsxClosingElement {
    return node.kind === ts.SyntaxKind.JsxClosingElement;
}

export function isJsxElement(node: ts.Node): node is ts.JsxElement {
    return node.kind === ts.SyntaxKind.JsxElement;
}

export function isJsxExpression(node: ts.Node): node is ts.JsxExpression {
    return node.kind === ts.SyntaxKind.JsxExpression;
}

export function isJsxOpeningElement(node: ts.Node): node is ts.JsxOpeningElement {
    return node.kind === ts.SyntaxKind.JsxOpeningElement;
}

export function isJsxSelfClosingElement(node: ts.Node): node is ts.JsxSelfClosingElement {
    return node.kind === ts.SyntaxKind.JsxSelfClosingElement;
}

export function isJsxSpreadAttribute(node: ts.Node): node is ts.JsxSpreadAttribute {
    return node.kind === ts.SyntaxKind.JsxSpreadAttribute;
}

export function isJsxText(node: ts.Node): node is ts.JsxText {
    return node.kind === ts.SyntaxKind.JsxText;
}

export function isLabeledStatement(node: ts.Node): node is ts.LabeledStatement {
    return node.kind === ts.SyntaxKind.LabeledStatement;
}

export function isLiteralExpression(node: ts.Node): node is ts.LiteralExpression {
    return node.kind >= ts.SyntaxKind.FirstLiteralToken &&
           node.kind <= ts.SyntaxKind.LastLiteralToken;
}

export function isMethodDeclaration(node: ts.Node): node is ts.MethodDeclaration {
    return node.kind === ts.SyntaxKind.MethodDeclaration;
}

export function isMethodSignature(node: ts.Node): node is ts.MethodSignature {
    return node.kind === ts.SyntaxKind.MethodSignature;
}

export function isModuleBlock(node: ts.Node): node is ts.ModuleBlock {
    return node.kind === ts.SyntaxKind.ModuleBlock;
}

export function isModuleDeclaration(node: ts.Node): node is ts.ModuleDeclaration {
    return node.kind === ts.SyntaxKind.ModuleDeclaration;
}

export function isNamedExports(node: ts.Node): node is ts.NamedExports {
    return node.kind === ts.SyntaxKind.NamedExports;
}

export function isNamedImports(node: ts.Node): node is ts.NamedImports {
    return node.kind === ts.SyntaxKind.NamedImports;
}

export function isNamespaceDeclaration(node: ts.Node): node is ts.NamespaceDeclaration {
    return isModuleDeclaration(node) &&
        node.name.kind === ts.SyntaxKind.Identifier &&
        node.body !== undefined &&
        (node.body.kind === ts.SyntaxKind.ModuleBlock ||
         isNamespaceDeclaration(node.body));
}

export function isNamespaceImport(node: ts.Node): node is ts.NamespaceImport {
    return node.kind === ts.SyntaxKind.NamespaceImport;
}

export function isNamespaceExportDeclaration(node: ts.Node): node is ts.NamespaceExportDeclaration {
    return node.kind === ts.SyntaxKind.NamespaceExportDeclaration;
}

export function isNewExpression(node: ts.Node): node is ts.NewExpression {
    return node.kind === ts.SyntaxKind.NewExpression;
}

export function isNoSubstitutionTemplateLiteral(node: ts.Node): node is ts.NoSubstitutionTemplateLiteral {
    return node.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral;
}

export function isNumericliteral(node: ts.Node): node is ts.NumericLiteral {
    return node.kind === ts.SyntaxKind.NumericLiteral;
}

export function isObjectBindingPattern(node: ts.Node): node is ts.ObjectBindingPattern {
    return node.kind === ts.SyntaxKind.ObjectBindingPattern;
}

export function isObjectLiteralExpression(node: ts.Node): node is ts.ObjectLiteralExpression {
    return node.kind === ts.SyntaxKind.ObjectLiteralExpression;
}

export function isOmittedExpression(node: ts.Node): node is ts.OmittedExpression {
    return node.kind === ts.SyntaxKind.OmittedExpression;
}

export function isParameterDeclaration(node: ts.Node): node is ts.ParameterDeclaration {
    return node.kind === ts.SyntaxKind.Parameter;
}

export function isParenthesizedExpression(node: ts.Node): node is ts.ParenthesizedExpression {
    return node.kind === ts.SyntaxKind.ParenthesizedExpression;
}

export function isPostfixUnaryExpression(node: ts.Node): node is ts.PostfixUnaryExpression {
    return node.kind === ts.SyntaxKind.PostfixUnaryExpression;
}

export function isPrefixUnaryExpression(node: ts.Node): node is ts.PrefixUnaryExpression {
    return node.kind === ts.SyntaxKind.PrefixUnaryExpression;
}

export function isPropertyAccessExpression(node: ts.Node): node is ts.PropertyAccessExpression {
    return node.kind === ts.SyntaxKind.PropertyAccessExpression;
}

export function isPropertyAssignment(node: ts.Node): node is ts.PropertyAssignment {
    return node.kind === ts.SyntaxKind.PropertyAssignment;
}

export function isPropertyDeclaration(node: ts.Node): node is ts.PropertyDeclaration {
    return node.kind === ts.SyntaxKind.PropertyDeclaration;
}

export function isPropertySignature(node: ts.Node): node is ts.PropertySignature {
    return node.kind === ts.SyntaxKind.PropertySignature;
}

export function isQualifiedName(node: ts.Node): node is ts.QualifiedName {
    return node.kind === ts.SyntaxKind.QualifiedName;
}

export function isRegularExpressionLiteral(node: ts.Node): node is ts.RegularExpressionLiteral {
    return node.kind === ts.SyntaxKind.RegularExpressionLiteral;
}

export function isReturnStatement(node: ts.Node): node is ts.ReturnStatement {
    return node.kind === ts.SyntaxKind.ReturnStatement;
}

export function isSetAccessorDeclaration(node: ts.Node): node is ts.SetAccessorDeclaration {
    return node.kind === ts.SyntaxKind.SetAccessor;
}

export function isShorthandPropertyAssignment(node: ts.Node): node is ts.ShorthandPropertyAssignment {
    return node.kind === ts.SyntaxKind.ShorthandPropertyAssignment;
}

export function isSignatureDeclaration(node: ts.Node): node is ts.SignatureDeclaration {
    return (<any>node).parameters !== undefined;
}

export function isSourceFile(node: ts.Node): node is ts.SourceFile {
    return node.kind === ts.SyntaxKind.SourceFile;
}

export function isSpreadAssignment(node: ts.Node): node is ts.SpreadAssignment {
    return node.kind === ts.SyntaxKind.SpreadAssignment;
}

export function isSpreadElement(node: ts.Node): node is ts.SpreadElement {
    return node.kind === ts.SyntaxKind.SpreadElement;
}

export function isStringLiteral(node: ts.Node): node is ts.StringLiteral {
    return node.kind === ts.SyntaxKind.StringLiteral;
}

export function isSwitchStatement(node: ts.Node): node is ts.SwitchStatement {
    return node.kind === ts.SyntaxKind.SwitchStatement;
}

export function isTaggedTemplateExpression(node: ts.Node): node is ts.TaggedTemplateExpression {
    return node.kind === ts.SyntaxKind.TaggedTemplateExpression;
}

export function isTemplateExpression(node: ts.Node): node is ts.TemplateExpression {
    return node.kind === ts.SyntaxKind.TemplateExpression;
}

export function isTemplateLiteral(node: ts.Node): node is ts.TemplateLiteral {
    return node.kind === ts.SyntaxKind.TemplateExpression ||
        node.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral;
}

export function isTextualLiteral(node: ts.Node): node is ts.LiteralExpression {
    return node.kind === ts.SyntaxKind.StringLiteral ||
        node.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral;
}

export function isThrowStatement(node: ts.Node): node is ts.ThrowStatement {
    return node.kind === ts.SyntaxKind.ThrowStatement;
}

export function isTryStatement(node: ts.Node): node is ts.TryStatement {
    return node.kind === ts.SyntaxKind.TryStatement;
}

export function isTupleTypeNode(node: ts.Node): node is ts.TupleTypeNode {
    return node.kind === ts.SyntaxKind.TupleType;
}

export function isTypeAliasDeclaration(node: ts.Node): node is ts.TypeAliasDeclaration {
    return node.kind === ts.SyntaxKind.TypeAliasDeclaration;
}

export function isTypeAssertion(node: ts.Node): node is ts.TypeAssertion {
    return node.kind === ts.SyntaxKind.TypeAssertionExpression;
}

export function isTypeLiteralNode(node: ts.Node): node is ts.TypeLiteralNode {
    return node.kind === ts.SyntaxKind.TypeLiteral;
}

export function isTypeOfExpression(node: ts.Node): node is ts.TypeOfExpression {
    return node.kind === ts.SyntaxKind.TypeOfExpression;
}

export function isTypeReferenceNode(node: ts.Node): node is ts.TypeReferenceNode {
    return node.kind === ts.SyntaxKind.TypeReference;
}

export function isVariableDeclaration(node: ts.Node): node is ts.VariableDeclaration {
    return node.kind === ts.SyntaxKind.VariableDeclaration;
}

export function isVariableStatement(node: ts.Node): node is ts.VariableStatement {
    return node.kind === ts.SyntaxKind.VariableStatement;
}

export function isVariableDeclarationList(node: ts.Node): node is ts.VariableDeclarationList {
    return node.kind === ts.SyntaxKind.VariableDeclarationList;
}

export function isVoidExpression(node: ts.Node): node is ts.VoidExpression {
    return node.kind === ts.SyntaxKind.VoidExpression;
}

export function isWhileStatement(node: ts.Node): node is ts.WhileStatement {
    return node.kind === ts.SyntaxKind.WhileStatement;
}

export function isWithStatement(node: ts.Node): node is ts.WithStatement {
    return node.kind === ts.SyntaxKind.WithStatement;
}
