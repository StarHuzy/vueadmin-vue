<template>
  <el-row type="flex"  justify="center" >
    <el-col :xl="6" :lg="7">
      <div class="grid-content bg-purple">
        <h2>欢迎来到VueAdmin管理系统</h2>
        <el-image style="width: 180px; height: 180px" :src="require('@/assets/website/logo.jpg')">
        </el-image>
        <p>页面布局</p>
        <p>布局长度</p>
      </div>
    </el-col>
    <el-col :span="1">
      <el-divider direction="vertical"></el-divider>
    </el-col>
    <el-col :xl="6" :lg="7">
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-loginForm">
        <el-form-item label="用户名" prop="username" style="width: 380px;">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" style="width: 380px;">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code" style="width: 380px;">
          <el-input v-model="loginForm.code" style="width: 152px; float: left;"></el-input>
          <el-image :src="captchaImg" class="captchaImg" ></el-image>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">立即创建</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        code: '',
        token: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]

      },
      captchaImg: null
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post("/login",this.loginForm).then(res =>{
            const jwt = res.headers['authorization']
            this.$store.commit("SET_TOKEN",jwt)
            this.$router.push("/index")

          });
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getCaptcha(){
      this.$axios.get('/captcha').then(res => {
        console.log('/captcha')
        console.log(res)
        this.loginForm.token = res.data.data.token
        this.captchaImg = res.data.data.captchaImg
      })

    }
  },
  created(){
    this.getCaptcha()
  }
}
</script>
<style scoped>
.el-row {
  height: 100%;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  text-align: center;
}
.el-divider {
  height: 200px;
}
.captchaImg {
  float: left;
  margin-left: 8px;
  border-radius: 4px;
}

</style>