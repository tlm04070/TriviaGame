$(document).ready(function () {

    var correct = 0;
    var missed = 0;
    var unanswered = 0;





    // Hiding all other elements of the game

    $("#game").hide();
    $("#body").hide();
    $(".button").hide();
    $(".col-md-12").hide();
    $("#score").hide();


    //start function that removes the button and reveals the game

    function start() {
        $("#start").on("click", function clicked() {
            $(this).removeClass("jumbotron", "btn-block", "btn", "startDiv");
            $(this).empty();
            $("#game").show();
            $("#body").show();
            $(".button").show();
            $(".col-md-12").show();
        });
    };

    start();


    function submit() {
        $(".button").on("click", function submit() {
            $(this).removeClass("button", "btn-block");
            $(this).empty();
            $("#game").hide();
            $("#body").hide();
            $(".col-md-12").hide();
            $("#score").show();
            $("#correct").html("Correct:  " + correct);
            $("#wrong").html("Missed:  " + missed);
            unchecked();
            $("#unanswered").html("Unanswered:  " + unanswered);
            



        });
    };

    submit();



    function check() {
        $("input[type=radio]").on("click", function (e) {
                console.log(e.currentTarget.id);
                if (e.currentTarget.id === "pulsar") {
                    correct++;
                    console.log(correct);

                } else if (e.currentTarget.id === "gravitationalForce") {
                    correct++
                    console.log(correct);
                } else if (e.currentTarget.id === "andromeda") {
                    correct++
                    console.log(correct);
                } else if (e.currentTarget.id === "neptune") {
                    correct++
                    console.log(correct);
                } else if (e.currentTarget.id === "cosmology") {
                    correct++
                    console.log(correct);
                } else if (e.currentTarget.id === "halleysComet") {
                    correct++
                    console.log(correct);
                } else if (e.currentTarget.id === "neutron") {
                    correct++
                    console.log(correct);
                } else if (e.currentTarget.id === "27%") {
                    correct++
                    console.log(correct);
                } else if (e.currentTarget.id === "proximaCentauri") {
                    correct++
                    console.log(correct);
                } else if (e.currentTarget.id === "438days") {
                    correct++
                    console.log(correct);
                } else {
                    missed++;
                    console.log(missed);
                }
                
            }
            
        )};



        function unchecked(){ 

            if($("#first").not("checked")){
                unanswered++;
                console.log(unanswered);

            }if($("#second").not("checked")){
                unanswered++;
                console.log(unanswered);
                
            }if($("#third").not("checked")){
                unanswered++;
                console.log(unanswered);
                
            }if($("#fourth").not("checked")){
                unanswered++;
                console.log(unanswered);
                
            }if($("#fifth").not("checked")){
                unanswered++;
                console.log(unanswered);
                
            }if($("#sixth").not("checked")){
                unanswered++;
                console.log(unanswered);
                
            }if($("#seventh").not("checked")){
                unanswered++;
                console.log(unanswered);
                
            }if($("#eighth").not("checked")){
                unanswered++;
                console.log(unanswered);
                
            }if($("#ninth").not("checked")){
                unanswered++;
                console.log(unanswered);
                
            }if($("#tenth").not("checked")){
                unanswered++;
                console.log(unanswered);
                
            }
        };
    




    
    
    check();




});