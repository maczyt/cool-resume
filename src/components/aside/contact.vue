<template>
  <div class="contact">
    <div class="contact--title">
      <Icon custom="iconfont icon-contact" size="30" />
      <p>联系</p>
    </div>
    <div class="contact--main bottom-line">
      <div 
        class="contact--main_item"
        v-for="(item, index) in contact" :key="index">
        <Icon :title="item.label" :custom="`iconfont ${item.icon}`" size="14" />
        <p>{{item.value}}</p>
      </div>

      <Button @click.native="isShowModal = true" v-if="isEdit" size="small" type="success" long>编辑</Button>
    </div>

    <contact-edit
      :show="isShowModal"
      @close="isShowModal = false;"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import contactEdit from "./contact-edit";

export default {
  data() {
    return {
      isShowModal: false
    };
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  components: {
    contactEdit
  },
  computed: {
    ...mapState(["contact"])
  }
};
</script>


<style lang="less" scoped>
@scale: calc(3579 / 880);

.contact {
  &--title {
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;
    > p {
      margin-left: calc(30px / @scale);
    }
  }
  &--main {
    margin-left: calc(100px / @scale);
    margin-top: calc(64px / @scale);
    padding-bottom: calc(123px / @scale);
    &_item {
      display: flex;
      font-size: 14px;
      align-items: flex-start;
      > p {
        margin-left: calc(30px / @scale);
        word-break: break-all;
        flex: 1;
        line-height: 16px;
        text-align: justify;
        vertical-align: top;
      }
      margin-bottom: calc(35px / @scale);
    }
  }
}
</style>
