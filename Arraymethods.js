let arr = ["kajal", "krishna", "lovely", "dimple", "delhi", "anand vihar"];


arr.length
6

arr.push("new delhi");
7

arr.push("india");
8

arr.pop();
'india'

arr
7

arr.pop();
'new delhi'

arr
6

arr.unshift("a block");
7

arr
7

arr.shift();
'ablock'

arr
6

arr[3]
'dimple'

aee[arr.length-1];
'anand vihar'

arr[0];
'kajal'

arr.length-arr.length
0

arr.indexOf("kajal");
0

arr.indexOf("d block");
-1

arr
6

arr.slice(2,4);
['lovely', 'dimple']

arr.splice(1);
(5)['krishna', 'lovely', 'dimple', 'delhi', 'anand vihar']

arr
kajal

arr.push("k")
2

arr.push("a")
3

arr.push("j")
4

arr.push("a")
5

arr.push("l")
6

arr
6

arr.splice(2,4)
4

arr
7

arr.splice(5,1)
['a']

arr.splice(1,5)
(5)

arr
['kajal']

arr.splice(1,5,"krishna")
[]

arr
2



