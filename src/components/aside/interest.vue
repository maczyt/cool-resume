<template>
  <div class="interest">
    <div class="interest--title">
      <Icon custom="iconfont icon-samiconzhuanqucs4291" size="26" />
      <p>兴趣</p>
    </div>
    <div class="interest--main bottom-line">
      <div
        class="interest--main_item" v-for="(arr, index) in interestGetter" :key="index">
        <div v-for="(item, ind) in arr" :key="ind">
          <div :title="item.label">
            <Icon :custom="`iconfont ${item.icon}`" size="35" />
          </div>
        </div>
      </div>

      <Button @click.native="isShowModal = true" v-if="isEdit" size="small" type="success" long>编辑</Button>
    </div>

    <interest-edit
      :show="isShowModal"
      @close="isShowModal = false;"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import interestEdit from "./interest-edit";

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
  computed: {
    ...mapGetters(["interestGetter"])
  },
  components: {
    interestEdit
  }
};
</script>


<style lang="less" scoped>
@scale: calc(3579 / 880);

.interest {
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
      margin-bottom: 20px;
      > div {
        width: calc(100% / 3);
        display: flex;
        &:nth-child(1) {
          justify-content: flex-start;
        }
        &:nth-child(2) {
          justify-content: center;
        }
        &:nth-child(3) {
          justify-content: flex-end;
        }
      }
    }
  }
}
</style>
