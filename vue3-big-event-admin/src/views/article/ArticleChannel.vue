<script setup>
import { artDelChannelsService, artGetChannelsService } from '@/api/article';
import { ref } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import ChannelEdit from '../article/components/ChannelEdit.vue'
const channleList = ref([])
const loading = ref(false)
const dialog = ref()

const getetChannelList = async () => {
  loading.value = true
  const res = await artGetChannelsService()
  channleList.value = res.data.data
  loading.value = false
}
getetChannelList()

const onEditChannel = (rwo) => {
  dialog.value.open(rwo)
}
const onDelChannel = async (rwo) => {
  await ElMessageBox.confirm('你确认要删除吗？', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await artDelChannelsService(rwo.id)
  ElMessage.success('删除成功')
  getetChannelList()
}

const onAddChannel = () => {
  dialog.value.open({})
}
const onSuccess = () => {
  getetChannelList()
}
</script>

<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button @click="onAddChannel">添加分类</el-button>
    </template>
    <el-table v-loading="loading" :data="channleList" style="width: 100%">
      <el-table-column label="序号" type="index" width="100"></el-table-column>
      <el-table-column prop="cate_name" label="分类名称"></el-table-column>
      <el-table-column prop="cate_alias" label="分类别名"></el-table-column>
      <el-table-column width="150" label="操作">
        <!-- row 就是channelList的影响 $index 下标 -->
        <template #default="{ row, $index }">
          <el-button plain type="primary" circle :icon="Edit" @click="onEditChannel(row, $index)"></el-button>
          <el-button plain type="danger" circle :icon="Delete" @click="onDelChannel(row, $index)"></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据"></el-empty>
      </template>
    </el-table>
    <channel-edit ref="dialog" @success="onSuccess"></channel-edit>
  </page-container>
</template>

<style lang="scss" scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
