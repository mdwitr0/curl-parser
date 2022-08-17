import {URL as $hgUW1$URL} from "url";

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
const $787dfd7182da8517$var$getUrl = (args)=>{
    const regex = /^(ftp|http|https)?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/g;
    const foundUrl = args.find((a)=>regex.test(a));
    if (foundUrl) {
        const obj = new (0, $hgUW1$URL)(foundUrl);
        return {
            href: obj.href,
            url: obj.pathname,
            baseURL: obj.origin,
            params: Object.fromEntries(obj.searchParams)
        };
    }
    return null;
};
const $787dfd7182da8517$export$a2fe3c907bb1ef90 = (curlStr)=>{
    const args = $787dfd7182da8517$var$split(curlStr);
    const urlObj = $787dfd7182da8517$var$getUrl(args);
    return {
        ...urlObj,
        method: "GET"
    };
};


var $5876ab33e7eee8c7$exports = {};




export {$787dfd7182da8517$export$a2fe3c907bb1ef90 as curlToObject};
//# sourceMappingURL=module.js.map
