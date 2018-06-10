export const TOOLTIP_MAP = {
  scoping: {
    static: 'In static scoping the compiler first searches in the current block, then in the surrounding blocks successively and finally in the global variables.',
    dynamic: 'In dynamic scoping the compiler first searches the current block and then successively all the calling functions.'
  },
  typing: {
    static: 'Every variable name is bound to both an object and a type (at compile time via a data declaration).',
    dynamic: 'Every variable name is bound only to an object (unless its null).',
    weakly: 'Variables can be implicitly coerced to unrelated types. e.g. int x = 5.0 is legal',
    weak: 'Variables can be implicitly coerced to unrelated types. e.g. int x = 5.0 is legal',
    strongly: 'Type conversions must be explicit, e.g. in Python: print(str(4))',
    strong: 'Type conversions must be explicit, e.g. in Python: print(str(4))',
  },
  'run-type': {
    compiled: 'Code is stored as a binary as instructions the CPU can directly execute.',
    interpreted: 'Code is stored as source and must be translated to machine code by interpreter at runtime.'
  },
  'memory-allocation': {
    static: '',
    dynamic: '',
    automatic: ''
  }
}