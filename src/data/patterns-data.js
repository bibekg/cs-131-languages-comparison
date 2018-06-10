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
      Scoping: "Static",
      Typing: "Strong and static",
      "Memory Allocation":
        "Runtime uses heap from OS to hold heap blocks which it fills up in response to allocation requests from program",
      "Memory Management":
        "Uses Stop and Copy (removes fragmentation in memory) and Mark and Sweep (marks unreferenced areas in memory and frees them up)",
      "Run Type": "Compiled",
      "Evaluation Strategy": "Strict",
      "Concurrency / Parallelism": "None"
    },
    notes: []
  },
  {
    name: "Java",
    type: "imperative",
    axes: {
      Scoping: "Static",
      Typing: "Weak",
      "Memory Allocation": "Dynamic only; everything allocated on the heap",
      "Memory Management": "Automatic via garbage collection",
      "Run Type": "Compiled",
      "Evaluation Strategy": "Strict and call-by-value",
      "Concurrency / Parallelism": "lit"
    },
    notes: []
  },
  {
    name: "Prolog",
    type: "logical",
    axes: {
      Scoping: "Neither static nor dynamic",
      Typing: "Weak and dynamic",
      "Memory Allocation": "Static",
      "Memory Management":
        "GNU Prolog lacks garbage collection for both the heap and for atoms",
      "Run Type": "Compiled and interpreted",
      "Evaluation Strategy": "Lazy",
      "Concurrency / Parallelism": "None"
    },
    notes: []
  },
  {
    name: "Scheme",
    type: "functional",
    axes: {
      Scoping: "Static",
      Typing: "Weak/dynamic",
      "Memory Allocation": "Stack for recursive procedure calls. Heap for dynamically allocated stuff.",
      "Memory Management": "Garbage Collector",
      "Run Type": "Interpreted / compiled",
      "Evaluation Strategy": "Partially lazy evaluation using keyword delay",
      "Concurrency / Parallelism": "Multi-threaded and supports parallelism"
    },
    notes: []
  },
  {
    name: "Python",
    type: "imperative",
    axes: {
      Scoping: "Static",
      Typing: "Dynamic & strong",
      "Memory Allocation": "Memory management in Python involves a private heap containing all Python objects and data structures",
      "Memory Management": "Uses heap, Static Memory Allocation",
      "Run Type": "Interpreted",
      "Evaluation Strategy": "Lazy",
      "Concurrency / Parallelism": "Single-threaded, asynchronous concurrency using an event loop (asyncio)"
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
