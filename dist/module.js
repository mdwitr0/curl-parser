import {URL as $hgUW1$URL} from "url";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $787dfd7182da8517$exports = {};

$parcel$export($787dfd7182da8517$exports, "curlToObject", () => $787dfd7182da8517$export$a2fe3c907bb1ef90);

const $5bb83e05956b5aee$export$9a401b161026db9a = /\s*(?:([^\s\\\'\"]+)|'((?:[^\'\\]|\\.)*)'|"((?:[^\"\\]|\\.)*)"|(\\.?)|(\S))(\s|$)?/g;
const $5bb83e05956b5aee$export$8a0fb7e99084a77a = /^(ftp|http|https)?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.|:)[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/g;
const $5bb83e05956b5aee$export$62930438b441effe = /'/g;


let $09c6b4a870d35320$export$fe5ecf0dd837dea2;
(function(FLAGS) {
    FLAGS["UA"] = "UA";
    FLAGS["HEADER"] = "HEADER";
    FLAGS["HEAD"] = "HEAD";
    FLAGS["DATA"] = "DATA";
    FLAGS["USER"] = "USER";
    FLAGS["METHOD"] = "METHOD";
    FLAGS["COOKIE"] = "COOKIE";
    FLAGS["COMPRESSED"] = "COMPRESSED";
})($09c6b4a870d35320$export$fe5ecf0dd837dea2 || ($09c6b4a870d35320$export$fe5ecf0dd837dea2 = {}));
const $09c6b4a870d35320$export$c45bf7f3be8a7523 = {
    [$09c6b4a870d35320$export$fe5ecf0dd837dea2.UA]: [
        "-A",
        "--user-agent"
    ],
    [$09c6b4a870d35320$export$fe5ecf0dd837dea2.HEADER]: [
        "-H",
        "--header"
    ],
    [$09c6b4a870d35320$export$fe5ecf0dd837dea2.HEAD]: [
        "-I",
        "--head"
    ],
    [$09c6b4a870d35320$export$fe5ecf0dd837dea2.DATA]: [
        "-d",
        "--data",
        "--data-ascii",
        "--data-raw"
    ],
    [$09c6b4a870d35320$export$fe5ecf0dd837dea2.USER]: [
        "-u",
        "--user"
    ],
    [$09c6b4a870d35320$export$fe5ecf0dd837dea2.METHOD]: [
        "-X",
        "--request"
    ],
    [$09c6b4a870d35320$export$fe5ecf0dd837dea2.COOKIE]: [
        "-b",
        "--cookie"
    ],
    [$09c6b4a870d35320$export$fe5ecf0dd837dea2.COMPRESSED]: [
        "--compressed"
    ]
};
const $09c6b4a870d35320$export$4dab763001eff6b8 = {
    [$09c6b4a870d35320$export$fe5ecf0dd837dea2.UA]: [
        "headers",
        "User-Agent"
    ],
    [$09c6b4a870d35320$export$fe5ecf0dd837dea2.HEADER]: [
        "headers"
    ],
    [$09c6b4a870d35320$export$fe5ecf0dd837dea2.DATA]: [
        "data"
    ],
    [$09c6b4a870d35320$export$fe5ecf0dd837dea2.USER]: [
        "auth"
    ],
    [$09c6b4a870d35320$export$fe5ecf0dd837dea2.METHOD]: [
        "method"
    ],
    [$09c6b4a870d35320$export$fe5ecf0dd837dea2.COOKIE]: [
        "headers",
        "Cookie"
    ]
};


const $787dfd7182da8517$var$split = (str)=>{
    if (!str) return [];
    const args = str.match((0, $5bb83e05956b5aee$export$9a401b161026db9a));
    return args?.map((i)=>i.trim().replace((0, $5bb83e05956b5aee$export$62930438b441effe), "")) || [];
};
const $787dfd7182da8517$var$getUrl = (args)=>{
    const foundUrl = args.find((a)=>(0, $5bb83e05956b5aee$export$8a0fb7e99084a77a).test(a));
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
const $787dfd7182da8517$var$getFlagValues = (flag, args)=>{
    const result = {};
    args.forEach((arg, index)=>{
        if ((0, $09c6b4a870d35320$export$c45bf7f3be8a7523)[flag].includes(arg)) {
            const value = args[index + 1];
            const key = (0, $09c6b4a870d35320$export$4dab763001eff6b8)?.[flag]?.[0];
            if (key) {
                if (!result[key]) result[key] = {};
                switch(flag){
                    case (0, $09c6b4a870d35320$export$fe5ecf0dd837dea2).HEADER:
                        const values = value.split(": ");
                        result[key][values[0]] = values[1];
                        break;
                    case (0, $09c6b4a870d35320$export$fe5ecf0dd837dea2).DATA:
                        result[key] = JSON.parse(value);
                        break;
                    default:
                        result[key] = value;
                        break;
                }
            }
        }
    });
    return result;
};
const $787dfd7182da8517$var$getRequestObject = (args)=>{
    let requestObj = {};
    for(const flag in 0, $09c6b4a870d35320$export$fe5ecf0dd837dea2)requestObj = {
        ...requestObj,
        ...$787dfd7182da8517$var$getFlagValues((0, $09c6b4a870d35320$export$fe5ecf0dd837dea2)[flag], args)
    };
    return requestObj;
};
const $787dfd7182da8517$export$a2fe3c907bb1ef90 = (curlStr)=>{
    const args = $787dfd7182da8517$var$split(curlStr);
    const urlObj = $787dfd7182da8517$var$getUrl(args);
    const requestObj = $787dfd7182da8517$var$getRequestObject(args);
    return {
        ...urlObj,
        method: "GET",
        ...requestObj
    };
};


var $5876ab33e7eee8c7$exports = {};




export {$787dfd7182da8517$export$a2fe3c907bb1ef90 as curlToObject};
//# sourceMappingURL=module.js.map
