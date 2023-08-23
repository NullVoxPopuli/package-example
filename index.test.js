import { expect, test } from 'vitest'
import { double } from './index'

test('that double work', () => {
  expect(double(3)).toBe(6)
})
