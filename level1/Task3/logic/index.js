// calculating functions
let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string)
        document.getElementById("display").value = string;

        }
        else if(e.target.innerHTML == 'C'){
            string = "(Coped!!!)"
        document.getElementById("display").value = string;

        }
        else if(e.target.innerHTML == 'CE'){
            string = ""
        document.getElementById("display").value = string;

        }
        else if(e.target.innerHTML == '%'){
            string = string + "/100"
        document.getElementById("display").value = string;

        }             
        else if(e.target.innerHTML == '*'){
            string = string + "*"
        }        
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.getElementById("display").value = string;
        }
    })
});