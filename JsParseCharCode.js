const parse = (str) => {
    for (let el of str) {
        console.log(el.charCodeAt())
    }
}

/* 

| platform | software | ascii| character |
| - | - | -| - |
|linux | wps |10 |\n |
|linux | 石墨 |10 |\n |
|windows| excel |10|\n|
|windows| wps |10|\n|
|windows| 石墨 |10|\n|
|Mac|numbers|10|\n|
*/

const str=`123 
2wer 
123 
1234 
1234 
3 
1234`
parse(str)
console.log(str.replace(/\n/g,','))

debugger;

