<template>
  <div class="wrap has-shadow">
    <section class="head has-shadow">
      <div class="head-avatar">
        <img :src="avatarUrl" />
      </div>
      <div class="head-info">
        <div class="head-info--name">{{personInfo.name}}</div>
        <div class="head-info--vocation">{{personInfo.vocation}}</div>
        <div class="head-info--detail">{{personInfo.detail}}</div>
      </div>
    </section>

    <section class="main">
      <main>
        <section class="main-work has-shadow">
          <div class="we-title">
            <Icon size="30" color="#48beef" custom="iconfont icon-gongzuo" />
            <p>工作经历</p>
          </div>
          <div class="we-list">
            <div class="we-list-item" v-for="(item, index) in work" :key="index">
              <div class="we-list-item--vocation">{{item.vocation}} @{{item.company}}</div>
              <div class="we-list-item--date">{{dayjs(item.time[0]).format('YYYY-MM-DD')}} ~ {{dayjs(item.time[1]).format('YYYY-MM-DD')}}</div>
              <div class="we-list-item--detail">{{item.detail}}</div>
            </div>
          </div>
        </section>
        <section class="main-education has-shadow">
          <div class="we-title">
            <Icon size="30" color="#48beef" custom="iconfont icon-jiaoyu" />
            <p>教育经历</p>
          </div>
          <div class="we-list">
            <div class="we-list-item" v-for="(item, index) in education" :key="index">
              <div class="we-list-item--vocation">{{item.profession}} @{{item.school}}</div>
              <div class="we-list-item--date">{{dayjs(item.time[0]).format('YYYY-MM-DD')}} ~ {{dayjs(item.time[1]).format('YYYY-MM-DD')}}</div>
              <div class="we-list-item--detail">{{item.detail}}</div>
            </div>
          </div>
        </section>
      </main>
      <aside class="has-shadow">
        <contact class="aside-item" />
        <interest class="aside-item" />
        <skill class="aside-item" />

      </aside>
    </section >
  </div>
</template>

<script>
import { CommonMixin } from "./mixins";
import { mapState } from "vuex";
import contact from "./aside/contact";
import interest from "./aside/interest";
import skill from "./aside/skill";

export default {
  mixins: [CommonMixin],
  data() {
    return {
      avatar_url: ""
    };
  },
  computed: {
    ...mapState(["avatarUrl", "personInfo", "work", "education"])
  },
  components: {
    contact,
    interest,
    skill
  },
  methods: {}
};
</script>


<style lang="less" scoped>
@scale: calc(3579 / 880);

@main_iconcolor: #48beef;

.has-shadow {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.wrap {
  width: 627px;
  margin: 25px auto;
  background-color: #f8f9f9;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  * {
    line-height: 1;
  }
}

.head {
  height: calc(765px / @scale);
  display: flex;
  &-avatar {
    width: calc(834px / @scale);
    height: 100%;
    background-color: #6a6966;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  &-info {
    flex: 1;
    padding: calc(90px / @scale) calc(122px / @scale) calc(157px / @scale)
      calc(80px / @scale);
    &--name {
      font-size: 22px;
      color: #48beef;
      font-weight: bold;
    }
    &--vocation {
      font-size: 14px;
      font-weight: 500;
      margin-top: calc(20px / @scale);
      margin-bottom: calc(91px / @scale);
    }
    &--detail {
      font-size: 12px;
      line-height: 16px;
      font-weight: 200;
      text-align: justify;
    }
  }
}

.main {
  display: flex;
  margin-top: calc(50px / @scale);
  > main {
    flex: 1;
    margin-right: calc(50px / @scale);
  }
  > aside {
    background-color: #44bff0;
    color: #fff;
    width: calc(905px / @scale);
    padding-top: calc(97px / @scale);
    padding-left: calc(100px / @scale);
    padding-right: calc(116px / @scale);
    .aside-item {
      &:not(:last-child) {
        margin-bottom: calc(100px / @scale);
        /deep/ .bottom-line {
          border-bottom: 1px solid #b0dff7;
        }
      }
    }
  }

  &-work {
    margin-bottom: calc(50px / @scale);
    padding-bottom: calc(60px / @scale);
  }
  &-education {
    padding-bottom: calc(60px / @scale);
  }

  .we-title {
    color: @main_iconcolor;
    font-weight: bold;
    font-size: 20px;
    padding-top: calc(68px / @scale);
    padding-left: calc(104px / @scale);
    display: flex;
    align-items: center;
    > p {
      margin-left: calc(30px / @scale);
    }
  }

  .we-list {
    padding-left: calc(200px / @scale);
    margin-top: calc(60px / @scale);
    &-item {
      &--vocation {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: calc(26px / @scale);
      }
      &--date {
        font-size: 14px;
      }
      &--detail {
        margin-top: calc(50px / @scale);
        margin-bottom: calc(40px / @scale);
      }
      &:not(:last-child) {
        border-bottom: 1px solid #eaebea;
        margin-bottom: calc(40px / @scale);
      }
    }
  }
}

section {
  background-color: #fff;
}
</style>

