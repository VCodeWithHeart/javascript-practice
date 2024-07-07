// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    // named IIFE
    console.log(`DB Connected`);
    
})();

// IIFE USES
// humara function application open hote hi run hojaye
// humarre function ko global variable ke pollution se bachane ke liye

( (naam) => {
// unnamed IIFE
console.log(`DB CONNECTED ${naam}`);

} )(`hitesh`)

