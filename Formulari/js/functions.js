function showrespostes(tipus) {
			
			var op1= document.getElementById("resposta1");
			var op2= document.getElementById("resposta2");
			var op3= document.getElementById("resposta3");
			var op4= document.getElementById("resposta4");
			var op5= document.getElementById("resposta5");
			var lab4=document.getElementById("DragOp");
			var lab5=document.getElementById("DragOp2");
			var cat1=document.getElementById("cat1");
			var op1=document.getElementById("resposta1");
			
		 let selectedValue = tipus.options[tipus.selectedIndex].value;
		 let subForms = document.getElementsByClassName('subform')
			for (let i = 0; i < subForms.length; i += 1) {
				if(selectedValue=="Swipe"){
					 subForms[0].setAttribute('style', 'display:inline')
					 subForms[1].setAttribute('style', 'display:none')
					 subForms[2].setAttribute('style', 'display:inline')
					 subForms[3].setAttribute('style', 'display:inline')
					 op4.setAttribute('style', 'display:none')
					 op5.setAttribute('style', 'display:none')
					 lab4.setAttribute('style', 'display:inline')
					 lab5.setAttribute('style', 'display:inline')
					 
				}
				else if(selectedValue=="Drag-categories"||selectedValue=="Relació"){
					 subForms[0].setAttribute('style', 'display:inline')
					 subForms[1].setAttribute('style', 'display:none')
					 subForms[2].setAttribute('style', 'display:inline')
					 subForms[3].setAttribute('style', 'display:inline')
					 op4.setAttribute('style', 'display:inline')
					 op5.setAttribute('style', 'display:inline')
					 lab4.setAttribute('style', 'display:none')
					 lab5.setAttribute('style', 'display:none')
					 op1.required=true;
					 op2.required=true;
					 op3.required=true;
					 op4.required=true;
					 op5.required=true;

					 
				} 
				else if(selectedValue=="Filtre"){
					subForms[0].setAttribute('style', 'display:none')
					subForms[1].setAttribute('style', 'display:inline')
					subForms[2].setAttribute('style', 'display:none')
					subForms[3].setAttribute('style', 'display:inline')
					cat1.required=false;
					op1.required=false;

				}
				else if(selectedValue=="Opció múltiple"||selectedValue=="Ordenar"){
					 subForms[0].setAttribute('style', 'display:inline')
					 subForms[1].setAttribute('style', 'display:none')
					 subForms[2].setAttribute('style', 'display:none')
					 subForms[3].setAttribute('style', 'display:inline')
					 op4.setAttribute('style', 'display:inline')
					 op5.setAttribute('style', 'display:inline')
					 lab4.setAttribute('style', 'display:none')
					 lab5.setAttribute('style', 'display:none')
					 cat1.required=false;

				}
				else {
					subForms[0].setAttribute('style', 'display:none')
					subForms[1].setAttribute('style', 'display:none')
					subForms[2].setAttribute('style', 'display:none')
					subForms[3].setAttribute('style', 'display:none')
					op4.setAttribute('style', 'display:none')
					op5.setAttribute('style', 'display:none')
					lab4.setAttribute('style', 'display:none')
					lab5.setAttribute('style', 'display:none')
				
				} 

			}
		
	}
	
function Text_o_foto(opcio){
	
	 let selectedValue = opcio.options[opcio.selectedIndex].value;
	 
	if(selectedValue=="text"){
		document.getElementById("formtext").setAttribute('style', 'display:inline')
		document.getElementById("triatxtfot").setAttribute('style', 'display:none')
	}else if(selectedValue=="foto"){
		document.getElementById("formfot").setAttribute('style', 'display:inline')
		
		document.getElementById("triatxtfot").setAttribute('style', 'display:none')
	}
}
	
  function openWin(value) {
    window.open(value);
 }