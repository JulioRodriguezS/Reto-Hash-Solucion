let diccionario = "acefimoprstuv"

/**
*Funcion que recibe una cadena de texto
*para convertirla en un numero entero
*/
let hash = (x) =>{
  let seed = 11
	let position = 0
	for(i = 0; i < x.length; i++) {
		for (e = 0; e < diccionario.length; e++)
      if (diccionario[e]==x[i])
				position = e
		seed = (seed * 23) + position
	}
	return seed
}


/**
*Funcion que desencripta el numero
*dado a partir de la cadena de texto
*inicial
*/
let dehash = (seed) => {
  let keyword = ""
  let keywordTemp = ""
  do{
	    for (i = 0; i < 13; i++){
          if (((seed - i) % 23) == 0){
            seed = (seed - i) / 23;
            keywordTemp += diccionario[i]
          }
	    }
	}while (seed > 11)

	for (e = keywordTemp.length - 2 ; e >= 0; e--)
	    keyword += keywordTemp[e]
	return keyword
}

window.onload = () =>{
	document.getElementById("secret").addEventListener('change', function(e){
		e.preventDefault()
		let secret = e.target.value;
		let hashing = hash(secret) 
		let dehashing = dehash(hashing)
		document.getElementById('hashing').value=`the generated hash is: ${hashing}`	
		document.getElementById('dehashing').value=`the decripted secred must be: ${dehashing}`	
	})	
}