<template>
  <Modal
      draggable
      v-model="isShowModal"
      @on-cancel="handleCancel"
      footer-hide
      title="编辑">
      <Form :label-width="80">
        <Card v-for="(item, index) in contact" :key="index">
          <FormItem label="类目">
              <Select v-model="item.icon">
                <Option v-for="(opt, ind) in contactSelect" :key="ind" :value="opt.value">{{opt.name}}</Option>
              </Select>
          </FormItem>
          <FormItem label="值">
              <Input v-model="item.value" />
          </FormItem>
          <Button @click.native="handleRemove(index)" type="error" v-if="contact.length > 1">
            <Icon type="md-trash" />
          </Button>
        </Card>
        <br />
        <Button long @click.native="handleAdd">+</Button>
      </Form>
  </Modal>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      formItem: {
        vocation: "",
        company: "",
        time: [],
        detail: ""
      },
      isShowModal: true
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
    ...mapState(["contact", "contactSelect"])
  },
  methods: {
    ...mapMutations(["addContact", "removeContact"]),
    handleCancel() {
      this.$emit("close");
    },
    handleAdd() {
      this.addContact();
    },
    handleRemove(index) {
      this.removeContact(index);
    }
  },
  created() {
    this.isShowModal = this.show;
  }
};
</script>