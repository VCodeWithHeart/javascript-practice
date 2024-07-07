function Say_Name(a,b) {
    if(typeof a === typeof b){
        console.log(a + b);
    }
    else{
        console.log("diff datatype");
    }
}

// let MYname = "Viraj";

Say_Name(3, "4");
