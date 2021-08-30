// loop(while)
function printNumbers2(min, max) {
    let i = min; 
    while (i <= max) {
        document.write(i + '<br />')
        i++;
    }
}


// loop(while)
function f1() {
    let input = prompt('enter your numbers(+ for finish) : ')
    sum = 0; 
    while (input != '+') {
        sum += eval(input);
        input = prompt('enter your numbers(+ for finish) : ')
    }
    alert(sum)   
}
f1() 


