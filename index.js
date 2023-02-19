 for(i in arr)
{
  process.stdout.write(`${arr[i]} `);
} 


//map
const numbers = [1,2,3,4,5];
const squareof = numbers.map((num)=>{
  return num*num;
});
console.log(squareof);
 



//filter

const country = ["europe","italy","United States","Chennai","ezilon"]
const result = country.filter((str) => {
  return str[0] == 'e';
})
console.log(ans) 

//return string

 const arr = [1,2,3,"ads"];
const ans = arr.filter((str)=>{
  return typeof(str) == 'string';
})
 

//reduce

const countries = ["europe","italy","United States","Chennai","ezilon"]
const res = country.reduce(func);
function func(total,num) {
  return (total+" "+num);
}
console.log(`${ans} are the northern countries`)



//count of letter

 const count = ["europe","italy","United States","Chennai","ezilon"]
const map = new Map();
count.filter((str)=>{
  if(map.has(str[0]))
  {
    map.set(str[0],map.get(str[0])+1);
  }
  else{
    map.set(str[0],1);
  }
})
var answer = 0;
var letter = ' ';
map.forEach((value,key)=>{
  if(value > answer){
    ans = value;
    letter = key;
  }
});
console.log(letter+" : "+answer)
 


//loop


const set = new Set();
for (let index = 1; index <= 10; index++) {
    set.add(index);
}
console.log(set);

//Remove element

set.delete(5);
console.log(set);

//Clear set


set.clear();
console.log(set);
 


//Create set

const sets = new Set();
const array = ['Finland','Finland','Australia','Sweden','Denmark','India']
var count1 = 0;
arr.forEach(element => {
  set.add(element);
  count1++;
});
console.log(sets)


//Create map

const maps = new Map();
const array1 = ['Finland','Finland','Australia','Sweden','Denmark','India'];
array.filter((str)=>{
  maps.set(str,str.length);
});
console.log(maps);


//A union B

      var a = [1,2,2,3,4,5,6,7,8]
      var b = [7,8,9,10,11,12,13,14,15,16,17,18]
      var n = a.length;
      var m = b.length;
      var min = (n < m) ? n : m;
 
        var set1 = new Set();
 
        for (i = 0; i < min; i++) {
            set1.add(a[i]);
            set1.add(b[i]);
        }
 
        if (n > m) {
            for (i = m; i < n; i++) {
                set1.add(a[i]);
            }
        } else if (n < m) {
            for (i = n; i < m; i++) {
                set1.add(b[i]);
            }
        }
         set1.forEach (function(value) {
          console.log(value+" ");
});

//A intersection B

    const set1 = new Set(a);
    const set2 = new Set(b);

    let intersection = [];

    for (let i of set2) {
    
        if (set1.has(i)) {
            intersection.push(i);
        }
    }
    console.log(intersection);
           

    const countr = [
      {'French':45},
      {'Arabic':25},
      {'Spanish':24},
      {'English':91},
      {'Russian':9},
      {'Portuguese':9},
      {'Dutch':8},
      {'German':7},
      {'Chinese':5},
      {'Swahili':4},
      {'Serbian':4}
    ]
 