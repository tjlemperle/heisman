const celebs = require('../../src/array')



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }


module.exports = {
    play: (req, res) => {
        let opponents = []
        let {overall} = req.body;
        let {wins, losses, money} = req.body;
        //for loop for each index in opponents array.  random name and random attributes.  
        //compare to currentPlayer, if currentPlayer overall is >= then increase money by 1. 
        //increment wins and losses as well.  
        for(let i=0; opponents.length < 50; i++) {
            const randIndex = Math.ceil(Math.random() * celebs.length-1)
            const randArm = getRandomInt(1, 100)
            const randDec = getRandomInt(1, 100)
            const randSpeed = getRandomInt(1, 100)
            const rating = Math.ceil((randArm + randDec + randSpeed)/ 3)
            let randName = celebs[randIndex].name
    
            let player = {
                name: randName,
                speed: randSpeed,
                arm: randArm,
                decision: randDec,
                overall: rating,
            }
    
    
            opponents.push(player)
           
        }
        
        for(let i=0; 1 < opponents.length-1; i++){
            if(opponents.overall >= player.overall){
                money++
                wins++
            } else {
                losses++
            }
        }

        res.status(200).send(summary)
    }
}