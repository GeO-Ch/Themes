let darkBtn = document.getElementById('darkBtn');


darkBtn.addEventListener('click', function(){
    var div = document.getElementById("theme_flex");
    div.classList.toggle("dark_flex");
});
