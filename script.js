function input(char){
    const textbox=document.getElementById("txt");
    if(char==='c'){
     textbox.value="";
    }
    else if(char==='='){
        const result=eval(textbox.value);
        textbox.value=result;
    }
    else{
        textbox.value=textbox.value+char;

    }
    

}