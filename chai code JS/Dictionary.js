// Dictionary Code

let obj = {
    bomb: "an explosive material",
    slime: "a gluey material that sticks",
    willow: "a tree with many branches",
    petite: "very tiny",
    chubby: "soft but fat"
}

let inout = "soft but fat";



if (inout in obj) {
    console.log("The meaning of the word is: ", obj[inout]); 
} else {
    console.log("Word not exists in dictionary");
    
}