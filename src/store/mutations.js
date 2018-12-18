export default {
  setAvatar(state, url) {
    state.avatarUrl = url;
  },

  /**
   * 工作经历
   */
  addWork(state, work) {
    state.work.unshift(work);
  },
  removeWork(state, index) {
    state.work.splice(index, 1);
  },
  editWork(state, {
    index,
    work
  }) {
    state.work.splice(index, 1, work);
  },

  /**
   * 教育经历
   */
  addEducation(state, item) {
    state.education.unshift(item);
  },
  removeEducation(state, index) {
    state.education.splice(index, 1);
  },
  editEducation(state, {
    index,
    item
  }) {
    state.education.splice(index, 1, item);
  },

  /**
   * 联系模块
   */
  addContact(state) {
    state.contact.push({});
  },

  removeContact(state, index) {
    state.contact.splice(index, 1);
  },

  /**
   * 兴趣模块
   */
  setInterest(state, interest) {
    state.interest = interest;
  },

  /**
   * 技能模块
   */
  addSkill(state) {
    state.skill.push({});
  },

  removeSkill(state, index) {
    state.skill.splice(index, 1);
  }
}
