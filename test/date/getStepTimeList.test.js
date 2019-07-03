import {generateStepTimeList} from '../../date/getStepTimeList'

test('generateStepTimeList: start testing...', () => {
  expect(generateStepTimeList('08:00', '10:30', '00:30')).toStrictEqual(
      ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30']
  )
})