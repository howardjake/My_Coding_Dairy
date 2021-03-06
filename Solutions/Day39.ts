// Square Every Digit

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

export class Kata {
    static squareDigits(num: number) {
        let split = num.toString().split('')
        let sqr =[]
        split.forEach((item)=>{
             sqr.push(+item * +item).toString()
        })
        return +sqr.join('');
    }
  }

  console.log(Kata.squareDigits(9119))