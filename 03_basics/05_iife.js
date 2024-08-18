// immediately Invoked Function Expression (IIFE)

(function name(){
    // nmaed IIFE
    console.log("DB Connected");
    
}) ();

((name) => {
    console.log("DB connected 2",name);
}) ('debasish') ; //with parameter