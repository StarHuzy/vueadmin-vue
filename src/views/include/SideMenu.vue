<template>
  <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <el-menu-item index="0">
      <template slot="title">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </template>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-operation"></i>
        <span>系统管理</span>
      </template>

      <router-link to="/system/user">
      <el-menu-item index="1-1">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span slot="title">用户管理</span>
        </template>
      </el-menu-item>
      </router-link>
      <router-link to="/system/role">
      <el-menu-item index="1-2">
        <template slot="title">
          <i class="el-icon-rank"></i>
          <span slot="title">角色管理</span>
        </template>
      </el-menu-item>
      </router-link>
      <router-link to="/system/menu">
      <el-menu-item index="1-3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">菜单管理</span>
        </template>
      </el-menu-item>
      </router-link>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-s-tools"></i>
        <span>系统工具</span>
      </template>
      <el-menu-item index="2-2">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span slot="title">数字字典</span>
        </template>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "SideMenu"
}
</script>

<style scoped>

/* 导航菜单长度百分之百*/
.el-menu-vertical-demo{
  height: 100%;
}

</style>