import { CharacterLinkedList, CharacterNode, coinToss, questions, scores } from '../linked'
import 'jest-extended'
const stringify = (obj, message = '') => console.log(message + ' =>', JSON.stringify(obj, null, 2))

let firstCharacter, secondCharacter, thirdCharacter, fourthCharacter, fifthCharacter, sixthCharacter

// reset the values after each test
beforeEach(() => {
  firstCharacter = new CharacterNode('amy', 10)
  secondCharacter = new CharacterNode('james', 2)
  thirdCharacter = new CharacterNode('charlie', 20)
  fourthCharacter = new CharacterNode('ben', 5)
  fifthCharacter = new CharacterNode('jenny', 5)
  sixthCharacter = new CharacterNode('tammie', 5)
})


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
      expect(dummyList.size).toBeNumber()
    })

    test('should have an add character method', () => {
      expect(dummyList.addCharacter).toBeFunction()
    })

    test('should have a print characters method', () => {
      expect(dummyList.printCharacters).toBeFunction()
    })

    test('should have a usedScores attribute, type Map', () => {
      expect(dummyList.usedScores).toBeDefined()
      // expect(typeof dummyList.usedScores).toBe('Map')
    })
    
  })

  describe('Add Character to list functionality', () => {
    const emptyList = new CharacterLinkedList()
    test('if empty list, input character should become head', () => {
      emptyList.addCharacter(firstCharacter)
      expect(emptyList.head).toEqual(firstCharacter)
    })
    
    test('size attribute should increase when a character is added to empty list', () => {
      const formerSize = dummyList.size
      
      dummyList.addCharacter(firstCharacter)
      
      const newSize = dummyList.size
    
      expect(newSize).toEqual(formerSize + 1)
    })

    test.todo('add should check if value is present on usedScores')

    // test('should add score to usedScores Map', () => {
    //   expect(emptyList.usedScores.has(firstCharacter.score)).toBe(true)
    // })
    
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
      
      test.todo('should print list of 3 characters in the expected order'/*, () => {
        const characters  = size3TestList.printCharacters()
        expect(characters).toBeArrayOfSize(3)
        expect(characters).toEqual(['james', 'amy', 'charlie'])
      }*/)
    })
    
    describe('handling entries with matching scores', () => {
      const matchingScoresTestList = new CharacterLinkedList()
      
      // test.todo('should run coin toss function if scores are identical')

      test('should update the name value from a string to an array of strings', () => {
        matchingScoresTestList.addCharacter(fourthCharacter)
        matchingScoresTestList.addCharacter(fifthCharacter)
        
        console.log(matchingScoresTestList.head.name)
        expect(matchingScoresTestList.head.name).toBeArray()     
      })

      test('should contain expected string inputs in array', () => {
        
        expect(matchingScoresTestList.head.name).toIncludeAllMembers([fourthCharacter.name, fifthCharacter.name])
      })
      
      test('should prevent nested arrays', () => {
        matchingScoresTestList.addCharacter(sixthCharacter)

        expect(matchingScoresTestList.head.name).toBeArrayOfSize(3)
      })
      
      
      test('should update size count despite matching scores', () => {
        expect(matchingScoresTestList.size).toBe(3)
      })



      // test('should handle multiple matching scores in sequence', () => {
      //   matchingScoresTestList.addCharacter(sixthCharacter)
      //   console.log(matchingScoresTestList)
      //   expect(matchingScoresTestList.size).toBe(3)
      //   expect(matchingScoresTestList.printCharacters()).toHaveLength(3)

      // })

      
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
      printTestList.addCharacter(sixthCharacter)
      console.log(printTestList.head)
      const characters = printTestList.printCharacters()
      expect(characters[0]).toMatch(printTestList.head.name)
    })
    
    test('length of printed characters array should equal List size attribute', () => {
      const characters = printTestList.printCharacters()
      console.log('characters', characters)
      expect(characters).toHaveLength(printTestList.size)
    })
  })
  
  
  
})

describe('Coin Toss function', () => {
  test('should return either 1 or -1', () => {
    const valA = 'A'
    const valB = 'B'
    const isValAOrB = value => value === valA || value === valB
    const result = coinToss(valA, valB)

    expect(result).toSatisfy(isValAOrB)
  })

})

describe ('Score object', () => {

  test('should be an object', () => {
    expect(scores).toBeObject()
  })

  test('object values are all numbers', () => {
    const isNumber = val => typeof val === 'number'
    expect(Object.values(scores)).toSatisfyAll(isNumber)
  })
})

describe('Questions', () => {
  test('should be an object', () => {
    expect(questions).toBeObject()
  })
  
  test('all values should be arrays', () => {
    Object.values(questions).forEach(question => {
      expect(question).toBeArray()
    })
  })

  test('each value should have a string at position 0', () => {
    Object.values(questions).forEach(question => {
      expect(question[0]).toBeString()
    })
  })
  
  
})















