import dayjs from 'dayjs';

export const CommonMixin = {
  methods: {
    dayjs(date) {
      try {
        return dayjs(date);
      } catch (e) {
        return dayjs();
      }
    }
  }
}
