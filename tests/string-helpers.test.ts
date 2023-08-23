import { expect, test } from 'vitest'
import { exclaim } from '@nullvoxpopuli/package-example/string-helpers'

test('adds !!"', () => {
  expect(exclaim('Hello there')).toBe('Hello there!!!')
})
