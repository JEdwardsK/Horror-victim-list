import { CharacterNode } from './linked'


test('should be able to create a character', () => {
  const testChar = new CharacterNode('testChar')
  expect(testChar.name).toBe('testChar')
})
