var namelist = ['prakash' , 'ramu' , 'ram' , 'raju']
var namelist1 = ['madhu' , 'udhya' , 'murali']
var len = namelist.length; // namelist length = 4
console.log(len)
var con = namelist.concat(namelist1); // concat will added two array
console.log(con)
var join = namelist.join(namelist1)
console.log(join)
var pop = namelist.pop();
console.log(namelist)
var push = namelist.push('ravi')
console.log(namelist)
var shift = namelist1.shift();
console.log(namelist1)
var unshift = namelist1.unshift('MAGESH');
console.log(namelist1)
var slice = namelist.slice(1,2);
console.log(namelist)
var sort = namelist1.sort();
console.log(sort)
var splice = namelist.splice(2,0,'madhu','babu')
console.log(namelist)