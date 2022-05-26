function deafGrandma() {
    const goodbyeCnt = 0
    let input = window.prompt('HEY KID!')   
    while (goodbyeCnt < 2) {
        if (input === null) {
            window.alert(`WHAT?!`);
        }
        else if (input === /g[a-z]/){
            window.alert(`SPEAK UP, KID!`)
        }
        else if (input === /g[A-Z]/){
            window.alert(`NO, NOT SINCE 1946!`)
        }
        else if (input === `GOODBYE!`){
            goodbyeCnt++;
        }
        else if (goodbyeCnt === 1) {
            window.alert(`LEAVING SO SOON?`)
        } 
        else if (goodbyeCnt === 2) {
            window.alert(`LATER, SKATER!`)  
        }  
    }
}
deafGrandma()
