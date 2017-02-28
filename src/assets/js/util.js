export function transferDate(timestamp) {
  let time = new Date(timestamp)
  let y = time.getFullYear()
  let m = time.getMonth() + 1
  let d = time.getDate()
  return y + '-' + add0(m) + '-' + add0(d)
}

function add0(m) {
  return m < 10 ? '0' + m : m
}
