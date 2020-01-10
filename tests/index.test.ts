import { greet } from '../src'

describe('Index test.', () => {
  test('greet return greeting message.', () => {
    expect(greet('world')).toBe('Hello world!')
  })
})
