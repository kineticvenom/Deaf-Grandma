// function deafGrandma() {
    const goodbyeCnt = 0
       
    while (goodbyeCnt < 2) {
        let input = prompt()

        if (input === "") {
            alert(`WHAT?!`);
        }else if (input === `GOODBYE!`){
            goodbyeCnt++;
        
            if (goodbyeCnt === 1) {
                alert(`LEAVING SO SOON?`)
            } 
            else if (goodbyeCnt === 2) {
                alert(`LATER, SKATER!`)  
            }  
        }    
        else if (input == /g[a-z]/){
            alert(`SPEAK UP, KID!`)
        }
        else if (input == /g[A-Z]/){
            alert(`NO, NOT SINCE 1946!`)
        }
        
    }
// }
// deafGrandma()
