<template>
  <div class="empty">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Nothing found...',
    },
  },
};
</script>

<style scoped lang="scss">
  .empty {
    font-size: 1.6rem;
    text-align: center;
    padding: 20px;
  }
</style>
