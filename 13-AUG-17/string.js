var name1 = 'prakash'; // type of string
var name2 = 'madhu';
var name3 = 'udhaya';
var name4 = 'murali';
var friend = 'My Best Friend Lokesh Go To Another Friend Murali Home Today'
var name5 = new String('rajendhran') // type of object
var len = name1.length; //name1 length = 7
console.log(len)
console.log(name5)
console.log(typeof(name5))
var pos = friend.indexOf('Friend'); // position friend at 8
console.log(pos)
var lastpos = friend.lastIndexOf('Friend');  // last postion friend at 36
console.log(lastpos)
var pos = friend.indexOf('Friend',15); // 15 number will starting posion 
var sch = friend.search('Friend'); // search friend postion at 8 only
console.log(sch)
var names = 'prakash , muralai , madhu , udhaya';
var spl = names.slice(10,17); //slice mean cut for starting pos number to end pos number
var sub = names.substring(10,17); // same for slice method here not allow in -ve values
var str = names.substr(10,7); //end number change
console.log(spl)
console.log(sub)
console.log(str)
var rep = friend.replace('Lokesh','Prakash') // here lokesh replace prakash
console.log(rep)
var upcase = name2.toUpperCase(); // name2 madhu will change MADHU
var lowcase = name1.toLowerCase(); // here Name1 Prakash chg prakash 
console.log(upcase)
console.log(lowcase)
var con = name1.concat(' ',name5) // two name are added
console.log(con)
var array = names.split(',') //string will con to array
console.log(array)
console.log(typeof(array))