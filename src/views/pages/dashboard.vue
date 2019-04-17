<template>
  <Layout class="dashboard-page">
    <Row>
      <Table :columns="columns" :data="dataList"/>
    </Row>
  </Layout>
</template>

<script>
import { getMyInvited } from '../../api/user'

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
          title: 'ID',
          key: 'id'
        },
        {
          title: '昵称',
          key: 'name'
        },
        {
          title: '注册时间',
          key: 'createTime'
        }
      ],
      dataList: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      try {
        this.dataList = await getMyInvited()
      } catch (e) {
        console.error(e)
        this.$Message.error(e.message)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.dashboard-page {
  height: 100%;
  background-color: #fff;
}

</style>
