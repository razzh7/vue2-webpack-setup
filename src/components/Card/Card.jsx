export default {
  name: 'XDanceCard',
  render() {
    const { $slots } = this
    return <div class="card">{$slots.default ? $slots.default : 'cards的内容'}</div>
  },
}
