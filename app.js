//   function formatText(command) {
//     if (command === 'bold' || command === 'italic') {
//       document.execCommand(command, true, null);
//     } else {
//       document.execCommand(command, false, null);
//     }
//   }


// function f1() {
//     document.getElementById(editor).style.textAlign = "Bold"
// }

// function f1() { 
// 	document.getElementsByClassName("editor").style.fontWeight = "bold"; 
// } 

// function f2() { 
// 	//function to make the text italic using DOM method 
// 	document.getElementsByClassName("editor").style.fontStyle = "italic"; 
// }

// function f2() { 
// 	//function to make the text italic using DOM method 
// 	document.getElementsByClassName("editor").style.fontStyle = "underline"; 
// }

function bold(){
    editor.style.fontWeight = "Bold";
   }
   
   function italic(){
       editor.style.fontStyle = "italic";
      }
   function underline(){
       editor.style.textDecoration = "underline";
      }
   function fontsize(){
       editor.style.fontSize= "50px";
      }