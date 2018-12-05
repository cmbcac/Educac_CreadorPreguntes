//	INSTRUCCIONES DE MODIFICACION:
/*
	AL HABER MODIFICADO CUALQUIER ELEMENTO DEL DOCUMENTO
	"index.html", SE TIENEN QUE LLEVAR A CABO LAS SIGUIENTES
	MODIFICACIONES:
	
	1. EN EL CASO DE HABER MODIFICADO CUALQUIER ELEMENTO DE TIPO
	   --id="respostaX"-- se tienen que cambiar todos los apartados
	   --document.getElementById("respostaX")-- que contengan el nombre
	   anterior al modificado
	2. EN EL CASO DE HABER MODIFICADO CUALQUIER ELEMENTO DE TIPO
	   --id="catX"-- se tienen que cambiar todos los apartados
	   --document.getElementById("catX")-- que contengan el nombre
	   anterior al modificado
	   
	!!!		AVISO	  !!!
	TODOS LOS NOMBRES DE LOS APARTADOS MENCIONADOS TIENEN QUE SER -EXACTAMENTE-
	IGUALES EN LOS SIGUIENTES FICHEROS/LUGARES:
		1. index.html
		2. supermain.js ( en la aplicacion de los cuestionarios )
		3. TODOS los spreadsheet de google
*/

function showrespostes(tipus){
	//Variables
	{
		var op1= document.getElementById("resposta1");
		var op2= document.getElementById("resposta2");
		var op3= document.getElementById("resposta3");
		var op4= document.getElementById("resposta4");
		var op5= document.getElementById("resposta5");
		var lab4=document.getElementById("DragOp");
		var lab5=document.getElementById("DragOp2");
		var cat1=document.getElementById("cat1");
		var op1=document.getElementById("resposta1");
	}
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
			op1.required=true;
			op2.required=true;
			op3.required=true;
			op4.required=false;
			op5.required=false;	 
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
		else if(selectedValue=="Filtre" || selectedValue == "Youtube"){
			subForms[0].setAttribute('style', 'display:none')
			subForms[1].setAttribute('style', 'display:inline')
			subForms[2].setAttribute('style', 'display:none')
			subForms[3].setAttribute('style', 'display:inline')
			cat1.required=false;
			op1.required=false;
			op2.required=false;
			op3.required=false;
			op4.required=false;
			op5.required=false;
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
function showtform(tipus){
 	let selectedValue = tipus.options[tipus.selectedIndex].value;
	if(selectedValue == "Fotos"){
		document.getElementById("infoFoto").setAttribute("style","display:inline");
		var x = document.getElementById("selecttipus");
		if(x.length==8){
			x.remove(5);
			x.remove(5);
			x.remove(5);

		}
	}else{
		document.getElementById("infoFoto").setAttribute("style","display:none");
		var x = document.getElementById("selecttipus");
		if(x.length==5){
			var y = document.createElement("option");
				y.text = "Filtre";
				y.value= "Filtre";
			x.add(y);
			var y = document.createElement("option");
				y.text = "Ordenar";
				y.value= "Ordenar";
			x.add(y);
			var z = document.createElement("option");
				z.text = "Youtube";
				z.value= "Youtube";
			x.add(z);
		}
	}
 }
function openWin(value){
    window.open(value);
}
function loadImageFileAsURL(){
    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0)
    {
		var fileToLoad = filesSelected[0];
		var fileReader = new FileReader();
		fileReader.onload = function(fileLoadedEvent) 
        {
            var textAreaFileContents = document.getElementById
            (
                "textAreaFileContents"
            );
            textAreaFileContents.value = fileLoadedEvent.target.result;
        };
        fileReader.readAsDataURL(fileToLoad);
    }
} 