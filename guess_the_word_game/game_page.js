player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " ; ";
document.getElementById("player2_name").innerHTML = player2_name + " ; ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("playerques").innerHTML = "Question Turn :" + player1_name ;
document.getElementById("playerans").innerHTML = "Answer Turn :" + player2_name ;

function send(){
   get_word = document.getElementById("word").value;
   word = get_word.toLowerCase();

   charAt1 = word.charAt(1);

   length_divide = Math.floor(word.length/2);
   charAt2 = word.charAt(length_divide);

   lenght_sub = word.length - 1;
   charAt3 = word.charAt(lenght_sub);

   remove_carat1 = word.replace(charAt1,"_");
   remove_carat2 = remove_carat1.replace(charAt2,"_");
   remove_carat3 = remove_carat2.replace(charAt3,"_");

   question_word = " <h4 id='word_display'> Q. " +remove_carat3+"</h4>";
   input_box = "<br>Answer : <input type='text' id='input_check_box' ";
   check_button = "<br> <br><button class='btm btm-info' onclick='check()' >Check</button>" ;
   row = question_word + input_box + check_button ;
   document.getElementById("output").innerHTML = row;
   document.getElementById("word").value = "";
 
}

 answer_turn = "player_2";
 qna_turn = "player_1";
function check()
{
   get_answer = document.getElementById("input_check_box").value;
   answer = get_answer.toLowerCase();
    
   if(answer == word)
   {
      if(answer_turn == "player_2"){
         player2_score = player2_score + 1;
         document.getElementById("player2_score").innerHTML = player2_score;
      }

      else
      {
         player1_score = player1_score + 1;
         document.getElementById("player1_score").innerHTML = player1_score;
      }

   }

   if(qna_turn == "player_1")
{
   qna_turn = "player_2";
   document.getElementById("playerques").innerHTML = "Question Turn :" + player2_name ;

}

else
{
   qna_turn = "player_1"
   document.getElementById("playerques").innerHTML = "Question Turn :" + player1_name ;
}

if(answer_turn == "player_2")
{
   answer_turn = "player_1";
   document.getElementById("playerans").innerHTML = "Answer Turn :" + player1_name ;
}

else
{
   answer_turn = "player_2";
   document.getElementById("playerans").innerHTML = "Answer Turn :" + player2_name ;
   
}

document.getElementById("output").innerHTML = "";

}
