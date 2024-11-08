
//   }

// ------ game logics -----

var forward = 0;
function abc() {
  // console.log(event.key);
  console.log(event.keyCode);

  var character = document.getElementById("character");
  var character2 = document.getElementById("character2");

  if(event.keyCode === 65){
    forward = forward + 10;
    character.style.left = forward + "px"
  }
  if(event.keyCode === 66){
    forward = forward - 10;
    character.style.left = forward + "px"
  }
  if(event.keyCode === 67){
    character.style.width = "160px"
    character.style.height = "160px"
    character.src = "images/iron-walk.gif"
    
  }
  if(event.keyCode === 68){
    character.style.width = "250px"
    character.style.height = "250px"
    character.src = "images/iron-gem.gif"
    
  }
  // if (event.keyCode === 37) {
  //   forward += 1;
  //   character2.style.right = forward + "%"
  // }
  // if (event.keyCode === 39) {
  //   forward -= 1;
  //   character2.style.right = forward + "%"
  // }
  // if (event.keyCode === 38) {
  //   forward += 1;
  //   character2.style.bottom = forward + "%"
  // }
  // if (event.keyCode === 40) {
  //   forward -= 1;
  //   character2.style.bottom = forward + "%"
  // }
  switch (event.keyCode) {
    case 37:
      forward += 1;
      character2.style.right = forward + "%"
      break;
      case 39:
        forward -= 1;
          character2.style.right = forward + "%"
      break;
      case 38:
        forward += 1;
   character2.style.bottom = forward + "%"
      break;
      case 40:
        forward -= 1;
     character2.style.bottom = forward + "%"
      break;
  
    default:
      console.log("thsi is not works");
      
      break;
  }
}

window.onkeydown = abc;
