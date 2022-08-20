import {curlToObject} from "../src";

describe("Transform curl get command to an object in standard syntax", () => {
    const curlStr = `curl 'https://api.openmovieapi.dev/review?token=VSD&search=462682&field=movieId&limt=10' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/211 Firefox/104.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3' -H 'Accept-Encoding: gzip, deflate, br' -H 'Origin: https://my-hit.online' -H 'Connection: keep-alive' -H 'Referer: https://my-hit.online/' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: cross-site' -H 'TE: trailers' -H 'Cookie: i=Jy933XJn2gMH+btQB11HJzQP13QXMuo/1kIa3v/AQpvlEmn4yP3XsJRu14VfukAy7opLKJ/Gp8iCY=; _ym_uid=1645733492438362044; _ym_d=1660471910; yandex_login=mdwit0; yandexuid=45478115; mda2_beacon=166495; mda_exp_enabled=1; my_perpages=%7B%2218%22%3A200%7D; _yasc=VjEUTpwrJ0+AJEbK/uZr7LoI1G1bqFi3QV6gKX1TDy7vE4Q==; crookie=YrfNwLmlCQhgjYPFXeKGnNL3Rqmq1ivVLe2IHhazv5Yh99oXxahHbavrH+1RG04TkAQeNyzEh6YL6vSky4zf0ClUTHsY=; gdpr=0; yuidss=4551250771645113785; mustsee_sort_v5=01.10.200.21.3101.1111; stars_sort_v5=01.81; users_info[check_sh_bool]=none; ya_sess_id=3:16604713136409353:VCD1bQ:82.1.2:1|835257355.22101153|1613136635.2.2:2136635|30:102094151.295.JpQ9Wys1a2o6m7SjYu_EHn9aeUg; yp=16621785; ymex=16632317.oy16451137815; location=1; _csrf=pCh1Vr-8axJ9Mm; disable_server_sso_redirect=1; ys=udn.cDptZHdpdDA%3D#c_chck.950391174; sso_status=sso.passport.yandex.ru:synchronized; desktop_session_key=533bfbd66d89729854ed494502ca4780560ca8933f4f236a47d92eed1dfb411bf3e44c3db5d; desktop_session_key.sig=_LYlhsdfvpr8hc; _ym_isad=1; cmtchd=MTY2MDQ3MTMxOTI4MA==; PHPSESSID=a76sdfa57c3a423212345sfdg34b9897; user_country=ot; yandex_gid=10522; tc=1; uid=22500473; _ym_visorc=b; _csrf_csrf_token=VK5fghrGJAqc; mobile=no'`;
    const result = curlToObject(curlStr);

    it('baseUrl should be "https://api.openmovieapi.dev"', () => {
        expect(result.baseURL).toEqual("https://api.openmovieapi.dev");
    });

    it('method should be "GET"', () => {
        expect(result.method).toEqual("GET");
    });

    it('url should be "/review"', () => {
        expect(result.url).toEqual("/review");
    });

    it("params object should contain a token", () => {
        expect(result.params).toBeInstanceOf(Object);
        expect(result.params.token).toEqual("VSD");
    });

    it("params object should contain a token", () => {
        expect(result.params).toBeInstanceOf(Object);
        expect(result.params.token).toEqual("VSD");
    });

    it('headers object should contain a User-Agent', () => {
        expect(result.headers).toBeInstanceOf(Object)
        expect(result.headers["User-Agent"]).toEqual('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/211 Firefox/104.0')
    })

    it('headers object should contain a Cookie', () => {
        expect(result.headers["Cookie"]).toContain('AQpvlEmn4yP3XsJRu14VfukAy7opLKJ/Gp8iCY')
        expect(result.headers["Cookie"]).toContain('_csrf_csrf_token=VK5fghrGJAqc;')
    })
});

