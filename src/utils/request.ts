
//进行axios二次封装:使用请求与响应拦截器
import axios from 'axios'

let request = axios.create({
    //基础路径
  baseURL: 'https://api.materialsproject.org/rest/v2',
  timeout: 5000,
})
//第二步:request实例添加请求与响应拦截器

//对外暴露
export default request
