<template>
  <div id="app">
    <router-view ref="routerView"/>
    <div class="menu" title="操作" @click="isShowModal = true">
      <Icon type="md-menu" size="40" />
    </div>
    <Modal
        v-model="isShowModal"
        footer-hide
    >
        <Row :gutter="16" v-if="isEdit">
          <i-col>
            <Button @click.native="handleToShow">完成</Button>
          </i-col>
        </Row>
        <Row :gutter="16" v-else>
          <i-col span="8">
            <Button @click.native="handleToEdit">编辑</Button>
          </i-col>
          <i-col span="8">
            <Button @click.native="handleToImage">生成图片</Button>
          </i-col>
          <i-col span="8">
            <Button>生成pdf</Button>
          </i-col>
        </Row>
    </Modal>

    <div id="show-canvas" v-if="isShowCanvas">
      <h2>右键保存为图片</h2>
      
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  name: "App",
  data() {
    return {
      isShowModal: false,
      isShowCanvas: false
    };
  },
  computed: {
    isEdit() {
      return this.$route.name === "edit";
    }
  },
  methods: {
    handleToEdit() {
      this.isShowModal = false;
      this.$router.push("/edit");
    },
    handleToShow() {
      this.isShowModal = false;
      this.$router.push("/");
    },
    handleToImage() {
      const wrap = this.$refs.routerView.$el;
      html2canvas(wrap).then(canvas => {
        this.isShowModal = false;
        this.isShowCanvas = true;
        this.$nextTick(() => {
          document.getElementById("show-canvas").appendChild(canvas);
        });
      });
    }
  },
  mounted() {}
};
</script>


<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.menu {
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
}

.single-line {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

#show-canvas {
  margin-top: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 0;
    color: crimson;
    text-align: center;
    padding-top: 5px;
  }
}
</style>
