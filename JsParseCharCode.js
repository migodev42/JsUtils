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

const str=`C202CB35EG C193DA308M S294DH900B`
// parse(str)
console.log(str.replace(/\n|\u00A0|\u0020|\u3000/g,','))

debugger;

