<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { userRegisterService, userLoginService } from '@/api/user.js'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'
const isRegister = ref(true)

const form = ref()
// 整个的用于提交的form数据对象
const formModel = ref({
  username: '',
  password: '',
  repassword: ''
})
// 整个的表单校验规则
// 1. 非空校验 required: true message消息提示， trigger触发校验的时机 blur change
// 2. 长度校验 min max
// 3. 正则校验 pattern 正则规则
// 4. 自定义校验 => 自己写逻辑校验 （校验函数）
//    validator:(rule, value, callback)
//    1. rule 当前校验规则相关的信息
//    2. value 所校验的表单元素目前的表单值
//    3. callback 无论成功还是失败， 都需要callback 回调
//       - callback() 校验成功
//       - callback(new Error(错误信息))校验失败
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, max: 10, message: '用户名必须是5-10位的字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15位的非空字符',
      trigger: 'blur'
    }
  ],
  repassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15的非空字符',
      trigger: 'blur'
    },
    {
      validator: (rule, value, callback) => {
        // 判断value 和当前 form 中手机的 password 是否一致
        if (value !== formModel.value.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}
// 注册按钮
const register = async () => {
  // 注册成功之前，先进行校验 校验成功 => 请求， 校验失败 => 自动提示
  await form.value.validate()
  await userRegisterService(formModel.value)
  ElMessage.success('注册成功')
  isRegister.value = false
}

// 切换的时候 重置表单内容
watch(isRegister, () => {
  formModel.value = {
    username: '',
    password: '',
    repassword: ''
  }
})

const UserStore = useUserStore()
const router = useRouter()
// 登录按钮
const login = async () => {
  await form.value.validate()
  ElMessage.success('登录成功')
  const res = await userLoginService(formModel.value)
  UserStore.setToken(res.data.token)
  router.push('/')
}
</script>

<template>
  <!-- 
    1. 结构相关
    el-row表示一行，一行分成124
    el-col表示列 
    :span="12" 表示在一行中占12份 50%
    :span="6" 表示在一行中占6份 25%
    :offset="3 表示在一行中 左侧margin分数

    el-form 整个表单的组件
    el-form-item表示表单的一行 （一个表单域）

    2. 校验相关
      1. el-form => :model="ruleForm"  绑定的整个form的数据对象
      2. el-from => :rules="rules" 绑定的整个rules规则对象 
      3. 表单元素 => v-model= "ruleForm" 给表单元素，绑定form的属性
      4. prop配置生效的是哪个校验规则（和rules中的字段对应）
   -->
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <el-col :span="6" :offset="3" class="form">
      <el-form :model="formModel" :rules="rules" ref="form" size="large" autocomplete="off" v-if="isRegister">
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="formModel.username" :prefix-icon="User" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="formModel.password" :prefix-icon="Lock" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input v-model="formModel.repassword" :prefix-icon="Lock" type="password" placeholder="请输入再次密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="register" class="button" type="primary" auto-insert-space>
            注册
          </el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = false">
            ← 返回
          </el-link>
        </el-form-item>
      </el-form>
      <el-form :model="formModel" :rules="rules" ref="form" size="large" autocomplete="off" v-else>
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="formModel.username" :prefix-icon="User" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password" v-model="formModel.password" :prefix-icon="Lock" type="password"
            placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox>记住我</el-checkbox>
            <el-link type="primary" :underline="false">忘记密码？</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" class="button" type="primary" auto-insert-space>登录</el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = true">
            注册 →
          </el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background-color: #fff;

  .bg {
    background: url('@/assets/logo2.png') no-repeat 60% center / 240px auto,
      url('@/assets/login_bg.jpg') no-repeat center / cover;
    border-radius: 0 20px 20px 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;

    .title {
      margin: 0 auto;
    }

    .button {
      width: 100%;
    }

    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
