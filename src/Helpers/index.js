export const debounce = (cb, delay = 1000) => {
  let timeout;

  return (...args) => {
    console.log("debounce");

    console.log("delay:", delay);
    console.log("timeout:", timeout);

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      console.log("call callback:", args);
      cb(...args);
    }, delay);
    console.log("timeout2:", timeout);
  };
};
