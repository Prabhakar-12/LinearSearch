function FibonnaciSeries(n) {
      let fibSeries = [0, 1];
      for (let i = 2; i < n; i++) {
            fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
      }
      console.log(fibSeries[0]);
      return fibSeries;
}
console.log(FibonnaciSeries(-10));
// console.log(fibSeries[0]);
function fibonociSeries1(number) {
      let fibonciArray = [0, 1];
      for (let i = 2; i < number; i++) {
            fibonciArray[i] = fibonciArray[i - 1] + fibonciArray[i - 2];
      }
      return fibonciArray;
}
console.log(fibonociSeries1(10));
function fibonnacifun(n) {
      let array = [0, 1];
      for (let i = 2; i <= n; i++) {
            array[i] = array[i - 1] + array[i - 2];
      }
      return array;
}
console.log(fibonnacifun(4));
