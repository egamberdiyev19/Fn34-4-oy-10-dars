// forEach uchun 15 masala:
// 1-masala
let arr11 = [10, 50, 41, 65, 754]
arr11.forEach(function(value, index, a) {
    console.log(value)
}) 
// 2-masala
let arr12 = [2, 6, 5, 8, 11]
arr12.forEach(function(value) {
    console.log(value**2);
    
})
// 3-masala
let arr13 = [14, 23, 54, 62]
arr13.forEach(function(value) {
    console.log(value * 2);
    
})
// 4-masala
let arr14 = [10, 4, 3, 8, 11]
arr14.forEach(function(value) {
    if (value > 5) {
        console.log(value);
        
    }
})
// 5-masala
let arr15 = [41, 21, 51, 31, 74]
let res15 = []
arr15.forEach(function(value) {
    res15 = value + 10;
    console.log(res15);
})
// 6-masala
let arr16 = [4, 23, 40, 45, 10]
arr16.forEach(function(value) {
    if (value % 2 == 0) {
        console.log(value);
        
    }
})
// 7-masala
let arr17 = [23, 36, 28, 19, 45]
arr11.forEach(function(value) {
    arr17.reverse()
    
    
});
console.log(arr17);
// 8-masala
let arr18 = ['a', 'b', 'f']
let vowel18 = ['a']
let res18 = arr18.filter(value => {
    return vowel18.includes(value)
})
console.log(res18);
// 9-masala
let arr19 = [0, 1, 2, 3, 4]
let res19 = []
arr19.forEach((function(value) {
    res19.push(arr19.indexOf(value))
    
}))
console.log(res19);
// 10-masala
let arr110 = ["olma", "behi", "anjir"]
let result110 = arr110.join(", ");
console.log(result110); 
// 11-masala
let arr111 = ['hello', 'byebye', 'info']
let res111 = [];
arr111.forEach(value => {
    res111.push(value.slice(0, 3))
})
console.log(res111);
// 12-masala
let arr112 = ['info27', '4popular', 'hello']

