<template>
  <div class="search">
    <input type="text" placeholder="Search.." class="search__input" v-model="search" />
  </div>
</template>

<script>
import { debounce } from '../utils/core/delay';

export default {
  props: {
    value: {
      type: String,
      default: '',
    }
  },
  computed: {
    search: {
      get() {
        return this.value;
      },
      set: debounce(function (newVal) {
        this.$emit('change', newVal);
      }, 300),
    }
  }
};
</script>

<style scoped lang="scss">
  .search {
    position: relative;

    &:before {
      content: '';
      width: 18px;
      height: 18px;
      position: absolute;
      z-index: 10;
      background: url('../images/search.svg');
      left: 20px;
      top: 50%;
      margin-top: -10px;
    }

    &__input {
      background: #FAFAFA;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
      border-radius: 2px;
      font-size: 2.4rem;
      line-height: 1.16;
      color: rgba(0, 0, 0, 0.75);
      padding: 12px 12px 12px 50px;
      width: 100%;
      border: none;
      outline: none;
    }
  }
</style>
