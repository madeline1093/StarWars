$(document).ready(function(){
    let luke;
    let darthMaul;
    let obiWan;
    
    let characterSelection = [];
    let jediOne;
    let defenders = [];
    let jediTwo;

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

            $("#characterSelection").append(characterDiv);
        });


        $("#jedi-one").on("click", function(){
            if(jediOne === null){
                console.log("picked jedi one");
                var jediOneId = parseInt($(this).attr("id"));
                jediOne = characterSelection[jediOneId];
            }
                $.each(characterSelection, function(index, jediOne){
                    if (jediOne.id !== jediOneId) {
                        defenders.push(jediOne);
                        $("#" + jediOne.id).removeClass("jediOne").addClass("jediTwo").appendTo("#enemyArea");
                    } else {
                        $("#" + jediOne.id).appendTo("#jedi-one");
                    }
                })
    
                $("#jedi-two").on("click", function(){
                    if (jediTwo===null) {
                        var jediTwoId = parseInt($(this)attr("id"));
                        console.log(this);
                        jediTwo = characterSelection[jediTwoId];
                        $("#" + jediTwoId).appendTo("#jedi-two");
                    };
                });
            });
        });
    };

    startGame();

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
        attack();

    });


   

   





    $('#')



});