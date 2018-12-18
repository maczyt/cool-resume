<template>
  <Modal
      draggable
      v-model="isShowModal"
      @on-ok="handleOk"
      @on-cancel="handleCancel"
      :title="modalTitle">
      <Form :label-width="80">
        <FormItem label="专业">
            <Input v-model="formItem.profession" placeholder="软件工程" />
        </FormItem>
        <FormItem label="学校">
            <Input v-model="formItem.school" placeholder="浙大"/>
        </FormItem>
        <FormItem label="时间">
          <DatePicker v-model="formItem.time" type="daterange" placeholder="Select date" style="width: 200px"></DatePicker>
        </FormItem>
        <FormItem label="简要">
          <Input type="textarea" v-model="formItem.detail" placeholder="介绍学生经历等"/>
        </FormItem>
      </Form>
  </Modal>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      formItem: {
        profession: "",
        school: "",
        time: [new Date(), new Date()],
        detail: ""
      },
      editIndex: -1,
      isShowModal: true
    };
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    show: Boolean
  },
  watch: {
    show(value) {
      this.isShowModal = value;
    }
  },
  computed: {
    modalTitle() {
      return this.isEdit ? "编辑" : "添加";
    }
  },
  methods: {
    ...mapMutations(["editEducation", "addEducation"]),
    handleOk() {
      if (this.isEdit) {
        this.editEducation({
          item: Object.assign({}, this.formItem),
          index: this.editIndex
        });
      } else {
        this.addEducation(Object.assign({}, this.formItem));
      }
      this.$emit("close");
    },
    handleCancel() {
      this.$emit("close");
    },
    getEditItem(item, index) {
      Object.assign(this.formItem, item);
      this.editIndex = index;
    }
  },
  created() {
    this.isShowModal = this.show;
  }
};
</script>





