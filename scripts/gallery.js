
function openImage(imgID) {

    var modal = document.getElementById("myModal");

    var img = document.getElementById(imgID);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = document.getElementById(imgID).src;
    captionText.innerHTML = document.getElementById(imgID).alt;
    modalImg.setAttribute("style", "filter: brightness(100%);");
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

}