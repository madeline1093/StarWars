$(document).ready(function(){
    let luk;
    let darthMaul;
    let obiWan;
    
    let characterSelection = [];
    let jediOne;
    let defenders = [];
    let jediTwo;

    let ifChosenFirst = false;

    function startGame () {
        
        luke = {
            "id" : 0,
            "name" : "luke",
            "health": 200,
            "multiplier": 10,
            "power": function() {
                return Math.floor(Math.random() * this.multiplier);
            },

        }
        darthMaul = {
            "id": 1,
            "name" : "darth maul",
            "health": 300,
            "multiplier": 5,
            "power": function() {
                return Math.floor(Math.random() * this.multiplier);
            },
        }
        obiWan = {
            "id": 2,
            "name" : "Obi Wan Kenobi",
            "health": 200,
            "multipler": 8,
            "power": function() {
                return Math.floor(Math.random() * this.multipler);
            },
        }

        darthVader = {
            "id": 3,
            "name" : "Darth Vader",
            "health": 250,
            "multipler": 8,
            "power": function() {
                return Math.floor(Math.random() * this.multipler);
            },
        }

        jediOne;
        defenders = [];
        jediTwo;
        characterSelection = [luke, darthMaul, obiWan];

        $("#jedi-one").empty();
        $("#enemies-available").empty();
        $("#jedi-two").empty();
        $("#status").empty();

        $.each(characterSelection, function(index, jediOne){
            let characterDiv = $("<div>").addId("character").attr("id", character.id);

            $("<div>").html(character.name).appendTo(characterDiv);
            $("<div>").append("<img src='" + character.img + "'>").appendTo(characterDiv);
            $("<div>").append("<span class='hp'>" + character.health +"</span>").appendTo(characterDiv);
        })
    }



    function isJediDead(jedi) {
        if (jedi.health <= 0) {
            return true;
        } else {
            return false;
        }
    }


        function powerBoost(jedi) {
            jedi.multiplier++;
            return jedi;
        }

    function attack(jediOne, jediTwo){
       // let jediOneHealth = jediOne.health; //for luke this is 200
       // let jediTwoHealth = jediTwo.heatth; //for darth Maul this is 300
        let j1Power = jediOne.power();
        let j2Power = jediTwo.power();

        jediOne.health = jediOne.health - j2Power;
        jediTwo.health = jediTwo.health - j1Power;


        powerBoost(jediOne);

        //check health
        if (isJediDead(jediOne) === true) {
            alert(jediOne.name + ' lost');
        }
        if (isJediDead(jediTwo) === true) {
            alert(jediTwo.name + ' lost');
        }


        console.log(jediOne.health);
        console.log(jediTwo.health);
    }


    //click buttosn
    $("#attackBtn").on('click', function(){
        // you hit them (take away points)
        // they hit you (take away some of your points)

    });


    $("#character").on("click", function(){
        if (character)
    })
    $("#luke").on('click', function() {
        if (ifChosenFirst === false) {
            let jediOne=luke;

        } else {
            jediTwo = luke;

        }
    });

    $("#darthMaul").on('click', function() {
        if(ifChosenFirst === false) {
            jediOne = darthMaul;
            console.log(jediOne);
        } else {
            jediTwo = darthMaul;
            console.log(jediTwo);
        }
    })








})