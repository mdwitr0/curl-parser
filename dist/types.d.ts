type HeaderTitle = 'User-Agent' | 'Accept' | 'Accept-Encoding' | 'Accept-Language' | 'Cache-Control' | 'Connection' | 'Content-Length' | 'Content-Type' | 'Cookie' | 'Host' | 'Origin' | 'Referer' | 'Upgrade-Insecure-Requests' | 'X-Requested-With';
type Method = 'get' | 'GET' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH' | 'purge' | 'PURGE' | 'link' | 'LINK' | 'unlink' | 'UNLINK';
type Headers = Record<HeaderTitle | string, string>;
interface ICredentials {
    username: string;
    password: string;
}
interface IProxy {
    host: string;
    port: number;
    auth?: {
        username: string;
        password: string;
    };
    protocol?: string;
}
interface IOutput<D = any> {
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
