export const TOOLTIP_MAP = {
  scoping: {
    static: 'A variable always refers to its top level environment',
    dynamic: 'Occurrence of an identifier is searched in the most recent binding, compiler first searches current block and then successively all the calling functions'
  },
  typing: {
    static: 'Types are checked at compile time (verifies and enforces the constraints of types on variables)',
    dynamic: 'At runtime, the language system checks that operands are of suitable types for operators.',
    weakly: 'There are holes in the type system that add flexibility but weaken the guarantee of operations on invalid operands. Does conversions between unrelated types implicitly.',
    weak: 'There are holes in the type system that add flexibility but weaken the guarantee of operations on invalid operands. Does conversions between unrelated types implicitly.',
    strongly: 'Languages checks the type of a variable before performing an operation on it. They require explicit casting and don’t allow implicit conversions.',
    strong: 'Languages checks the type of a variable before performing an operation on it. They require explicit casting and don’t allow implicit conversions.'
  },
  'run-type': {
    compiled: 'When a program, once compiled, is expressed in the instructions of the target machine',
    interpreted: 'anguage where the instructions are not directly executed by the target machine, but instead read and executed by some other program'
  },
  'memory-allocation': {
    static: '',
    dynamic: '',
    automatic: ''
  }
}