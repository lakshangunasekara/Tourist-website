/* document.getElementById("nav").style.display="none"; */
document.getElementById("nav").style.height="0";
function myFunction(){
        if (document.getElementById("nav").style.height=="50px"){
            document.getElementById("nav").style.height="0";
            document.getElementById("log").innerText="|||";
            document.getElementById("log").style.paddingBottom="7px";
            document.getElementById("button").style.backgroundColor="rgba(6, 17, 37, 0.4)";

            
        }else{
            document.getElementById("nav").style.height="50px";
            document.getElementById("log").innerText="X";
            document.getElementById("log").style.paddingBottom="3px";
            document.getElementById("button").style.backgroundColor="rgb(6, 17, 37)";
        }
        document.getElementById("nav").style.transition="all 1s";
        document.getElementById("log").style.transition="all 1s";
        document.getElementById("button").style.transition="all 1s";
        /* if (document.getElementById("nav").style.display=="flex"){
            document.getElementById("nav").style.display="none";
            document.getElementById("log").innerText="|||";
            document.getElementById("log").style.paddingBottom="7px";
            document.getElementById("button").style.backgroundColor="rgba(6, 17, 37, 0.4)";

            
        }else{
            document.getElementById("nav").style.display="flex";
            document.getElementById("log").innerText="X";
            document.getElementById("log").style.paddingBottom="3px";
            document.getElementById("button").style.backgroundColor="rgb(6, 17, 37)";
        }
        document.getElementById("nav").style.transition="all 1s"
        document.getElementById("log").style.transition="all 1s"
        document.getElementById("button").style.transition="all 1s" */
        
    }