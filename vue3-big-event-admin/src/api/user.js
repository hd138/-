import request from '@/utils/request'

// export const userRegisterService = ({ username, password, repassword }) => {
//   return request.post('/api/login', {
//     username,
//     password,
//     repassword
//   })
// }

// 注册接口
export const userRegisterService = ({ username, password, repassword }) =>
  request.post('/api/reg', {
    username,
    password,
    repassword
  })

// 登录接口
export const userLoginService = ({ username, password }) =>
  request.post('/api/login', {
    username,
    password
  })

// 获取用户基本信息接口
export const userGetInfoService = () =>
  request.get('/my/userinfo')


// 修改
export const userUpdateInfoService = ({ id, nickname, email }) =>
  request.put('/my/userinfo', { id, nickname, email })

// 上传
export const userUploadAvatarService = (avatar) => request.patch('/my/update/avatar', { avatar })

// 修改密码
export const userUpdatePassService = ({ old_pwd, new_pwd, re_pwd }) =>
  request.patch('/my/updatepwd', { old_pwd, new_pwd, re_pwd })