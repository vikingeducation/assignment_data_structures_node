# assignment_data_structures_node

Determine the Big O of the following (and ideally explain briefly why):
1. Accessing an item by index in an array
This is O(1), IF the array only has one data type. JavaScript's arrays are more like associative arrays. Depending on the implementation and how well balanced the associative array might be, this might be closer to O(n). But if we assume the array is like an array in C, then simply the compiler only needs to determine the data type stored in the array, the index given, and multiply the byte-size of the type by the index to reach the element.

2. Unshifting a new item into the beginning of an array
If we assume, again, a static array, then this will be O(n), as a new array will have to be created in order to prepend the item to the beginning of the array. Arrays are only allocated a certain size, and anything beyond this will require a re-allocation of memory.

3. Pushing an item onto the end of an array.
Same as #2. Even if we consider that an array in JavaScript is more like an associated array (and in fact it is, a JavaScript array is just an object with special access syntax), we have to consider how the hashing function works, and how much space the underlying C++ library in V8 allocates memory whenever a new JavaScript object is created. The process would likely look something like this.
  -Request V8 to create an object
  -V8 creates an array of linked lists to establish our Associative Array.
    -Depending on V8's internal implementation, a certain amount of memory will be allocated for this associative array.
    -If an array exceeds a certain size when mutating elements, then V8 needs to recreate the associative array and rebuild the hash table.

Again I'm not entirely sure and it's probably a gross simplification or even possibly incorrect, but in any case, JavaScript array implementatoins will likely be closer to O(n) for mutating arrays.

4. Upcasing a String
This is also O(n). N in this case being simply the number of characters in the string. JavaScript needs to iterate through the string, find the related uppercase Unicode character for the current element (if it's not already uppercased), then add that to a new string which we will return at the end.

5. Reversing a String
This is also likely O(n), but it depends on your implementation. In C (and I believe in C++), strings are implemented as pointers to an array of characters. Therefore, reversing a string is the same as reversing an array. So, at the low-level, reversing a string involves iterating through the string characters. If the next character is the null terminator, then add the previous character to the new string. Alternatively, you can find the length of the string (which is O(n)), then simply iterate backwards through the string (which is O(1)) to create the reversed string.

There are many other solutions, including using a stack to simply add the string, the popping from the stack afterwards to reverse it, but this is still O(n) as well.

6. Finding the max of an array
O(n). You have to iterate through the array until you arrive at the end.

7. Splitting a String
Likely O(n). You iterate through the string until you reach the designated split point. Then, you create a new variable to store this portion of the character array. Then, you continue iterating through the rest of the string, and save the rest of this string into a second variable, then finally return those variables to the user. Since you're essentially just iterating through a string along with a few constant operators, it's effectively O(n).

8. Inserting a value to an Object
Very close to O(1). A new value is taken and put through a hashing function: Constant time. Access the appropriate index of the associative array based on this hashing function: constant time. Traverse through the linked list stored at that index to insert a value: Constant Time or O(n) depending on the effectiveness of the implementation. So, this is implementation dependent, but assuming V8 is intelligent enough to construct a good hashing function, then this should be close to O(1).

9. Retrieving the keys of an Object ({ foo: "bar" }.keys)
This will be very implementation dependent. In some languages, according to Stack Overflow, a key set is stored in the object itself, which means that getting all the keys is as simple as retrieving another property on the hash table, which is O(1). However, if you are iterating through the entire associative array, this can be anywhere from O(n) to O(n^2). It depends on how long your linked lists are.