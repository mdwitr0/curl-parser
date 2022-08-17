import {URL} from 'url'
import {UrlObject} from "./interface";

const split = (str: string): string[] => {
    if (!str) return [];
    const argsRegexp =
        /\s*(?:([^\s\\\'\"]+)|'((?:[^\'\\]|\\.)*)'|"((?:[^\"\\]|\\.)*)"|(\\.?)|(\S))(\s|$)?/g;

    const args = str.match(argsRegexp);
    return args?.map((i) => i.trim().replace(/'/g, "")) || [];
};

const getUrl = <D>(args: string[]): UrlObject | null => {
    const regex =
        /^(ftp|http|https)?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/g;
    const foundUrl = args.find((a) => regex.test(a));

    if (foundUrl) {
        const obj = new URL(foundUrl);

        return {
            href: obj.href,
            url: obj.pathname,
            baseURL: obj.origin,
            params: Object.fromEntries(obj.searchParams),
        };
    }

    return null;
};

export const curlToObject = <D>(curlStr: string): any => {
    const args = split(curlStr);
    const urlObj = getUrl(args);

    return {...urlObj, method: "GET"};
};
