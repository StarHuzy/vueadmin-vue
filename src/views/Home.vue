<template>
  <el-container>
    <el-aside width="200px">

      <SideMenu></SideMenu>

    </el-aside>
    <el-container>
      <el-header>
        <strong>VueAdmin后台管理系统</strong>

        <div class="header-avatar">
          <el-avatar size="small" :src="userInfo.avatar"></el-avatar>
          <el-dropdown>
            <span class="el-dropdown-link">{{userInfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link :to="{name: 'UserCenter'}"> 个人中心</router-link>

              </el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-link href="" target="_blank">帮助</el-link>
          <el-link href="" target="_blank">关于</el-link>
        </div>


      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideMenu from "./include/SideMenu";
export default {
  name: "Home",
  components: {SideMenu},
  data(){
    return {
      userInfo: {
        id: "",
        username: "",
        avatar: ""
      }
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo(){
      this.$axios.get("/system/userInfo").then(res =>{
        this.userInfo = res.data.data
      })
    }
  }
}
</script>

<style scoped>

/* Container 布局样式 */
.el-container{
  margin: 0;
  padding: 0;
  height: 100%;
}
/* avatar 布局样式 */
.header-avatar{
  float: right;
  width: 210px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
/* 下拉菜单鼠标变手 */
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-header{
  background-color: #48D1CC;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;


  line-height: 200px;
}

.el-main {

  color: #333;
  text-align: center;
  line-height: 160px;
}

</style>