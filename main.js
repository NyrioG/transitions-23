import { runSequence } from "./shared/sequenceRunner.js";

const emptySequence = [
  "sketches/example-sequence-empty",
  "sketches/example-sequence-empty",
];

const exampleSequence = [
  "sketches/jour-test",
  "sketches/example-sequence-2",
  "sketches/example-sequence-3",
];

runSequence(exampleSequence);
