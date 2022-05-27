// function deafGrandma() {
    let goodbyeCnt = 0
       
    while (goodbyeCnt < 2) {
        let input = window.prompt()

        if (input === "") {
            window.alert(`WHAT?!`);
        }else if (input === `GOODBYE!`) {
            goodbyeCnt++;
        
            if (goodbyeCnt === 1) {
                window.alert(`LEAVING SO SOON?`)
            } 
            else if (goodbyeCnt === 2) {
                window.alert(`LATER, SKATER!`)  
            }  
        }    
        else if (input.match(/^[a-z\s]/)){ 
            window.alert(`SPEAK UP, KID!`)
        }
        else if (/^[A-Z\s]/.test(input)){
            window.alert(`NO, NOT SINCE 1946!`)
        }
        
    }
// }
// deafGrandma()
