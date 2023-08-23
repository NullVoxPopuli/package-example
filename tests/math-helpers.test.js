import { expect, test } from 'vitest'
import { double } from '@nullvoxpopuli/package-example'

test('that double work', () => {
  expect(double(3)).toBe(6)
})
