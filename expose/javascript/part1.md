1. values added: 20
2. final result: 20
3. values added: 20
4. Line 13 will cause a ReferenceError when executed because result is declared within the if block using let, which means it cannot be accessed outside of that block. The console.log statement on line 13 is outside of the block in which result is declared and so the code will throw an error when it tries to log result to the console on this line.
5. The code returns an error because the result is a const varibale meaning its value cannot be changed. So, the program throws an error when trying to change the value of result from 0 to 20. 
6. Line 13 will cause an error when executed because we are tyring to changhe the value of result in line 7 which isn't allowed as result is a const.