arr112.forEach(value => {
    let res112 = value[value.length - 1]
    console.log(res112);
})
// 13-masala
/*let arr113 = ['olma', 'anjir', 'banan', 'behi']
let maxLenth = arr113[0].length;
arr113.forEach(value => {
    if (value.length > maxLenth)
        
    
});*/
// 14-masala
let arr114 = ['hello', 'bye', 'info'] 
let res114 = []
arr114.forEach(value => {
    res114.push(value + '!')
    
})
console.log(res114);
// 15-masala
let arr115 = ['SALOM', 'HELLO', 'BYE']
let res115 = []
arr115.forEach(value => {
    res115.push(value.toLowerCase())
})
console.log(res115);
// map uchun 15 masala:
// 1-masala
let arr21 = [2, 5, 6, 21, 14]
let res21 = arr21.map(value => {
    return value * 2
})
console.log(res21);
// 2-masala
let arr22 = [10, 23, 41, 20]
let res22 = arr22.map(value => {
    return value ** 2
})
console.log(res22);
// 3-masala
let arr23 = ['olma', 'behi', 'banan']
let res23 = arr23.map(value => {
    return value.split('').reverse().join('')
})
console.log(res23);
// 4-masala
let arr24 = ['beautufil', 'because', 'import']
let res24 = arr24.map(value => {
    return value.slice(-3)
})
console.log(res24);
// 5-masala
let arr25 = ['salom', 'bye', 'name']
let res25 = arr25.map(value => {
    return value.toLocaleUpperCase()
})
console.log(res25);
// 6-masala
let arr26 = ['new', 'old', 'ege']
let res26 = arr26.map(value =>"Hello," + value
)
console.log(res26);
// 7-masala
let arr27 = ['block', 'yellow', 'with']
let res27 = arr27.map(value => value + ' ' + value)
console.log(res27);
// 8-masala
let arr28 = [1, 5, 21, 63, 52]
let res28 = arr28.map(value => {
    return arr28.push(value.length)
})
console.log(res28);
// 9-masala 
let arr29 = ['hello', 52, 'bye']
let res29 = arr29.map(function(value) {
    return arr29.indexOf(value)
})
console.log(res29);
// 10-masala
let arr210 = ['nok', 'anjir', 'hurmo']
let res210 = arr210.map(value => {
    return value.split('').reverse().join('')
})
console.log(res210);
// 11-masala
let arr211 = ['year', 'cloth', 'big']
let res211 = arr211.map(value => {
   return value.slice(1, value.length - 1);
})
console.log(res211);
// 12-masala
/*let arr212 = ['you', 'see', 'drem']
let res212 = arr212.map(value => {
    return arr212.sort(value)
})
console.log(res212);*/
// 13-masala
let arr213 = ['small', 'wolg', 'spend']
let res213 = arr213.map(value => {
    return value.toLocaleUpperCase()
})
console.log(res213);
// 14-masa
let arr214 = ['word', 'information', 'choose']
let res214 = arr214.map(value => {
    if (value.length > 5) {
        console.log("katta");
        
    } else {
        console.log("Kichik")
    }
})
// 15-masala
let arr215 = ['nd2nc3', '45nc2d', 'sd5fc9']
let res215 = [];
arr215.forEach(value => {
    let string215 = value.split('');
    for (const iterator of string215) {
        if (Number(iterator)) {
            res215.push(iterator)
        }
    }
})
console.log(res215);
//filter uchun 15 masala:
// 1-masala
let arr31 = [10, 21, 35, 74]
let res31 = arr31.filter(value => {
    return value % 2 == 0
})
console.log(res31);
// 2-masala
let arr32 = [10, -23, 41, 29]
let res32 = arr32.filter(value => {
    return value < 0
})
console.log(res32);
// 3-masala
let arr33 = ['a', 'b', 'd', 'e']
let vowel33 = ['a']
let res33 = arr33.filter(value => {
    return vowel33.includes(value)
})
console.log(res33);
// 4-masala
let arr34 = ['lot', 'quetion', 'went']
let res34 = arr34.filter(value => {
    return value.length > 5
})
console.log(res34);
// 5-masala
let arr35 = ['test', 'misol', 'javob']
let res35 = arr35.filter(value => {
    return value == 'test'
})
console.log(res35);
// 6-masala
let arr36 = ['work', 'read', 'bike', 'drive']
let res36 = arr36.filter(value => {
    return value.split().reverse()
})
console.log(res36);
// 7-masala
let arr37 = [10, -6, -12, 13, 17]
let res37 = arr37.filter(value => {
    return value > 0
}) 
console.log(res37);
// 8-masala
let arr38 = ['bye', 'hi', 24, 75]
let res38 = arr38.filter(value => {
    return Number(value)
})
console.log(res38);
// 9-masala
let arr39 = ['hi', 'leke', 'so', 'what']
let res39 = arr39.filter(value => {
    return value.length < 3
})
console.log(res39);
// 10-masala
let arr310 = ['a', 'd', 'i', 'e', 'c']
let vowel310 = ['a', 'i', 'e']
let res310 = arr310.filter(value => {
    return vowel310.includes(value)
})
console.log(res310);
// 11-masala
let arr311 = ['abc125', 'mcj54', 'abcbd', '29ncej']
let res311 = arr311.filter(value => {
    return value.slice(0, 3) == 'abc'
})
console.log(res311);
// 12-masala
/*let arr312 = ['42nxyz', 'cmd21', 'hdxyz']
let res312 = */
// 13-masala
let arr313 = [5, 12, 9, 17]
let res313 = arr313.filter(value => {
    return value < 10
})
console.log(res313);
// 14-masala
let arr314 = ['test', 'guest', 'super']
let vowel314 = ['test']
let res314 = arr314.filter(value => {
    return vowel314.includes(value)
})
console.log(res314);
// 15-masala
let arr315 = ['clear', 'food', 'ever', 'satuday']
let maxLenth = arr315[0].length;
arr315.forEach(value => {
    if(value.length > maxLenth) {
        maxLenth = value.length
    }
})
let res315 = arr315.filter(value => {
   return value.length == maxLenth
})
console.log(res315);










































