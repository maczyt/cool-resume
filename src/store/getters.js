export default {
  interestGetter(state) {
    return Array.from({
      length: Math.ceil(state.interest.length / 3)
    }, (v, i) => state.interest.slice(i * 3, i * 3 + 3))
  },
}
