<template>
  <select :value="value" @change="hanldChang">
    <option value="101">广州</option>
    <option value="102">上海</option>
    <option value="103">武汉</option>
    <option value="104">深圳</option>
    <option value="105">北京</option>
  </select>
</template>

<script>
export default {
  props: {
    value: String
  },
  methods: {
    hanldChang(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style></style>