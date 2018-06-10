export const TOOLTIP_MAP = {
  scoping: {
    static: 'Compiler first searches in the current block, then in the surrounding blocks successively and finally in the global variables.',
    dynamic: 'Compiler first searches the current block and then successively all the calling functions.'
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
    static: 'Allocation of memory at compile time; allocated on stack.',
    dynamic: 'Allocation of memory at runtime, usually via calls like calloc() and malloc(); allocated in heap.',
    automatic: 'Allocation of memory on entrance of a new scope (e.g. function, loop body, etc.); allocated on stack.'
  },
  'evaluation-strategy': {
    strict: 'An expression is evluated as soon as it is bound to a variable (or function argument)',
    eager: 'An expression is evluated as soon as it is bound to a variable (or function argument)',
    greedy: 'An expression is evluated as soon as it is bound to a variable (or function argument)',
    lazy: 'An expression passed as a function parameter is only evaluated when it is accessed/read in the function.',
    'call-by-name': 'Argument expression substituted directly into the function; evaluated as many times as it appears in function',
    'call-by-need': 'Memoized variant of call-by-name; if argument evaluated once, value is stored for subsequent uses.',
    'call-by-value': 'Creates new copies of the function arguments to pass into function.',
    'call-by-reference': 'Passes the location/address/reference of the arguments rather than a new copy.'
  }
}