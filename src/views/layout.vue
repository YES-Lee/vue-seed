<template>
  <Layout class="layout-page">
    <Header>
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo">
          <h1>HR法律管家推广系统</h1>
        </div>
      </Menu>
    </Header>
    <Layout>
      <Sider hide-trigger :style="{background: '#fff'}">
        <Menu :active-name="currentMenu" theme="light" width="auto" @on-select="selectMenu">
          <MenuItem name="Dashboard">
            <Icon type="ios-compass-outline"></Icon>
            我邀请的人
          </MenuItem>
          <MenuItem name="MyUrl">
            <Icon type="ios-compass-outline"></Icon>
            我的邀请链接
          </MenuItem>
        </Menu>
      </Sider>
      <Layout :style="{padding: '0 24px 24px'}" style="height: 100%;">
          <Breadcrumb :style="{margin: '24px 0'}" style="flex: 0 0 auto;">
              <BreadcrumbItem>Dashboard</BreadcrumbItem>
          </Breadcrumb>
          <Content class="content-layout">
            <router-view />
          </Content>
      </Layout>
    </Layout>
  </Layout>
</template>

<script>
export default {
  data () {
    return {
      currentMenu: 'Dashboard'
    }
  },
  watch: {
    '$route.name' (newVal) {
      this.currentMenu = newVal || 'Dashboard'
    }
  },
  methods: {
    selectMenu (menu) {
      this.$router.replace({ name: menu })
    }
  }
}
</script>

<style lang="less" scoped>
.layout-page {
  height: 100%;
}

.layout-logo {
  color: #fff;
}

.content-layout {
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  flex: 1 1 auto;
  height: 100%;
  overflow: auto;
}

</style>
