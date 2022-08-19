import {URL} from 'url'
import {UrlObject} from "./interface";
import {ARGS_PATTERN, QUOTES_PATTERN, URL_PATTERN} from "./regexp-patterns"

const split = (str: string): string[] => {
    if (!str) return [];

    const args = str.match(ARGS_PATTERN);
    return args?.map((i) => i.trim().replace(QUOTES_PATTERN, "")) || [];
};

const getUrl = <D>(args: string[]): UrlObject | null => {
    const foundUrl = args.find((a) => URL_PATTERN.test(a));

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
