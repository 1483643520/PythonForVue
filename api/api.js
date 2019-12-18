// 接口汇总
import axios from "axios"

// axios.get('https://dog.ceo/api/breeds/image/random')
//     .then(response => {
//             console.log(response.data);
//             //此时的this 就可以指定vue对象
//             this.url = response.data.message
//         }
//     )
//     .catch(function (err) {
//         console.log(err)
//     });

// //定义函数返回url
// function f() {
//     return axios.get("https://dog.ceo/api/breeds/image/random")
//
// }

//公共函数
const host = "https://dog.ceo";

//箭头函数写法，以后调用该函数即可访问,$host公共参数调用
export const dogs = () => {
    return axios.get(`${host}/api/breeds/image/random`)
};
