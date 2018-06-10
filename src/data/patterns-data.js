export const LANGUAGE_TYPES = {
  IMPERATIVE: "IMPERATIVE",
  FUNCTIONAL: "FUNCTIONAL",
  LOGICAL: "LOGICAL"
};

const languages = [
  {
    name: "OCaml",
    type: "functional",
    axes: {
      Scoping: "static",
      Typing: "strong and static",
      "Memory Allocation":
        "runtime uses heap from OS to hold heap blocks which it fills up in response to allocation requests from program",
      "Memory Management":
        "uses Stop and Copy (removes fragmentation in memory) and Mark and Sweep (marks unreferenced areas in memory and frees them up)",
      "Run Type": "compiled",
      "Evaluation Type": "strict",
      "Concurrency / Parallelism": "None"
    },
    notes: []
  },
  {
    name: "Java",
    type: "imperative",
    axes: {
      Scoping: "static",
      Typing: "weak",
      "Memory Allocation": "lit",
      "Memory Management": "lit",
      "Run Type": "compiled",
      "Evaluation Type": "hi",
      "Concurrency / Parallelism": "lit"
    },
    notes: []
  },
  {
    name: "Prolog",
    type: "logical",
    axes: {
      Scoping: "neither static nor dynamic",
      Typing: "weak and dynamic",
      "Memory Allocation": "static",
      "Memory Management":
        "GNU Prolog lacks garbage collection for both the heap and for atoms",
      "Run Type": "compiled and interpreted",
      "Evaluation Type": "lazy",
      "Concurrency / Parallelism": "none"
    },
    notes: []
  },
  {
    name: "Scheme",
    type: "functional",
    axes: {
      Scoping: "static",
      Typing: "weak",
      "Memory Allocation": "lit",
      "Memory Management": "lit",
      "Run Type": "compiled",
      "Evaluation Type": "hi",
      "Concurrency / Parallelism": "lit"
    },
    notes: []
  },
  {
    name: "Python",
    type: "imperative",
    axes: {
      Scoping: "static",
      Typing: "Dynamic & Strong",
      "Memory Allocation": "Memory management in Python involves a private heap containing all Python objects and data structures",
      "Memory Management": "Uses heap, Static Memory Allocation",
      "Run Type": "Interpreted",
      "Evaluation Type": "Lazy",
      "Concurrency / Parallelism": "Asynchronous"
    },
    notes: []
  }
];

// Add code sample images to each pattern object
languages.forEach(language => {
  const languageName = language.name
    .toLowerCase()
    .split(" ")
    .join("-");

  try {
    language.codeSample = require(`../code-samples/${languageName}-code-sample`);
  } catch (e) {
    // console.log(`Failed to require ../code-samples/${patternName}-code-sample.png`);
  }
});

export default languages;
