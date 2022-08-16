import { curlToObject } from "../src";

describe("Transform curl get command to an object in standard syntax", () => {
  const curlStr = `curl 'https://api.kinopoisk.dev/review?token=VSD&search=462682&field=movieId&limt=10' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/211 Firefox/104.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3' -H 'Accept-Encoding: gzip, deflate, br' -H 'Origin: https://my-hit.online' -H 'Connection: keep-alive' -H 'Referer: https://my-hit.online/' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: cross-site' -H 'TE: trailers'`;
  const result = curlToObject(curlStr);

  it('baseUrl should be "https://api.kinopoisk.dev"', () => {
    expect(result.baseURL).toEqual("https://api.kinopoisk.dev");
  });

  it('method should be "GET"', () => {
    expect(result.method).toEqual("GET");
  });

  it('url should be "/review"', () => {
    expect(result.url).toEqual("/review");
  });

  it("params should be of the Object type", () => {
    expect(result.params).toBeInstanceOf(Object);
  });

  it("params object should contain a token", () => {
    expect(result.params.token).toEqual("VSD");
  });

  it("headers should be of the Object type", () => {
    expect(result.params).toBeInstanceOf(Object);
  });

  it("headers object should contain a User-Agent", () => {
    expect(result.params.token).toEqual(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/211 Firefox/104.0"
    );
  });
});
