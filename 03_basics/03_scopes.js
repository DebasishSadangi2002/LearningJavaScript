function outerFunction() {
    let outerVariable = 'I am from the outer function';
    
    function innerFunction() {
        let innerVariable = 'I am from the inner function';
        
        console.log(outerVariable); // Accessible
        console.log(innerVariable); // Accessible
    }
    
    innerFunction(); // Calling the inner function
    console.log(innerVariable); // Unaccessible (ReferenceError)
}

outerFunction(); // Calling the outer function
