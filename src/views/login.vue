<template>
  <Layout class="login-page">
    <Row class="title" type="flex" justify="center">
      <Col>
        <h1>HR法律管家</h1>
      </Col>
    </Row>
    <Row class="login-form-row" type="flex" justify="center">
      <Col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="24">
        <Form ref="form" :model="accountInfo" :rules="validator">
          <FormItem prop="account">
            <Input placeholder="请输入用户名" v-model="accountInfo.account" @keypress.native.enter="login">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" placeholder="请输入密码" v-model="accountInfo.password" @keypress.native.enter="login">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
        </Form>
      </Col>
    </Row>
    <Row class="login-form-button-row" type="flex" justify="center">
      <Col :xxl="2" :xl="3" :lg="4" :md="6" :sm="8" :xs="24">
        <Row type="flex">
          <Button type="primary" style="width: 100%" @click.native="login">登录</Button>
        </Row>
      </Col>
    </Row>
  </Layout>
</template>

<script>
import { login } from '../api/user'

export default {
  data () {
    return {
      accountInfo: {
        account: '',
        password: ''
      },
      validator: {
        account: [
          { required: true, message: '请输入账号', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    async login () {
      this.$refs.form.validate(async valid => {
        if (!valid) {
          return
        }

        try {
          const result = await login(this.accountInfo)
          this.$Message.success('登录成功')
          this.$store.commit('user/setToken', result.token)
          this.$store.commit('user/setUserInfo', result.user)
          this.$router.replace({ name: 'Dashboard' })
        } catch (e) {
          console.error(e)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-page {
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .login-form-row {
    margin-top: 15px;
  }
}

</style>
