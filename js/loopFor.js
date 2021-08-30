// tip:to run it ne  eds to put function above in HTML page into onload
function printNumbers(min, max) {
    for (let i = min; i <= max; i++) {
        document.write(i + '<br />');
    }
}


//using loop (for) in an array
let names = ['saeed', 'zakaria', 'ehsan', 'kasra', 'mohammadreza', 'mersad']
for (let i = 0; i < names.length; i++) {
    // tip: the first way of show
    document.write(names[i] + '<br />')
    // tip:second way of show
    // const name = names[i];
    // console.log(name);    
}