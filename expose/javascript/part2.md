1. The value of i which is 3 is printed. The loop runs 3 times because of the 3 value in the prices array and also because of the condition i < prices.length & i++. 

2. The value of discountedPrice which is 150 is printed. This is because the code loops through all the items in the prices array and returns the final value of discountedPrice. We get this by discounting 300 by 50%.

3. The value of finalPrice which is 150 is printed. This is because it returns the final price for the final item in the Prices array.

4. The function discountPrices doesn't print anything but returns an arrray called discounted with the values [50, 100, 150]. These are the discounted values of 50% from the original prices array.

5. ReferenceError: i variable has the let keyword before it meaning it can only be used within the loop. console.log(i) is outside the scope of the loop and so the code will produce an error.

6. ReferenceError: discountedPrice variable has the let keyword before it meaning it can only be used within the loop. console.log(discountedPrice) is outside the scope of the loop and so the code will produce an error.

7. The value of finalPrice which is 150 is printed. The finalPrices variable can be used outside the loop since it doesn't have a keyword like let or const before it. 

8. The discounted array [50, 100, 150] will be returned. Even though discounted has let before it, it is returned within the same block of code discountPrices and so there will be no error.

9. ReferenceError: i variable has the let keyword before it meaning it can only be used within the loop. console.log(i) is outside the scope of the loop and so the code will produce an error.

10. The value of length which is 3 is printed. This is because length is equal to the size of the prices array [100, 200, 300] which is 3.

11. The discounted array [50, 100, 150] will be returned as the print statements are commented out and so will not effect the code in anyway. 
12. 
   A)student.name
   B)student['Grad Year']
   C)student.greeting()
   D)student['Favorite Teacher'].name
   E)student.courseLoad[0]

13.   
    a) 32 - 2 gets converted to a string and then + concatenates it with 3.
    b) 1 - '3' gets converted to a number due to minus sign and then 2 gets subtracted from it.
    c) 3 - null is 0.
    d) '3null' - null gets converted to a string due to + band gets concacatenated to 3.
    e) 4 - true evaluates to 1 and gets added to 3.
    f) 0 - false evaluates to 0 and null also evaluates to 0.
    g) 3undefined - undefined convertes to a string due to +.
    h) NaN - minusing NaN and a number results in something other than a nuber in JS.

14. 
  a)True - 2 gets converted to an int and 2 is greater than 1.
  b)False - comparison is done lexicographically (like dictionary order) and not numerically; '2' is considered greater than '1', which is the first character of '12'.
  c)True - uses loose equality (==), which performs type coercion; thus, the string '2' is coerced to the number 2, making the values equal.
  d)False - uses strict equality (===), which checks both value and type without type coercion; since the types are different (number and string), the result is false.
  e)False - true is coerced to 1 (not 2), so true is not equal to 2.
  f)True - both are the same type (boolean) and value (true), strict equality (===) returns true.

15. **(`==`)**: Automatically converts the types of values being compared if they are not the same.

**(`===`)**: Compares both value and type, requiring them to be identical, preventing type coercion.

16. In part2-question16.js

17. [2,4,6] is printed. Each value in the original array is multiplied by 2 in the  dosomething method. It is then pushed back to the newArr.

18. In part2-question18.js
    
19. 1
    4
    3
    2