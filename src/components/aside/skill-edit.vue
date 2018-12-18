<template>
  <Modal
      draggable
      v-model="isShowModal"
      @on-cancel="handleCancel"
      footer-hide
      title="编辑">
      <Form :label-width="80">
        <Card v-for="(item, index) in skill" :key="index">
          <FormItem label="技能点">
              <Input v-model="item.label" />
          </FormItem>
          <FormItem label="值(百分数)">
              <Input v-model="item.value" />
          </FormItem>
          <Button @click.native="handleRemove(index)" type="error" v-if="skill.length > 1">
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
    ...mapState(["skill"])
  },
  methods: {
    ...mapMutations(["addSkill", "removeSkill"]),
    handleCancel() {
      this.$emit("close");
    },
    handleAdd() {
      this.addSkill();
    },
    handleRemove(index) {
      this.removeSkill(index);
    }
  },
  created() {
    this.isShowModal = this.show;
  }
};
</script>