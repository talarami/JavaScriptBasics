// This wskazuje na tzw. execution context, w którym jest wywoływany kod.

console.log(this) // window
console.log(globalThis) // window globalne

if (1==1) {
    console.log(this) // window
}

function foo() {
    console.log(this) // window
}

foo()

function bar() {
    "use strict"
    console.log(this) // undefined
}

bar()