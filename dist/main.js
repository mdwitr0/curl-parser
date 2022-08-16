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
const $05e2d272004f14ce$var$split = (str)=>{
    if (!str) return [];
    const argsRegexp = /\s*(?:([^\s\\\'\"]+)|'((?:[^\'\\]|\\.)*)'|"((?:[^\"\\]|\\.)*)"|(\\.?)|(\S))(\s|$)?/g;
    const args = str.match(argsRegexp);
    return args?.map((i)=>i.trim().replace(/'/g, "")) || [];
};
const $05e2d272004f14ce$export$a2fe3c907bb1ef90 = (curlStr)=>{
    return {};
};


var $f5802eb2c6a19da1$exports = {};


$parcel$exportWildcard(module.exports, $05e2d272004f14ce$exports);
$parcel$exportWildcard(module.exports, $f5802eb2c6a19da1$exports);


//# sourceMappingURL=main.js.map
