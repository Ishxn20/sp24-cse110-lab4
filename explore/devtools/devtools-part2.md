1. The bug in the code was that the function treated num1 and num2 as strings rather than numbers. When these string values are passed, the + operator concatenates them instead of adding them numerically. So, if the user enters "3" and "2", the function would return "32" instead of the 5.

2. To fix the issue, we should make sure that the values retrieved from the input are converted from strings to numbers before performing the addition. This can be achieved by using parseInt() for integer values.
   
Screenshot uploaded