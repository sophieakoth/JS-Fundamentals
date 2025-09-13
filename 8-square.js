const[, , arg] = process.argv;
const size = Number(arg);

if(!Number.isInteger(size)) {
    console.log("Missing size");
} else {
    let i = 0 ;
    while(i<size) {
        console.log("x".repeat(size));
        i++;
    }
    
}
