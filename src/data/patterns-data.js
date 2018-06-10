export const LANGUAGE_TYPES = {
  IMPERATIVE: 'IMPERATIVE',
  FUNCTIONAL: 'FUNCTIONAL',
  LOGICAL: 'LOGICAL'
}

const languages = [
  {
    name: 'OCaml',
    type: 'functional',
    axes: {
      'Scoping': 'static',
      'Typing': 'weak',
      'Memory Allocation': 'lit',
      'Memory Management': 'lit',
      'Run Type': 'compiled',
      'Evaluation Type': 'hi',
      'Concurrency / Parallelism': 'lit'
    },
    notes: [
      
    ]
  },
  {
    name: 'Java',
    type: 'imperative',
    axes: {
      'Scoping': 'static',
      'Typing': 'weak',
      'Memory Allocation': 'lit',
      'Memory Management': 'lit',
      'Run Type': 'compiled',
      'Evaluation Type': 'hi',
      'Concurrency / Parallelism': 'lit'
    },
    notes: [
      
    ]
  },
  {
    name: 'Prolog',
    type: 'logical',
    axes: {
      'Scoping': 'static',
      'Typing': 'weak',
      'Memory Allocation': 'lit',
      'Memory Management': 'lit',
      'Run Type': 'compiled',
      'Evaluation Type': 'hi',
      'Concurrency / Parallelism': 'lit'
    },
    notes: [
      
    ]
  },
  {
    name: 'Scheme',
    type: 'functional',
    axes: {
      'Scoping': 'static',
      'Typing': 'weak',
      'Memory Allocation': 'lit',
      'Memory Management': 'lit',
      'Run Type': 'compiled',
      'Evaluation Type': 'hi',
      'Concurrency / Parallelism': 'lit'
    },
    notes: [
      
    ]
  },
  {
    name: 'Python',
    type: 'imperative',
    axes: {
      'Scoping': 'static',
      'Typing': 'weak',
      'Memory Allocation': 'lit',
      'Memory Management': 'lit',
      'Run Type': 'compiled',
      'Evaluation Type': 'hi',
      'Concurrency / Parallelism': 'lit'
    },
    notes: [
      
    ]
  }
]

// Add code sample images to each pattern object
languages.forEach(language => {
  const languageName = language.name.toLowerCase().split(' ').join('-');

  try {
    language.codeSample = require(`../code-samples/${languageName}-code-sample`);
  } catch(e) {
    // console.log(`Failed to require ../code-samples/${patternName}-code-sample.png`);
  }
})

export default languages;
