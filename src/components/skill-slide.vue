<template>
  <div class="skill-slide">
    <p class="name">
      {{ name }}
    </p>

    <div class="mask">
      <div
        :class="{ 'full': +value === 100 }" 
        class="value" :style="{ width: `${value}%` }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    value: [Number, String]
  }
};
</script>


<style lang="less" scoped>
@scale: calc(3579 / 880);

.skill-slide {
  .name {
    font-size: 14px;
    margin-bottom: calc(28px / @scale);
  }

  .mask {
    background: rgba(0, 0, 0, 0.3);
    height: calc(10px / @scale);
    border-radius: 3px;
    .value {
      height: 100%;
      background-color: currentColor;
      border-radius: inherit;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        background-color: currentColor;
        width: calc(26px / @scale);
        height: calc(26px / @scale);
        border-radius: 50%;
        margin-top: calc(-13px / @scale);
      }
      &.full {
        &:after {
          display: none;
        }
      }
    }
  }
}
</style>

