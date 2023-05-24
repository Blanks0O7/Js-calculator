let expression = ''


function calculator(button){
    
    var tfield = document.getElementById("field1")
    expression += button.value
    tfield.value = expression

}

function handleEqualsTo(){

    try{
        var tfield = document.getElementById("field1")
        expression = eval(expression)
        tfield.value = expression
    }
    catch(e){
        console.log(e)
    }
}


function clearScreen(){
    expression=''
    document.getElementById("field1").value = expression
}



