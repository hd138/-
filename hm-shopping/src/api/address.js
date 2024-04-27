import request from '@/utils/request'

// 获取收获地址
export const getAddressList = () => {
  return request.get('/address/list')
}

// 添加收获地址
export const setAddress = () => {
  return request.post('/address/add', {
    form: {
      name: '张山',
      phone: '13871871909',
      region: [
        { value: 782, label: '上海' },
        { value: 782, label: '上海时' },
        { value: 782, label: '徐汇区' }
      ],
      detail: '北京路1号楼8888室'
    }
  })
}
