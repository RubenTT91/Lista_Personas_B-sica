const personas = [];

function mostrarPersonas(){
    console.log('método Mostrar personas Arriba');
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li> ${persona.nombre} ${persona.apellido} ${persona.edad} </li>`;
    }
    document.getElementById('personas').innerHTML = texto;

    
}


function agregarPersona(){
  const forma = document.forms['forma'];
  const nombre = forma['nombre'];
  const apellido = forma['apellido'];
  const edad = forma['edad'];
  const persona =new Persona(nombre.value,apellido.value,edad.value);
  personas.push(persona);
  mostrarPersonas();
  document.getElementById('nombre').value='';
  document.getElementById('apellido').value='';
  document.getElementById('edad').value = '';
}