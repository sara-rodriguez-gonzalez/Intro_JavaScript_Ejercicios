const ejercicio1 = [
    3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24,
  ];
  
  const ejercicio2 = [
    {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    },
  ];


  /* ******** Ejercicio 1 ******** */

  
  let band1 = false;

  
  for(i=0; i<ejercicio1.length; i++){
        j=ejercicio1[i]-1;
        //console.log(`Estamos en el ${ejercicio1[i]}.`);
        while(j!=1){
            if(ejercicio1[i] % j == 0){
                band1 = true;
                break;
            } else {
                band1 = false;
            }
            j--;
        }
        if(band1 == false){
            console.log(`El número ${ejercicio1[i]} es primo.`);
        }
    }


    /* ******** Ejercicio 2 ******** */

    
    ejercicio2.forEach(invitado => listainvitados(invitado));

    function listainvitados(invitado){
        if(invitado.esFamiliar == true){
            console.log(`${invitado.nombre} es invitado. Puede pasar.`)
        }
    }

    /* ******** Ejercicio 3 ******** */

    let a = 0, b = 1, ant = 0;
    for(i=0;i<50;i++){
        console.log(a);
        ant = a;
        a = a + b;
        b = ant;
    }


  

  

