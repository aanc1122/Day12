function sumFibonacci(num) {
        var sum = 0;
        function fib(e) {
          if(e === 1){
            return 1;
          }else if (e < 1) {
             return 0;
           } else { 
            return fib(e - 1) + fib(e - 2);
          }
        
        };
        for(let i = 0; fib(i) <= num; i++) {	
          if((fib(i) + 1) % 2 == 0) {
            sum += fib(i);
          }					
        }
        return sum;			
      }


console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;