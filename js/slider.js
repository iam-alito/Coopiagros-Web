var imagenes=new Array(
        'img/1.JPG',
        'img/2.jpg',
        'img/3.jpg'
    );
function rotarImagenes()
    {
        
        var index=Math.floor((Math.random()*imagenes.length));
 
        
        document.getElementById("imagen").src=imagenes[index];

    }
    onload=function()
    {
        
        rotarImagenes();
 
        
        setInterval(rotarImagenes,3000);
    }