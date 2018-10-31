new Vue({
el : '#app',
data : {
    name : 'hello',
    gameEnded: true,
    gameIsRunning : false,
    playerHealth : 100,
    monsterHealth : 100,
    result: 'result',
    showResult : false,
    playerColor: 'green',
    monsterColor: 'green',
    log: [],
    attackBonus: 3,
    healBonus: 3,
    difficulty: "easy",
    IsComboLimit: false,
    IsHealLimit: false,

},
methods : {
    startFunc: function(){
        this.gameIsRunning =true;
        this.gameEnded = false
        this.playerHealth=100,
        this.monsterHealth = 100,
        this.showResult = false,
        this.playerColor = 'green'
        this.monsterColor = 'green'
        this.attackBonus= 3,
        this.healBonus=3,
        this.IsHealLimit = false; 
        this.IsComboLimit = false; 
        this.log =[]
    },
    playerAttack: function(){
        var impact =this.calculateImpact(1, 10)
        this.monsterHealth -= impact;
        this.log.unshift({
            IsplayerTurn : true,
            text : 'Player strikes for '+ impact + ' points',
         })
        this.changeBackground();
        this.checkwin();
        this.monsterAttck();
        
    },
    combo : function(){
      
        // for (i = 0;  i < this.attacksLeft; i++)
        if(this.attackBonus > 0){
        this.attackBonus--
        var impact =this.calculateImpact(10, 10);
        this.monsterHealth -= impact;
        this.log.unshift({
            IsplayerTurn : true,
            text : 'Player strikes hard for '+ impact + ' points',
            })
        this.changeBackground();
        this.checkwin();
        this.monsterAttck();
        }
        else{
            return this.IsComboLimit = true; 
        }
     
    
        
    },
    heal : function(){
        if(this.playerHealth <= 90 && this.healBonus > 0  ){
            this.healBonus--
            this.playerHealth += 10;
            this.log.unshift({
                IsplayerTurn : true,
                text : 'Player regains for 10 points',
            })
           
            if (this.playerHealth >= 36){
                this.playerColor = 'green';
            }
            else {};
            this.checkwin();
            this.monsterAttck();
        }
        else{
            return this.IsHealLimit = true; 
        }
    },

    monsterAttck : function(){
        if ( this.difficulty == "easy"){
            var impact = this.calculateImpact(1, 10)
        }
        else{
            var impact = this.calculateImpact(5, 5)
        }
        
        this.playerHealth -=impact;
        this.log.unshift({
            IsplayerTurn : false,
            text : 'Monster strikes for '+ impact + ' points',
         })
        this.changeBackground();
        this.checkwin();
    },

    quit : function(){
    this.gameEnded =true;
    this.gameIsRunning = false
    this.playerHealth = 100,
    this.monsterHealth = 100,
    this.showResult = false,
    this.playerColor = 'green',
    this.monsterColor = 'green'
    this.attackBonus= 3,
    this.healBonus=3,
    this.IsHealLimit = false; 
    this.IsComboLimit = false; 
    this.log =[] 
    },

    calculateImpact: function(min, max) {
    return Math.floor(Math.random() * max) + min
    },
    checkwin: function(){
        if (this.monsterHealth <= 0){
         
            this.result = 'Yey!! You won! ';
            this.showResult = true;
            this.gameEnded= true;
         
        }
        else if (this.playerHealth <= 0){
           
            this.result = 'Boo!! You lost!';
            this.showResult = true
            this.gameEnded= true;    
        }
        else{
            this.gameIsRunning = true 
        }
    },
    changeBackground: function(){
        if(this.playerHealth <=35 ){
            this.playerColor = '#d60303';
        }
        if(this.monsterHealth <=35){
            this.monsterColor = '#d60303';
        }
        else{}
        return
    },
}

})