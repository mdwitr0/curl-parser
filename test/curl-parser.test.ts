import {curlToObject} from "../src";

describe("Transform curl get command to an object in standard syntax", () => {
    const curlStr = `curl 'https://api.kinopoisk.dev/review?token=VSD&search=462682&field=movieId&limt=10' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/211 Firefox/104.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3' -H 'Accept-Encoding: gzip, deflate, br' -H 'Origin: https://my-hit.online' -H 'Connection: keep-alive' -H 'Referer: https://my-hit.online/' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: cross-site' -H 'TE: trailers' -H 'Cookie: i=Jy933XJn2gMH+btQB11HJzQP13QXMuo/1kIa3v/AQpvlEmn4yP3XsJRu14VfukAy7opLKJ/Gp8iCY=; _ym_uid=1645733492438362044; _ym_d=1660471910; yandex_login=mdwit0; yandexuid=45478115; mda2_beacon=166495; mda_exp_enabled=1; my_perpages=%7B%2218%22%3A200%7D; _yasc=VjEUTpwrJ0+AJEbK/uZr7LoI1G1bqFi3QV6gKX1TDy7vE4Q==; crookie=YrfNwLmlCQhgjYPFXeKGnNL3Rqmq1ivVLe2IHhazv5Yh99oXxahHbavrH+1RG04TkAQeNyzEh6YL6vSky4zf0ClUTHsY=; gdpr=0; yuidss=4551250771645113785; mustsee_sort_v5=01.10.200.21.3101.1111; stars_sort_v5=01.81; users_info[check_sh_bool]=none; ya_sess_id=3:16604713136409353:VCD1bQ:82.1.2:1|835257355.22101153|1613136635.2.2:2136635|30:102094151.295.JpQ9Wys1a2o6m7SjYu_EHn9aeUg; yp=16621785; ymex=16632317.oy16451137815; location=1; _csrf=pCh1Vr-8axJ9Mm; disable_server_sso_redirect=1; ys=udn.cDptZHdpdDA%3D#c_chck.950391174; sso_status=sso.passport.yandex.ru:synchronized; desktop_session_key=533bfbd66d89729854ed494502ca4780560ca8933f4f236a47d92eed1dfb411bf3e44c3db5d; desktop_session_key.sig=_LYlhsdfvpr8hc; _ym_isad=1; cmtchd=MTY2MDQ3MTMxOTI4MA==; PHPSESSID=a76sdfa57c3a423212345sfdg34b9897; user_country=ot; yandex_gid=10522; tc=1; uid=22500473; _ym_visorc=b; _csrf_csrf_token=VK5fghrGJAqc; mobile=no'`;
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

    it("params should be of the Object type", () => {
        expect(result.params).toBeInstanceOf(Object);
    });

    it("params object should contain a token", () => {
        expect(result.params.token).toEqual("VSD");
    });

    it('headers should be of the Object type', () => {
        expect(result.headers).toBeInstanceOf(Object)
    });

    it('headers object should contain a User-Agent', () => {
        expect(result.headers["User-Agent"]).toEqual('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/211 Firefox/104.0')
    })

    it('headers object should contain a Cookie', () => {
        expect(result.headers["Cookie"]).toContain('AQpvlEmn4yP3XsJRu14VfukAy7opLKJ/Gp8iCY')
        expect(result.headers["Cookie"]).toContain('_csrf_csrf_token=VK5fghrGJAqc;')
    })
});
