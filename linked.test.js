import { CharacterLinkedList, CharacterNode, coinToss } from './linked'

const stringify = (obj, message = '') => console.log(message + ' =>', JSON.stringify(obj, null, 2))

const firstCharacter = new CharacterNode('amy', 10)
const secondCharacter = new CharacterNode('james', 2)
const thirdCharacter = new CharacterNode('charlie', 20)

describe('Character Nodes', () => {
  test('should be an instance of the CharacterNode class', () => {
    expect(firstCharacter).toBeInstanceOf(CharacterNode)
  })
  test('should have a \'name\' attribute', () => {
    expect(firstCharacter.name).toMatch('amy')
  })

  test('should have a \'score\' attribute', () => {
    expect(firstCharacter.score).toEqual(10)
  })

  test('score attribute should be type - number', () => {
    expect(typeof firstCharacter.score).toEqual('number')
  })

  test.todo('add should throw error when score attribute type is not \'number\'')

  test('should have an attribute \'next\', with the value null', () => {
    expect(firstCharacter.next).toBeNull()
  })

})

describe('Character List', () => {
  const dummyList = new CharacterLinkedList()
  describe('Initialisation', () => {

    test('should be an instance of the CharacterLinkedList class', () => {
      expect(dummyList).toBeInstanceOf(CharacterLinkedList)
    })

    test('should have initial head attribute value of null', () => {
      expect(dummyList.head).toBeNull()
    })
    
    
    test('should have size attribute', () => {
      expect(typeof dummyList.size).toBe('number')
    })

    test('should have an add character method', () => {
      expect(dummyList.addCharacter).toBeDefined()
    })

    test('should have a print characters method', () => {
      expect(dummyList.printCharacters).toBeDefined()
    })
  })

  describe('Add Character to list functionality', () => {
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

    describe('Prepend Character to list', () => {
      const prependTestList = new CharacterLinkedList()

      test('if character score is less than head, prepend', () => {
        prependTestList.addCharacter(firstCharacter)
        prependTestList.addCharacter(secondCharacter)
        expect(prependTestList.head).toEqual(secondCharacter)
        expect(prependTestList.head.next).toEqual(firstCharacter)
      })

      test('should increase size attribute when character is prepended', () => {
        expect(prependTestList.size).toEqual(2)
      })
    })

    describe('appending character to list', () => {
      const appendTestList = new CharacterLinkedList()

      test('if character score is greater than head, append', () => {
        appendTestList.addCharacter(firstCharacter)
        appendTestList.addCharacter(thirdCharacter)
        expect(appendTestList.head).toEqual(firstCharacter)
        expect(appendTestList.head.next).toEqual(thirdCharacter)
      })

      test('should increase size attribute when character is appended', () => {
        expect(appendTestList.size).toEqual(2)
      })

    })
    
    describe('adding multiple characters to list', () => {
      const size3TestList = new CharacterLinkedList()
      test('should append and prepend head', () => {
        size3TestList.addCharacter(firstCharacter)
        size3TestList.addCharacter(secondCharacter)
        size3TestList.addCharacter(thirdCharacter)
      
        expect(size3TestList.head).toEqual(secondCharacter)
        expect(size3TestList.head.next).toEqual(firstCharacter)
        expect(size3TestList.head.next.next).toEqual(thirdCharacter)
      })
      
      test('should print list of 3 characters in the expected order', () => {
        const characters  = size3TestList.printCharacters()
        expect(characters).toEqual(['james', 'amy', 'charlie'])
      })
    })
    
    
  })

  describe('Print Character list functionality', () => {
  
    const printTestList = new CharacterLinkedList()

    test('should return an array when called', () => {
      expect(typeof printTestList.printCharacters()).toEqual('object')
    })
    
    test('should return null if list is empty', () => {
      const printTestList = new CharacterLinkedList()
      const characters = printTestList.printCharacters()
      expect(printTestList.head).toEqual(null)
      expect(characters).toBeNull()
    })
    
    test('for a non-zero list, the first element of printed characters array should be the same as the list head\'s name value', () => {
      printTestList.addCharacter(firstCharacter)
      const characters = printTestList.printCharacters()
      expect(characters[0]).toMatch(printTestList.head.name)
    })
    
    test('length of printed characters array should equal List size attribute', () => {
      const characters = printTestList.printCharacters()
      console.log('characters', characters)
      expect(characters.length).toEqual(printTestList.size)
    })
  })
  
  
  
})

describe('Coin Toss function', () => {
  test('should return a number', () => {
    expect(typeof coinToss()).toBe('number')
  })
  
  test('should return either 1 or -1', () => {
    expect(coinToss()).toEqual(1 || -1)
  })
})

















