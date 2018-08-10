function changingColor(){
    changeColor(block);
}

window.onload = function(){
        var block = document.querySelector('.block')  
        document.addEventListener('keydown', action);
        var h = 200;
        window.block = block;

        function changeColor (block) {
            block.style.backgroundColor = "#" + (Math.floor(Math.random()*999));
        }
    
        window.changeColor = changeColor;
    
}