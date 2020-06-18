// JavaScript Document

/* Level One 

Instructions - All the code is here for a spooky store to be told. All you need to do is select the right elements and  connect the right events to the right functions so that: 

1.) When you click the Get In The Mood button, the overall atmosphere of the page changes to become more spooky. DONE
2.) When you type in the text box, you hear a scary sound effect. DONE
3.) When you click the Please, Please Don’t Click Me button, you get an angry message. DONE
4.) When you click the Tell Me What Happened! button, you find out how this spooky story ends. DONE

Completing this activity will earn you a maximum of 4/5 points for Lab Five. 

Thank you to Michael MacDonald for this activity - https://medium.com/young-coder/playing-with-javascript-events-be12f922736f 

*/

var personName = "";

//buttons
let spooky_button = document.querySelectorAll('button')[0];
let input_box = document.querySelector('#name');
let dont_click_btn = document.querySelectorAll('button')[1];
let tell_btn = document.querySelectorAll("button")[2];

//events
function complainMessage()
{
  alert("I told you not to do that " + personName);
}

function typeAndScream()
{
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
}

function goDark()
{
  var body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  }
  else {
    body.className = "";
  }
  
}

function finishTheStory()
{
  document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}

// set events
dont_click_btn.onclick = complainMessage;
input_box.oninput = typeAndScream; //oninput event call type and scream.
tell_btn.onclick = finishTheStory;
spooky_button.onclick = goDark; //changed spooky button to goDark()
