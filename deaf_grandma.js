function deafGrandma(input) {
const goodbyeCnt = 0
   
if (input === null) {
        console.log(`WHAT?!`);
    }
    if (input === /g[a-z]/){
        console.log(`SPEAK UP, KID!`)
    }
    if (input === `GOODBYE!`){
        goodbyeCnt++;
        if (goodbyeCnt === 1) {
console.log(`LEAVING SO SOON?`)
        } else if (goodbyeCnt === 2) {
            console.log(`LATER, SKATER!`)
            return
        }
    }
    else if (input === /g[A-Z]/){
        console.log(`NO, NOT SINCE 1946!`)
    }
    

}

console.log(deafGrandma(`hi, grandma`));