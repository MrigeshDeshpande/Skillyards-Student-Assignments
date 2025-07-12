const input = document.getElementById("aditya");
const buttons = document.querySelectorAll(".buttons button")

for(var i =0;i < buttons.length ;i++)
{
	buttons[i].addEventListener("click",function(){
		var value = this.textContent;
		console.log(value);
		switch(value){
		case 'Clear':
			input.value=""
			break;

		case '=':
			try{
					input.value =eval(input.value)
			}catch (e){
					// input.value="Error"
				console.log(e)
			}
			break;

	  default:
	  	input.value= input.value+ value
	  	break
		}
	})
}
