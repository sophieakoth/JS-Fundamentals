const args = process.argv.slice(2);
if(args[0] !== undefined && args[1] !== undefined) {
    console.log(`${args[0]}is ${args[1]}`);
}