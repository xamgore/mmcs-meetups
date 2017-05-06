const extractAll = (date, now) => {
  let res = { year: 0, month: 0, day: 0, isOutdated: false }

  let matched = /^(\d\d\d?\d?)[.|-](\d\d?)[.|-](\d\d?)$/.exec(date)
  if (!matched) res

  let [_, y, m, d] = matched

  res.day = d = +d
  res.year = y = +y
  res.month = m = +m

  let ny = now.getFullYear(),
      nm = now.getMonth() + 1,
      nd = now.getDate()

  res.isOutdated = (y < ny) || (y === ny && m < nm) || (y === ny && m === nm && d < nd)

  return res
}

export default extractAll
