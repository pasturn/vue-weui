<template>
  <div>
    <WeuiButton :type="'primary'">页面次要操作 Normal</WeuiButton>
    <WeuiButton :type="'primary'" disabled>页面次要操作 Normal</WeuiButton>
    <WeuiButton>页面次要操作 Normal</WeuiButton>
    <WeuiButton disabled>页面次要操作 Normal</WeuiButton>
    <WeuiButton :type="'warn'">页面次要操作 Normal</WeuiButton>
    <WeuiButton :type="'warn'" disabled>页面次要操作 Normal</WeuiButton>
    <WeuiButton plain>页面次要操作 Normal</WeuiButton>
    <WeuiButton plain disabled>页面次要操作 Normal</WeuiButton>
    <WeuiButton :type="'primary'" plain>页面次要操作 Normal</WeuiButton>
    <WeuiButton :type="'primary'" plain disabled>页面次要操作 Normal</WeuiButton>
    <WeuiButton :type="'primary'" mini>按钮</WeuiButton>
    <WeuiButton mini>按钮</WeuiButton>
    <WeuiButton :type="'warn'" mini>按钮</WeuiButton>
  </div>
</template>

<script>
import Button from '../components/Button'

export default {
  name: 'app',
  components: {
    'WeuiButton': Button
  }
}
</script>
