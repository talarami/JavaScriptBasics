
let data = true

if (data == true) console.log("info") // info

data = 1
if (data) console.log("info 2") // info 2

// falsy values - konwertowane na false

if (0) console.log("nie wykona się")
if (-0) console.log("nie wykona się")
if ("") console.log("nie wykona się")
if (NaN) console.log("nie wykona się")
if (null) console.log("nie wykona się")
if (undefined) console.log("nie wykona się")
if (false) console.log("nie wykona się")
if (0n) console.log("nie wykona się")

//truthly values

if ([]) console.log("wykona się")
if ({}) console.log("wykona się")
if ("abc") console.log("wykona się")
if (56) console.log("wykona się")
if (56) console.log("wykona się")
if (function (){}) console.log("wykona się")
if (true) console.log("wykona się")