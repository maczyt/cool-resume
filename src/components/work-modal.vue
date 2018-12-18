<template>
  <Modal
      draggable
      v-model="isShowModal"
      @on-ok="handleOk"
      @on-cancel="handleCancel"
      :title="modalTitle">
      <Form :label-width="80">
        <FormItem label="职业">
            <Input v-model="formItem.vocation" placeholder="前端工程师" />
        </FormItem>
        <FormItem label="公司">
            <Input v-model="formItem.company" placeholder="Google"/>
        </FormItem>
        <FormItem label="时间">
          <DatePicker v-model="formItem.time" type="daterange" placeholder="Select date" style="width: 200px"></DatePicker>
        </FormItem>
        <FormItem label="简要">
          <Input type="textarea" v-model="formItem.detail" placeholder="介绍工作内容等"/>
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
        vocation: "",
        company: "",
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
    ...mapMutations(["editWork", "addWork"]),
    handleOk() {
      if (this.isEdit) {
        this.editWork({
          work: Object.assign({}, this.formItem),
          index: this.editIndex
        });
      } else {
        this.addWork(Object.assign({}, this.formItem));
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





