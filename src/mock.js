const Mock = require('mockjs')

const Random = Mock.Random

let Result = {
    code :200 ,
    msg : "操作成功",
    data: null
}

Mock.mock("/captcha","get",()=>{
    Result.data = {
        token: Random.string(32),
        captchaImg: Random.dataImage('120x40','7s6kt')
    }
    return Result
})

Mock.mock("/login","post",()=>{

    Result.code = 400
    Result.msg = "验证码错误"
    return Result;
})

Mock.mock("/system/userInfo","get",()=>{
    Result.data = {
        id: "1",
        username: "Tom",
        avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    }
    return Result
})
