import { expect, test } from 'vitest'
import { double } from './math-helpers.js'

test('that double work', () => {
  expect(double(3)).toBe(6)
})
