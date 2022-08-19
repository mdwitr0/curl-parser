export type HeaderTitle = "User-Agent" | "Accept" | "Accept-Encoding" | "Accept-Language" | "Cache-Control" | "Connection" | "Content-Length" | "Content-Type" | "Cookie" | "Host" | "Origin" | "Referer" | "Upgrade-Insecure-Requests" | "X-Requested-With";
export type Method = "GET" | "DELETE" | "HEAD" | "OPTIONS" | "POST" | "PUT" | "PATCH" | "PURGE" | "LINK" | "UNLINK";
export type Headers = Record<HeaderTitle | string, string>;
export interface ICredentials {
    username: string;
    password: string;
}
export interface IProxy {
    host: string;
    port: number;
    auth?: {
        username: string;
        password: string;
    };
    protocol?: string;
}
export type UrlObject = {
    href?: string;
    url?: string;
    baseURL?: string;
    params?: {
        [k: string]: any;
    };
};
export type RequestObject<D> = {
    method?: Method;
    headers?: Headers;
    data?: D;
    timeout?: number;
    auth?: ICredentials;
    proxy?: IProxy | false;
};
export type Output<D> = RequestObject<D> & UrlObject;
export const curlToObject: <D>(curlStr: string) => Output<D>;

//# sourceMappingURL=types.d.ts.map
