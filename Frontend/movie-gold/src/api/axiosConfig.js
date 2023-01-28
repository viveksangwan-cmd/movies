import axios from "axios";

export default axios.create({
    // baseURL: "http://ec2-54-178-91-79.ap-northeast-1.compute.amazonaws.com:9091",
    baseURL:"http://localhost:9091/"
});