# assignment_data_structures_node

[Anne Richardson](https://github.com/lortza)


# Warmup: Big O

## Determine the Big O of the following (and ideally explain briefly why):

1. Accessing an item by index in an array
O(1) - use addition  or multiplication to jump to the place where you need to go

2. Unshifting a new item into the beginning of an array
O(n) - adding an item to an array in `C` means you need to find a new space in memory that has the capacity for this new larger array and rebuild the array with every index moved back one.

3. Pushing an item onto the end of an array
O(n) - working in `C`, you'll need to rebuild the array and find a new space for it

4. Upcasing a String
O(n) - you have to go through each letter

5. Reversing a String
O(n) - you have to go through each letter

6. Finding the `max` of an array
O(n) - you have to go through each letter to compare it

7. `split`ting a String
O(n) - you have to go through each letter to turn it into an array

8. Inserting a value to an Object
O(n) - you have to go through each letter until you reach the insertion point, then you have to rebuild it

9. Retrieving the keys of an Object (`{ foo: "bar" }.keys`)
O(n) - though the initial hash table is O(1), you have to crawl the linked list, which is O(n)