describe("Transform curl post command to an object in standard syntax", () => {
    const curlStr = `curl 'https://api.openmovieapi.dev/graphql/?operationName=FilmBaseInfo' -X POST -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/20100101 Firefox/104.0' -H 'Accept: */*' -H 'Accept-Language: ru,en;q=0.9' -H 'Accept-Encoding: gzip, deflate, br' -H 'Referer: https://kinopoisk.dev/' -H 'content-type: application/json' -H 'service-id: 25' -H 'x-request-id: 166031276411-679812349' -H 'uber-trace-id: 8e5132b:0:1' -H 'Origin: https://kinopoisk.dev' -H 'Connection: keep-alive' -H 'Cookie: i=Jy93245MHadsfadfgMuo/1kIcvbn84nHvv/AQpvlEmn73sdfhp8iCY=; _ym_uid=16457345044; _ym_d=1645209; yandex_login=mdwit0; yandexuid=4532455; mda2_beacon=16653095; mda_exp_enabled=1; my_perpages=%7Bghkj0%7D; _yasc=VjEU677LoI1G1bqFXTDy7vE4Q==; crookie=YrfNwLmlCQhgjYPFXeKGnNavrH+1RG04TkAQelUTHsY=; gdpr=0; yuidss=4555; mustsee_sort_v5=01.10.200.211.101.111; stars_sort_v5=01.170.10.70.181; users_info[check_sh_bool]=none; ya_sess_id=3:1660471313.3:VCD1bQ:82.1.2:1|3.2.2:210153|1613236635|30:1020941SjYu_EHn9aeUg; yp=1660557717.yu.45512507716; ymex=16617.oyu.455785; location=1; ys=udn.cDDA%3D#c_chck.94; sso_status=sso.passport.yandex.ru:synchronized; _ym_isad=1; cmtchd=MTY2MDQ3MTMxOTI4MA==; PHPSESSID=a76a5fghj8ghfj97; yandex_gid=10522; tc=1; uid=22500473; mobile=no; _ym_visorc=b; user_country=ot' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-site' -H 'TE: trailers' --data-raw '{"operationName":"FilmBaseInfo","variables":{"filmId":1249527,"isAuthorized":true,"kpCityId":1,"promotionsConfig":{"configVersion":"1.0","platform":"kp"},"actorsLimit":10,"voiceOverActorsLimit":5,"relatedMoviesLimit":14,"mediaBillingTarget":"kp-0522"},"query":"query FilmBaseInfo($filmId: Long!, $isAuthorized: Boolean!, $kpCityId: Int!, $promotionsConfig: PromotionConfigFilterInput!, $mediaBillingTarget: String!, $actorsLimit: Int, $voiceOverActorsLimit: Int, $relatedMoviesLimit: Int) {}"}'`
    const result = curlToObject(curlStr);

    it('href should be "https://api.openmovieapi.dev/graphql/?operationName=FilmBaseInfo"', () => {
        expect(result.href).toEqual("https://api.openmovieapi.dev/graphql/?operationName=FilmBaseInfo");
    });

    it('baseUrl should be "https://api.openmovieapi.dev"', () => {
        expect(result.baseURL).toEqual("https://api.openmovieapi.dev");
    });

    it('method should be "POST"', () => {
        expect(result.method).toEqual("POST");
    });

    it('url should be "/graphql/"', () => {
        expect(result.url).toEqual("/graphql/");
    });

    it('data object should contain a operationName', () => {
        expect(result.data).toBeInstanceOf(Object)
        expect(result.data["operationName"]).toEqual('FilmBaseInfo')
    })

    it('data object should contain a variables', () => {
        expect(result.data["variables"]).toBeInstanceOf(Object)
        expect(result.data["variables"]["filmId"]).toEqual(1249527)
        expect(result.data["variables"]["promotionsConfig"]["configVersion"]).toEqual('1.0')
        expect(result.data["variables"]["isAuthorized"]).toEqual(true)
    })

    it('data object should contain a query', () => {
        expect(result.data["query"]).toContain("$voiceOverActorsLimit: Int")
        expect(result.data["query"]).toContain("query FilmBaseInfo($filmId: Long!")
    })
});

describe("Transform curl put command to an object in long syntax", () => {
    const curlStr = `curl --location --request PUT 'http://localhost:3004/movie' --header 'Content-Type: application/json' --data-raw '{ "updateData": [ "base", "premiere", "seasonsInfo", "seasons", "fees", "budget", "videos", "similarMovies", "persons", "allDataPersons", "sequelsAndPrequels" ], "query": {} }'`
    const result = curlToObject(curlStr);

    it('href should be "http://localhost:3004/movie"', () => {
        expect(result.href).toEqual("http://localhost:3004/movie");
    });

    it('baseUrl should be "http://localhost:3004"', () => {
        expect(result.baseURL).toEqual("http://localhost:3004");
    });

    it('method should be "PUT"', () => {
        expect(result.method).toEqual("PUT");
    });

    it('url should be "/movie"', () => {
        expect(result.url).toEqual("/movie");
    });

    it('headers object should contain a Content-Type', () => {
        expect(result.headers).toBeInstanceOf(Object)
        expect(result.headers["Content-Type"]).toEqual('application/json')
    })

    it('data object should contain a updateData', () => {
        expect(result.data).toBeInstanceOf(Object)
        expect(result.data["updateData"]).toContain("fees")
        expect(result.data["updateData"]).toContain("persons")
    })

    it('data object should contain a query', () => {
        expect(result.data["query"]).toBeInstanceOf(Object)
    })
});
