const receivesAFunction = (fn) => {
  fn();
};
const aDifferentFunction = () => {};
const returnsANamedFunction = () => {
  return aDifferentFunction;
};
const anOtherFunction = () => {};
const returnsAnAnonymousFunction = () => {
  return () => {};
};
