<template>
  <div>
    <!-- <input v-focus v-if="isEdit" ref="inp" type="text"> -->
    <!-- <input @keyup.enter="hucan" v-model="input" @blur="isEdit = false" placeholder="输入标签 " v-focus v-if="isEdit" ref="inp" type="text">
     -->
    <input @keyup.enter="hucan" :value="value" @blur="isEdit = false" placeholder="输入标签 " v-focus v-if="isEdit" ref="inp"
      type="text">
    <div @dblclick="handleClick" v-else class="txt">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data() {
    return {
      // input: '',
      isEdit: false
    }
  },
  methods: {
    handleClick() {
      this.isEdit = true
      // this.$nextTick(() => {
      //   this.$refs.inp.focus()
      // })

    },
    hucan(e) {
      if (e.target.value.trim() === '') {
        alert('不能为空')
        return
      }
      this.$emit('input', e.target.value)
      this.isEdit = false
    }
  },
  // directives: {
  //   focus: {
  //     inserted(el) {
  //       el.focus()
  //     }
  //   }
  // }
}
</script>

<style>
input {
  width: 70px;
}

.txt {
  cursor: pointer;
}
</style>