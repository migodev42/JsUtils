const parse = (str) => {
    for (let el of str) {
        console.log(el.charCodeAt())
    }
}

/* 

| platform | software | ascii| character |
| - | - | -| - |
|linux |wps |10 |\n |
|linux |石墨 |10 |\n |


*/


parse(`1	2	3	4
`)
debugger;