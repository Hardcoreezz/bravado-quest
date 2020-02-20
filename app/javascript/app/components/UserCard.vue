<template>
  <div class="user-card">
    <div class="user-card__image">
      <img :src="user.avatar" class="user-card__avatar" alt="avatar"/>
    </div>

    <div class="user-card__info">
      <div class="user-card__bio">
        <div class="user-card__name" v-html="name"></div>
        <div class="user-card__email" v-html="email"></div>
      </div>
      <div class="user-card__title" v-html="title"></div>
      <div class="user-card__address" v-html="address"></div>
      <div class="user-card__actions">
        <button class="user-card__button">Mark as suitable</button>
      </div>
    </div>
  </div>
</template>

<script>
import highlight from '../filters/highlight';

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    highlighted: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      className: 'user-card__hightlight'
    }
  },
  computed: {
    name() {
      return highlight(this.user.name, this.highlighted, this.className);
    },
    email() {
      return highlight(this.user.email, this.highlighted, this.className);
    },
    title() {
      return highlight(this.user.title, this.highlighted, this.className);
    },
    address() {
      const fullAddress = `${this.user.address}, ${this.user.city}`;
      return highlight(fullAddress, this.highlighted, this.className);
    }
  }
};
</script>

<style scoped lang="scss">
  .user-card {
    background: #fafafa;
    display: flex;
    flex-direction: row;
    align-items: center;

    &__avatar {
      max-width: 100%;
    }

    &__image {
      width: 134px;
      line-height: 0;
      background: #AAAAAA;
    }

    &__info {
      flex: 1;
      padding: 10px;
      overflow: hidden;

      @media (min-width: 992px) {
        padding: 10px 9px 19px 27px;
      }
    }

    &__name {
      flex: 1;
      font-size: 2.4rem;
      line-height: 1.33;
      max-width: 100%;
      color: rgba(0, 0, 0, 0.87);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__title {
      font-size: 1.4rem;
      line-height: 1.42;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.543846);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__address {
      font-size: 1.4rem;
      line-height: 1.42;
      color: rgba(0, 0, 0, 0.543846);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__bio {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      overflow: hidden;

      @media (min-width: 992px) {
        flex-direction: row;
      }
    }

    &__email {
      font-size: 1.4rem;
      line-height: 1.14;
      color: rgba(0, 0, 0, 0.54);

      @media (min-width: 992px) {
        margin-left: 10px;
      }
    }

    &__button {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.14;
      color: #009688;
      border: none;
      background: none;
      text-transform: uppercase;
      padding: 0;
      margin: 0;
    }

    &__actions {
      margin: 3px -9px 0 -27px;
      padding: 14px 9px 0 27px;
      border-top: 1px solid rgba(0, 0, 0, 0.12);
    }

    /deep/ &__hightlight {
      background-color: yellow;
    }
  }
</style>
