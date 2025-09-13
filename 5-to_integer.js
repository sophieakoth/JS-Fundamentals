const [, , arg]= process.argv;
const num = Number(arg);

if(Number.isInteger(num)) {
    console.log(`My number: ${num}`);
}else {
    console.log("Not a number");
}

