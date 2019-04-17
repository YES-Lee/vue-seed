<template>
  <Layout class="consume-page">
    <Row>
      <h1 style="text-align: right;">总金额：¥{{totalMoney / 100}}</h1>
    </Row>
    <Row style="margin-top: 15px;">
      <Table :columns="columns" :data="dataList"/>
    </Row>
  </Layout>
</template>

<script>
import { getConsumeInfo } from '../../api/user'

export default {
  data () {
    return {
      columns: [
        {
          title: '#',
          type: 'index',
          width: 60
        },
        {
          title: '用户ID',
          key: 'userId'
        },
        {
          title: '昵称',
          key: 'name'
        },
        {
          title: '消费项目',
          key: 'title'
        },
        {
          title: '消费金额',
          key: 'amount'
        },
        {
          title: '消费时间',
          key: 'updateTime'
        }
      ],
      dataList: [],
      totalMoney: 0
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      try {
        const { list, totalMoney } = await getConsumeInfo()
        this.dataList = list
        this.totalMoney = totalMoney
      } catch (e) {
        console.error(e)
        this.$Message.error(e.message)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.consume-page {
  height: 100%;
  background-color: #fff;
}

</style>
