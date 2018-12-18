<template>
  <Modal
      draggable
      v-model="isShowModal"
      @on-cancel="handleCancel"
      footer-hide
      title="编辑">
      <Form :label-width="80">

        <Card>
          <FormItem label="兴趣">
              <Select v-model="selects" multiple>
                <Option v-for="(opt, ind) in interestSelect" :key="ind" :value="opt.value">{{opt.name}}</Option>
              </Select>
          </FormItem>
        </Card>
        <br />
      </Form>
  </Modal>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      isShowModal: true,
      selects: []
    };
  },
  props: {
    show: Boolean
  },
  watch: {
    show(value) {
      this.isShowModal = value;
    }
  },
  computed: {
    ...mapState(["interest", "interestSelect"])
  },
  methods: {
    ...mapMutations(["setInterest"]),
    handleCancel() {
      const interest = this.selects.map(item => ({
        label: this.handleGetLabel(item),
        icon: item
      }));
      this.setInterest(interest);
      this.$emit("close");
    },
    handleGetLabel(icon) {
      let label = "";
      for (let item of this.interestSelect) {
        if (item.value === icon) {
          label = item.name;
          break;
        }
      }
      return label;
    }
  },
  created() {
    this.isShowModal = this.show;
    this.selects = this.interest.map(item => item.icon);
    // console.log(this.interest);
  }
};
</script>