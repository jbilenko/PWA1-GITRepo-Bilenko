/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");

    //fighters
    var fighterOne = ["Spiderman", 20, 100];
    var fighterTwo = ["Batman", 20, 100];

    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //initiate round
    var round=0;

    function fight(){
        alert(fighterOne[0]+":"+fighterOne[2]+"  *START*  "+fighterTwo[0]+":"+fighterTwo[2]);
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighterOne[1] * .5;
            var minDamage2 = fighterTwo[1] * .5;
            var f1 = Math.floor(Math.random()*(fighterOne[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighterTwo[1]-minDamage2)+minDamage2);

            //inflict damage
            fighterOne[2]-=f1;
            fighterTwo[2]-=f2;

            console.log(fighterOne[0]+": "+fighterOne[2] + " " + fighterTwo[0]+":"+fighterTwo[2]);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(fighterOne[0]+":"+fighterOne[2]+"  *ROUND "+round+" OVER"+"*  "+fighterTwo[0]+":"+fighterTwo[2]);

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (fighterOne[2]<1 && fighterTwo[2]<1)
        {
            result = "You Both Die";
        } else if(fighterOne[2]<1){
            result =fighterTwo[0]+" WINS!!!"
        } else if (fighterTwo[2]<1)
        {
            result = fighterOne[0]+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();

})();
