<template>
  <Layout class="layout-page">
    <Header class="layout-header">
      <Menu class="header-nav" theme="dark" >
        <div class="layout-logo">
          <h1>HR法律管家推广系统</h1>
        </div>
      </Menu>
      <Button class="logout-btn" type="primary" @click.native="logout">退出</Button>
    </Header>
    <Layout>
      <Sider hide-trigger :style="{background: '#fff'}">
        <Menu :active-name="currentMenu" theme="light" width="auto" @on-select="selectMenu">
          <MenuItem name="MyUrl">
            <Icon type="ios-link"></Icon>
            我的邀请链接
          </MenuItem>
          <MenuItem name="Dashboard">
            <Icon type="ios-compass-outline"></Icon>
            我邀请的人
          </MenuItem>
          <MenuItem name="Consume">
            <Icon type="ios-card"></Icon>
            用户消费
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
      currentMenu: 'MyUrl'
    }
  },
  watch: {
    '$route.name' (newVal) {
      this.currentMenu = newVal || 'MyUrl'
    }
  },
  methods: {
    selectMenu (menu) {
      this.$router.replace({ name: menu })
    },
    logout () {
      this.$store.commit('user/logout')
    }
  }
}
</script>

<style lang="less" scoped>
.layout-page {
  height: 100%;
  .layout-header {
    display: flex;
    align-items: center;
    .header-nav {
      flex: 1 1 auto;
    }
    .logout-btn {
      flex: 0 0 auto;
    }
  }
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
