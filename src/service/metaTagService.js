//For the moment
const API_URL = 'https://opengraph.io/api/1.1/site/';
const API_KEY ='3619f99f-cc3a-414a-bdd7-8cb06b4b5a8f';

export const getSiteInformation = async (site) => {
  const response = await fetch(`${API_URL}${encodeURIComponent(site)}?app_id=${API_KEY}` );
  const data = await response.json();

  console.log(data)


  return data
};


export const dataFake = ()=>{
    return {
        "hybridGraph": {
            "title": "YouTube",
            "description": "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
            "type": "site",
            "image": "https://www.youtube.com/img/desktop/yt_1200.png",
            "url": "https://www.youtube.com/",
            "favicon": "https://www.youtube.com/s/desktop/e0d7e13a/img/favicon_144x144.png",
            "site_name": "YouTube"
        },
        "openGraph": {
            "image": {
                "url": "https://www.youtube.com/img/desktop/yt_1200.png"
            }
        },
        "htmlInferred": {
            "title": "YouTube",
            "description": "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
            "type": "site",
            "url": "https://www.youtube.com/",
            "favicon": "https://www.youtube.com/s/desktop/e0d7e13a/img/favicon_144x144.png",
            "site_name": "YouTube",
            "images": []
        },
        "requestInfo": {
            "redirects": 0,
            "host": "https://www.youtube.com/",
            "responseCode": 200,
            "cache_ok": true,
            "max_cache_age": 432000000,
            "accept_lang": "en-US,en;q=0.9",
            "url": "https://www.youtube.com/",
            "full_render": false,
            "use_proxy": false,
            "use_premium": false,
            "use_superior": false,
            "proxy_limit": "1",
            "requests_limit": "2",
            "request_increase": "true",
            "api_request_count_full_render": "10",
            "api_request_count_proxy": "10",
            "api_request_count_superior": "30",
            "responseContentType": "text/html; charset=utf-8",
            "_clientInfo": {
                "planId": "937a2800-2a63-11ef-bdea-7900d91564a1"
            }
        },
        "accept_lang": "en-US,en;q=0.9",
        "is_cache": true,
        "url": "https://www.youtube.com/",
        "timestamp": "2024-06-14T15:54:57.694Z"
    }
}