import { CharacterLinkedList, CharacterNode } from './linked'

const firstCharacter = new CharacterNode('amy', 10)
const secondCharacter = new CharacterNode('james', 2)
const thirdCharacter = new CharacterNode('charlie', 20)



test('character has name', () => {
  expect(firstCharacter.name).toEqual('amy')
})

test('character has score', () => {
  expect(firstCharacter.score).toEqual(10)
})

test('character score should be number type', () => {

  expect(typeof firstCharacter.score).toEqual('number')
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
  emptyList.addCharacter(firstCharacter)
  expect(emptyList.head).toEqual(firstCharacter)
})

test('size attribute should increase when a character is added to empty list', () => {
  const formerSize = dummyList.size
  
  dummyList.addCharacter(firstCharacter)
  
  const newSize = dummyList.size

  expect(newSize).toEqual(formerSize + 1)
})

test('has attribute, print characters', () => {
  expect(dummyList.printCharacters).toBeDefined()
})

test('print function returns an array', () => {
  expect(typeof dummyList.printCharacters()).toEqual('object')
})

test('returns empty array if list is empty', () => {
  const emptyList = new CharacterLinkedList()
  const characters = emptyList.printCharacters()
  expect(emptyList.head).toEqual(null)
  expect(characters).toEqual([])
})

test('first element of printed characters array is same as the list head\'s name value', () => {
  const characters = dummyList.printCharacters()
  console.log(characters)
  expect(characters[0]).toEqual(dummyList.head.name)
})

test('length of printed characters array equals List size attribute', () => {
  const characters = dummyList.printCharacters()
  expect(characters.length).toEqual(dummyList.size)
})




const prependTestList = new CharacterLinkedList()

test('if character score is less than head, prepend', () => {
  prependTestList.addCharacter(firstCharacter)
  prependTestList.addCharacter(secondCharacter)
  expect(prependTestList.head).toEqual(secondCharacter)
  expect(prependTestList.next).toEqual(firstCharacter)
})

test('should increase size attribute when character is prepended', () => {
  expect(prependTestList.size).toEqual(2)
})

const appendTestList = new CharacterLinkedList()

test('if character score is greater than head, append', () => {
  appendTestList.addCharacter(firstCharacter)
  appendTestList.addCharacter(thirdCharacter)
  expect(appendTestList.head).toEqual(firstCharacter)
  expect(appendTestList.next).toEqual(thirdCharacter)
})

test('should increase size attribute when character is appended', () => {
  expect(appendTestList.size).toEqual(2)
})

const size3TestList = new CharacterLinkedList()

test('should append and prepend head', () => {
  size3TestList.addCharacter(firstCharacter)
  size3TestList.addCharacter(secondCharacter)
  size3TestList.addCharacter(thirdCharacter)
  expect(size3TestList.head).toEqual(firstCharacter)
})






