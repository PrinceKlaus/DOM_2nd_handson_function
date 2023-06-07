// Q1
function zeropara()
{
    console.log("Karma has no menu, you get what you deserve")
}
console.log(zeropara())

// Q2
function sum(a , b)
{
     let c = a + b
     console.log(c)
}
sum(3,4);

//Q3
Klaus = () =>
{
    return "Nobody's too busy, it's just a matter of priorities";
}
console.log(Klaus())

//Q7
function fact(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  }
 console.log(fact(7))