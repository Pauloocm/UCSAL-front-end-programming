
var Cor = {
    red: 1,
    greenYellow: 2
}

class Element{
    constructor(color, number){
        this.color = color;
        this.number = number;
    }
}

var leftArray = new Array();
var rightArray = new Array();

var count = 0;



function addLeft(){
    
    if(leftArray.length < 10){
        let element = new Element(Cor.red, ++count)
        leftArray.push(element);

        let showedHtml = createHtmlObjectsList(leftArray);

        document.getElementById(left).innerHTML = showedHtml;
    }else{
        document.getElementById(msg).innerHTML = 'LIMITE ESQUERDA EXCEDIDO';
    }
}

function addRight(){
    
    if(rightArray.length < 10){
        let element = new Element(Cor.greenYellow, ++count)
        leftArray.push(element);

        let showedHtml = createHtmlObjectsList(rightArray);

        document.getElementById(rigth).innerHTML = showedHtml;
    }else{
        document.getElementById(msg).innerHTML = 'LIMITE ESQUERDA EXCEDIDO';
    }
}

function createHtmlObjectsList(Array){
    let html = '';

    for(let element of Array){
        if(element.color == Cor.red){
            html += '<div class="left-el">'
            html += element.number + 'red';
            html += '</div>';
        }else{
            html += '<div class="right-el">'
            html += element.number + 'greenYellow';
            html += '</div>';
        }

        return html;
    }
}

function btnLeft(){
    console.log('Clicked on left button')
}

function btnRight(){
    console.log('Clicked on right button')
}