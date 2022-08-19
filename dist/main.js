var $8zHUo$url = require("url");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $05e2d272004f14ce$exports = {};

$parcel$export($05e2d272004f14ce$exports, "curlToObject", () => $05e2d272004f14ce$export$a2fe3c907bb1ef90);

const $d3d779e7010fd1ab$export$9a401b161026db9a = /\s*(?:([^\s\\\'\"]+)|'((?:[^\'\\]|\\.)*)'|"((?:[^\"\\]|\\.)*)"|(\\.?)|(\S))(\s|$)?/g;
const $d3d779e7010fd1ab$export$8a0fb7e99084a77a = /^(ftp|http|https)?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/g;
const $d3d779e7010fd1ab$export$62930438b441effe = /'/g;


let $bc3dd75ec79d1760$export$fe5ecf0dd837dea2;
(function(FLAGS) {
    FLAGS["UA"] = "UA";
    FLAGS["HEADER"] = "HEADER";
    FLAGS["HEAD"] = "HEAD";
    FLAGS["DATA"] = "DATA";
    FLAGS["USER"] = "USER";
    FLAGS["METHOD"] = "METHOD";
    FLAGS["COOKIE"] = "COOKIE";
    FLAGS["COMPRESSED"] = "COMPRESSED";
})($bc3dd75ec79d1760$export$fe5ecf0dd837dea2 || ($bc3dd75ec79d1760$export$fe5ecf0dd837dea2 = {}));
const $bc3dd75ec79d1760$export$c45bf7f3be8a7523 = {
    [$bc3dd75ec79d1760$export$fe5ecf0dd837dea2.UA]: [
        "-A",
        "--user-agent"
    ],
    [$bc3dd75ec79d1760$export$fe5ecf0dd837dea2.HEADER]: [
        "-H",
        "--header"
    ],
    [$bc3dd75ec79d1760$export$fe5ecf0dd837dea2.HEAD]: [
        "-I",
        "--head"
    ],
    [$bc3dd75ec79d1760$export$fe5ecf0dd837dea2.DATA]: [
        "-d",
        "--data",
        "--data-ascii",
        "--data-raw"
    ],
    [$bc3dd75ec79d1760$export$fe5ecf0dd837dea2.USER]: [
        "-u",
        "--user"
    ],
    [$bc3dd75ec79d1760$export$fe5ecf0dd837dea2.METHOD]: [
        "-X",
        "--request"
    ],
    [$bc3dd75ec79d1760$export$fe5ecf0dd837dea2.COOKIE]: [
        "-b",
        "--cookie"
    ],
    [$bc3dd75ec79d1760$export$fe5ecf0dd837dea2.COMPRESSED]: [
        "--compressed"
    ]
};
const $bc3dd75ec79d1760$export$4dab763001eff6b8 = {
    [$bc3dd75ec79d1760$export$fe5ecf0dd837dea2.UA]: [
        "headers",
        "User-Agent"
    ],
    [$bc3dd75ec79d1760$export$fe5ecf0dd837dea2.HEADER]: [
        "headers"
    ],
    [$bc3dd75ec79d1760$export$fe5ecf0dd837dea2.DATA]: [
        "data"
    ],
    [$bc3dd75ec79d1760$export$fe5ecf0dd837dea2.USER]: [
        "auth"
    ],
    [$bc3dd75ec79d1760$export$fe5ecf0dd837dea2.METHOD]: [
        "method"
    ],
    [$bc3dd75ec79d1760$export$fe5ecf0dd837dea2.COOKIE]: [
        "headers",
        "Cookie"
    ]
};


const $05e2d272004f14ce$var$split = (str)=>{
    if (!str) return [];
    const args = str.match((0, $d3d779e7010fd1ab$export$9a401b161026db9a));
    return args?.map((i)=>i.trim().replace((0, $d3d779e7010fd1ab$export$62930438b441effe), "")) || [];
};
const $05e2d272004f14ce$var$getUrl = (args)=>{
    const foundUrl = args.find((a)=>(0, $d3d779e7010fd1ab$export$8a0fb7e99084a77a).test(a));
    if (foundUrl) {
        const obj = new (0, $8zHUo$url.URL)(foundUrl);
        return {
            href: obj.href,
            url: obj.pathname,
            baseURL: obj.origin,
            params: Object.fromEntries(obj.searchParams)
        };
    }
    return null;
};
const $05e2d272004f14ce$var$getFlagValues = (flag, args)=>{
    const result = {};
    args.forEach((arg, index)=>{
        if ((0, $bc3dd75ec79d1760$export$c45bf7f3be8a7523)[flag].includes(arg)) {
            const value = args[index + 1];
            const key = (0, $bc3dd75ec79d1760$export$4dab763001eff6b8)?.[flag][0];
            if (!result[key]) result[key] = {};
            switch(flag){
                case (0, $bc3dd75ec79d1760$export$fe5ecf0dd837dea2).HEADER:
                    const values = value.split(": ");
                    result[key][values[0]] = values[1];
                    break;
                default:
                    result[key] = value;
                    break;
            }
        }
    });
    return result;
};
const $05e2d272004f14ce$var$getRequestObject = (args)=>{
    let requestObj = {};
    for(const flag in 0, $bc3dd75ec79d1760$export$fe5ecf0dd837dea2)requestObj = {
        ...requestObj,
        ...$05e2d272004f14ce$var$getFlagValues((0, $bc3dd75ec79d1760$export$fe5ecf0dd837dea2)[flag], args)
    };
    return requestObj;
};
const $05e2d272004f14ce$export$a2fe3c907bb1ef90 = (curlStr)=>{
    const args = $05e2d272004f14ce$var$split(curlStr);
    const urlObj = $05e2d272004f14ce$var$getUrl(args);
    const requestObj = $05e2d272004f14ce$var$getRequestObject(args);
    return {
        ...urlObj,
        method: "GET",
        ...requestObj
    };
};


var $f5802eb2c6a19da1$exports = {};


$parcel$exportWildcard(module.exports, $05e2d272004f14ce$exports);
$parcel$exportWildcard(module.exports, $f5802eb2c6a19da1$exports);


//# sourceMappingURL=main.js.map
