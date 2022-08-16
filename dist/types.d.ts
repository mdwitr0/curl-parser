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
export interface IOutput<D = any> {
    url?: string;
    method?: Method;
    baseURL?: string;
    headers?: Headers;
    params?: any;
    data?: D;
    timeout?: number;
    auth?: ICredentials;
    proxy?: IProxy | false;
}
export const curlToObject: <D = any>(curlStr: string) => IOutput<D>;

//# sourceMappingURL=types.d.ts.map
