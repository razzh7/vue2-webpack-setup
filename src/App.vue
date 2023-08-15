<template>
  <div>
    <x-button />
    <x-cards>
      slot插槽内容：Cards卡片
    </x-cards>
  </div>
</template>

<script>
import XButton from './components/Button'
import XCards from './components/Card/Card'
export default {
  components: {
    XButton,
    XCards
  }
}
</script>
