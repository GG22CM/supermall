import axios from "axios";

export function request(config){
  const instance=axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout: 5000
  });

  instance.interceptors.request.use(config=>config,err=>console.log(err))
  instance.interceptors.response.use(res=>{
    /**
     * 还是有用的
     */
    return res.data
  },err=>console.log(err))

  return instance(config)
}
