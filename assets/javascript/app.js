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
            startTimer();
            setTimeout(gameover, 120000);
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
            
            



        });
    };

    submit();


    $("#timer").html( 02 + ":" + 00);
   
  
  
  function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
    

    
    

    
    document.getElementById('timer').innerHTML =
      m + ":" + s;
    setTimeout(startTimer, 1000);
  }
  
  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
  }

  
    
  


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



    



    
    
    check();
        function gameover(){
            $(this).removeClass("button", "btn-block");
            $(this).empty();
            $("#game").hide();
            $("#body").hide();
            $(".col-md-12").hide();
            $("#score").show();
            $("#correct").html("Correct:  " + correct);
            $("#wrong").html("Missed:  " + missed);
            unchecked();
        }


    

       function unchecked(){
           var unanswered = 10 - correct - missed;
           $("#unanswered").html("Unanswered: " + unanswered);
        }

});