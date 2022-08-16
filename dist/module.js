function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $787dfd7182da8517$exports = {};

$parcel$export($787dfd7182da8517$exports, "curlToObject", () => $787dfd7182da8517$export$a2fe3c907bb1ef90);
const $787dfd7182da8517$var$split = (str)=>{
    if (!str) return [];
    const argsRegexp = /\s*(?:([^\s\\\'\"]+)|'((?:[^\'\\]|\\.)*)'|"((?:[^\"\\]|\\.)*)"|(\\.?)|(\S))(\s|$)?/g;
    const args = str.match(argsRegexp);
    return args?.map((i)=>i.trim().replace(/'/g, "")) || [];
};
const $787dfd7182da8517$export$a2fe3c907bb1ef90 = (curlStr)=>{
    return {};
};


var $5876ab33e7eee8c7$exports = {};




export {$787dfd7182da8517$export$a2fe3c907bb1ef90 as curlToObject};
//# sourceMappingURL=module.js.map
