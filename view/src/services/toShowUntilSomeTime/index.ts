export function toShowUntilSomeTime(setState:any,time: number) {
  setState(true);
  setTimeout(() => {
    setState(false);
  }, time);
};
