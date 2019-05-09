<template>
  <Layout class="my-url-page">
    <Row style="margin-top: 15px;">
      <h1>我的邀请链接：{{inviteUrl}}</h1>
    </Row>
    <Row style="margin-top: 15px;">
      <canvas ref="qrCode" class="qr_code"></canvas>
    </Row>
  </Layout>
</template>

<script>
import QRCode from 'qrcode'

export default {
  computed: {
    userInfo () {
      return this.$store.state.user.userInfo
    },
    inviteUrl () {
      return 'https://hr.laway.cn/i/' + this.userInfo.url
    }
  },
  mounted () {
    this.genQRCode()
  },
  methods: {
    genQRCode () {
      const qrcodeContainer = this.$refs.qrCode
      QRCode.toCanvas(qrcodeContainer, this.inviteUrl, {
        errorCorrectionLevel: 'M',
        margin: 0,
        width: 208
      }, (error) => {
        if (error) {
          console.error(error)
        }
      })
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
