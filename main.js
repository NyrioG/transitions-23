import { runSequence } from "./shared/sequenceRunner.js";

const emptySequence = [
  "sketches/example-sequence-empty",
  "sketches/example-sequence-empty",
];

const exampleSequence = [
  "sketches/jour-1",
  "sketches/jour-2",
  "sketches/jour-3",
  "sketches/jour-4",
];

runSequence(exampleSequence);
