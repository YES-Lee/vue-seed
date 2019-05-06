<template>
  <Layout class="my-url-page">
    <Row style="margin-top: 15px;">
      <h1>我的邀请链接：https://hr.laway.cn/i/{{userInfo.url}}</h1>
    </Row>
  </Layout>
</template>

<script>
export default {
  computed: {
    userInfo () {
      return this.$store.state.user.userInfo
    }
  }
}
</script>

<style lang="less" scoped>
.my-url-page {
  background-color: #fff;
  height: 100%;
  // justify-content: center;
  align-items: center;
}

</style>
