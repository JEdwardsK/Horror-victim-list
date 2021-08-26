import { CharacterLinkedList, CharacterNode } from './linked'

const dummyCharacter = new CharacterNode('amy', 10)

test('character has name', () => {
  expect(dummyCharacter.name).toEqual('amy')
})

test('character has score', () => {
  expect(dummyCharacter.score).toEqual(10)
})

test('character score should be number type', () => {

  expect(typeof dummyCharacter.score).toEqual('number')
})


const dummyList = new CharacterLinkedList()

test('should have head attribute', () => {
  expect(dummyList.head).toBeDefined()
})

test('should have next attribute', () => {
  expect(dummyList.next).toBeDefined()
})

test('should have size attribute', () => {
  expect(typeof dummyList.size).toBe('number')
})


test('should have an add character function', () => {
  expect(dummyList.addCharacter).toBeDefined()
})

test('if empty list, input character should become head', () => {
  const emptyList = new CharacterLinkedList()
  emptyList.addCharacter(dummyCharacter)
  expect(emptyList.head).toEqual(dummyCharacter)
})

test('size attribute should increase when a character is added', () => {
  console.log(dummyList)
  const formerSize = dummyList.size
  console.log(formerSize)
  dummyList.addCharacter(dummyCharacter)
  console.log(dummyList)
  const newSize = dummyList.size
  console.log(newSize)
  expect(newSize).toEqual(formerSize + 1)
})


test('if character score is less than head, prepend', () => {
  const secondCharacter = new CharacterNode('james', 2)
  dummyList.addCharacter(secondCharacter)
  expect(dummyList.size).toEqual(2)
})





