/**
 * 将 hh:mm 的时间格式转为分钟
 * @param time e.g. 08：30
 */
function timeToMinutes(time) {
  const timeArr = time.split(':')
  return timeArr[0] * 60 + timeArr[1] * 1
}

/**
 * 补零，将 h:m 格式转为 hh:mm
 * @param num
 */
function zeroFill(num) {
  if (num >= 10) {
    return num
  }
  return '0' + num
}

/**
 * 获取带有间隔的时间数组
 * @param start 开始时间 e.g. 08:30
 * @param end 结束时间 e.g. 21：30
 * @param step 步长 e.g. 00：30
 */
export function generateStepTimeList(start, end, step) {
  let startMinutes = timeToMinutes(start)
  let endMinutes = timeToMinutes(end)
  let stepMinutes = timeToMinutes(step)
  let length = (endMinutes - startMinutes) / stepMinutes + 1
  let ret = [], t, stepTime
  for (let i = 0; i < length; i++) {
    t = startMinutes + i * stepMinutes
    stepTime = zeroFill(Math.floor(t / 60)) + ':' + zeroFill(t % 60)
    ret.push(stepTime)
  }
  return ret
}



