import {URL} from 'url'
import {UrlObject} from "./interface";
import {PATTERNS} from "./regexp-patterns"

const split = (str: string): string[] => {
    if (!str) return [];

    const args = str.match(PATTERNS.ARGS);
    return args?.map((i) => i.trim().replace(PATTERNS.QUOTES, "")) || [];
};

const getUrl = <D>(args: string[]): UrlObject | null => {
    const foundUrl = args.find((a) => PATTERNS.URL.test(a));

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
