import {URL} from 'url'
import {Output, RequestObject, UrlObject} from "./interface";
import {ARGS_PATTERN, QUOTES_PATTERN, URL_PATTERN} from "./regexp-patterns"
import {FLAG_IN_KEY, FLAG_VARIANTS, FLAGS} from "./flags";

const split = (str: string): string[] => {
    if (!str) return [];

    const args = str.match(ARGS_PATTERN);
    return args?.map((i) => i.trim().replace(QUOTES_PATTERN, "")) || [];
};

const getUrl = (args: string[]): UrlObject | null => {
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

const getFlagValues = <D>(flag: FLAGS, args: string[]): Partial<RequestObject<D>> => {
    const result = {}
    args.forEach((arg, index) => {
        if (FLAG_VARIANTS[flag].includes(arg)) {
            const value = args[index + 1]
            const key = FLAG_IN_KEY?.[flag]?.[0]
            if (key) {
                if (!result[key]) result[key] = {}
                switch (flag) {
                    case FLAGS.HEADER:
                        const values = value.split(": ")
                        result[key][values[0]] = values[1]
                        break;
                    case FLAGS.DATA:
                        result[key] = JSON.parse(value)
                        break;
                    default:
                        result[key] = value
                        break;
                }
            }
        }
    })
    return result
}

const getRequestObject = <D>(args: string[]): RequestObject<D> => {
    let requestObj: RequestObject<D> = {}
    for (const flag in FLAGS) {
        requestObj = {...requestObj, ...getFlagValues<D>(FLAGS[flag], args)}
    }
    return requestObj
}

export const curlToObject = <D>(curlStr: string): Output<D> => {
    const args = split(curlStr);
    const urlObj = getUrl(args);
    const requestObj = getRequestObject<D>(args)

    return {...urlObj, method: "GET", ...requestObj};
};
