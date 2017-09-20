# assignment_data_structures_node

Han Solo & Will


## Warmup: Big O

What is the complexity of the following operations:

1. Accessing an item by index in an array: O(1)
    * Arrays are stored in contiguous chunks of memory, with the elements regularly spaced. A particular element's address can, therefore, be found arithmetically.
2. Unshifting a new item into the beginning of an array: O(n)
    * Since arrays have defined length and location, adding a new item to their beginning requires rewriting the entire array.
3. Pushing an item onto the end of an array: O(n)
    * Likewise, adding to the end of an array requires it to have a different size, so it must be rewritten.
4. Upcasing a string: O(n)
    * Each element of the string must be checked for case.
5. Reversing a string: O(n)
    * You must traverse each character to place it in its new position.
6. Finding the `max` of an array: O(n)
    * You must traverse each element to check if it is the largest.
7. `split`ting a string: O(n)
    * You must traverse each character/group to check it against the split character/group, then you must add each chunk to the resulting array. If you do this in two passes, you can determine the length of the array that you will need and then append to it in constant time.
8. Inserting a value into an `Object`: O(1)
    * You determine where to place it with a hash function.
9. Retrieving the keys of an Object: O(n)
    * You are building an array and you don't know how large it needs to be
