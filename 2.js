var text = document.getElementById("text");
text.addEventListener('mouseover', function(){
    text.style.color = "blue"
})
text.addEventListener('mouseleave', function(){
    text.style.color = "red"
})