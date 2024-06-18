function onClickSubmitButton(){
    let inputValue = document.getElementById('inputText').value; 
    if(inputValue>0){
        alert('Hey the number is higher than zero!');
    }else if(inputValue<0){
        alert('Hey the number is less than zero!')
    }else{
        alert('Please try again')
    }
}