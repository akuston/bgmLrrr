import axios from "axios";

/* 
    基础路由的配置
*/
axios.defaults.baseURL = "https://api.bgm.tv/";
/* 
    设置请求拦截器
*/
const urlArr = ["/v0/me"];
axios.interceptors.request.use((config) => {
  //获取token的信息，然后将token信息携带到请求头信息中
  let row = urlArr.find((n) => n == config.url);
  if (row) {
    config.headers.Authorization =
      "Bearer TnRhPpxQ9NGry5XWmqvk9p6ozLCuSqq7C4Ht1ptn";
  }
  //console.log(getToken());
  return config;
});
/* 
   设置响应拦截器
*/
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    if (err.response) {
      switch (err.response.status) {
        case 401:
          break;
        case 404:
          break;
        case 500:
          break;
      }
    }
  }
);

export default axios;
