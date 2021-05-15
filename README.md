# This is my coding challenge diary

## As a coder it can be easy to fall into the same old tricks but having a daily practice can make you more flexible and smarter.  If you can code everyday you are bound to become a master. Follow the daily challenges I am trying each day here. Feel free to copy this README and do them with me. 
## I will be tracking my coding challenge solutions here day by day. Obiviously there are many ways to solve these challenges, so don't just accept my solutions as the best solution. If you have better solution I'd love to know. 
## My email is howardjake9512@gmail.com
(https://www.freecodecamp.org/ is my main source but I may branch out if need be) 

![code cat](./img/codecat.gif)

# Day 1 (FreeCodeCamp)

## 100 doors
### There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

### Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.

Expected ouput at 100 doors.
```
[ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]
```
Language I used: (Javascript)
# Day 2 (FreeCodeCamp)

## Find the Symmetric Difference
### The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

### Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

### Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

![Day2Exepected](./img/Day2Expectations.PNG)

Language I used: (Javascript)
# Day 3 (Codewars)

## Sum of Digits / Digital Root 

### Digital root is the recursive sum of all the digits in a number.

### Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.


Example:
```
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
```

Language I used: (Javascript)
# Day 4 (FreeCodeCamp)

## Pairwise
### Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

### You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

### For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

### Index	0	1	2	3	4
### Value	7	9	11	13	15
### Below we'll take their corresponding indices and add them.
Expected output
### 7 + 13 = 20 → Indices 0 + 3 = 3
### 9 + 11 = 20 → Indices 1 + 2 = 3
### 3 + 3 = 6 → Return 6
### pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
### pairwise([1, 3, 2, 4], 4) should return 1.
### pairwise([1, 1, 1], 2) should return 1.
### pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
### pairwise([], 100) should return 0.

Language I used: (Javascript)