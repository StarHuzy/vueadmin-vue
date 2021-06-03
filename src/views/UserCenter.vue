<template>
  <div style="text-align: center;">
    <h2>你好！{{userInfo.username}}</h2>
    <el-form :model="passFrom" status-icon :rules="rules" ref="passFrom" label-width="100px" >
      <el-form-item label="旧密码" prop="currentPass">
        <el-input type="password" v-model="passFrom.currentPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="password">
        <el-input type="password" v-model="passFrom.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="passFrom.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('passFrom')">提交</el-button>
        <el-button @click="resetForm('passFrom')">重置</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.passFrom.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      userInfo: {

      },
      passFrom: {
        password: '',
        checkPass: '',
        currentPass: ''
      },
      rules:{
        username: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12个字符', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        currentPass: [
          { required: true, message: '请输入旧密码', trigger: 'blur' }
        ]
      }
    };
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      this.$axios.get("/system/userInfo").then(res =>{
        this.userInfo = res.data.data

      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
.el-form {
  width: 420px;
  margin: 50px auto;
}

</style>