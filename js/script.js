let num = +prompt('Enter number first')
let operator = prompt('Enter operator (+, -, *, /)')
let num2 = +prompt('Enter number second')
let result = 0

if( operator == '+'){
    alert(result = num + num2)
}else if(operator == '-'){
    alert(result = num - num2)
}else if(operator == '*'){
    alert(result = num * num2)
}else if(operator == '/'){
    alert(result = num / num2)
}else{
    alert('Error')
}

