function runScript(){
    var eleLabel = document.getElementsByTagName('label');
    for(var i=0; i < eleLabel.length; i++){
        if(eleLabel[i].innerText.indexOf('Role in Company') >= 0){
            if (!eleLabel[i].parentElement.getElementsByTagName('input')[0].value)
            eleLabel[i].parentElement.getElementsByTagName('input')[0].value="Developer";
        }
	else if (eleLabel[i].innerText.indexOf('Last Name') >= 0){
            if (!eleLabel[i].parentElement.getElementsByTagName('input')[0].value)
            eleLabel[i].parentElement.getElementsByTagName('input')[0].value="Hoang";
        }
	else if (eleLabel[i].innerText.indexOf('First Name') >= 0){
             if (!eleLabel[i].parentElement.getElementsByTagName('input')[0].value)
            eleLabel[i].parentElement.getElementsByTagName('input')[0].value="Hieu";
        }
	else if (eleLabel[i].innerText.indexOf('Address') >= 0){
             if (!eleLabel[i].parentElement.getElementsByTagName('input')[0].value)
            eleLabel[i].parentElement.getElementsByTagName('input')[0].value="TPHCM";
        }
	else if (eleLabel[i].innerText.indexOf('Email') >= 0){
             if (!eleLabel[i].parentElement.getElementsByTagName('input')[0].value)
            eleLabel[i].parentElement.getElementsByTagName('input')[0].value="abc@gmail.com";
        }
	else if (eleLabel[i].innerText.indexOf('Company Name') >= 0){
                if (!eleLabel[i].parentElement.getElementsByTagName('input')[0].value)
                eleLabel[i].parentElement.getElementsByTagName('input')[0].value="FIS";
            }
	else {
            if (!eleLabel[i].parentElement.getElementsByTagName('input')[0].value)
            eleLabel[i].parentElement.getElementsByTagName('input')[0].value="123456";
	}
} 
return 1;
}
runScript();

