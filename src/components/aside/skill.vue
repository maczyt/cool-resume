<template>
  <div class="skill">
    <div class="skill--title">
      <Icon custom="iconfont icon-jineng" size="26" />
      <p>技能</p>
    </div>
    <div class="skill--main bottom-line">
      <skill-slide 
        v-for="(item, index) in skill"
        :key="index"
        class="skill--main_item" :value="item.value" :name="item.label" />

      <Button v-if="isEdit" size="small" type="success" long @click.native="isShowModal = true;">编辑</Button>
      
    </div>

    <skill-edit
      :show="isShowModal"
      @close="isShowModal = false;"
    />
  </div>
</template>

<script>
import skillSlide from "../skill-slide";
import skillEdit from "./skill-edit";
import { mapState } from "vuex";

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
    ...mapState(["skill"])
  },
  components: {
    skillSlide,
    skillEdit
  }
};
</script>


<style lang="less" scoped>
@scale: calc(3579 / 880);

.skill {
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
      margin-bottom: calc(50px / @scale);
    }
  }
}
</style>
