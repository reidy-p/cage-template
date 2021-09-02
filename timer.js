exports.handler = () => {
  let start = Date.now();
  console.log("Start: " + start);
  for (let i = 0; i < 100000; i++) {
    // do nothing
    i
  }
  let end = Date.now();
  console.log("End: " + end);

  return {
    done: true
  };
};
