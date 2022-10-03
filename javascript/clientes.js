let usuarios = [
  {
    id: 1,
    nombre: "alejandro",
    apellido: "otaiza",
    direccion: "cra 20",
    email: "alejandro@gmail.com",
    ciudad: "barranquilla",
  },
  {
    id: 2,
    nombre: "rosario",
    apellido: "martinez",
    direccion: "cra 90",
    email: "rosario@gmail.com",
    ciudad: "cali",
  },
  {
    id: 3,
    nombre: "jose",
    apellido: "perez",
    direccion: "cra 210",
    email: "perez@gmail.com",
    ciudad: "bogota",
  },
];



const listarCliente=()=>{
  let tabla=document.getElementById("cuerpotabla")
  let item="<tr> <th>ID</th> <th>NOMBRE</th> <th>APELLIDO</th> <th>DIRECCION</th> <th>EMAIL</th> <th>CIUDAD</th> </tr>";

  for (let i = 0; i < usuarios.length; i++) {

      item+=`<tr><td>${usuarios[i].id}</td><td>${usuarios[i].nombre}</td><td>${usuarios[i].apellido}</td><td>${usuarios[i].direccion}</td>
      <td>${usuarios[i].email}</td><td>${usuarios[i].ciudad}</td></tr>`;
  }
  
  tabla.innerHTML=item;
}

const crearCliente=()=>{
     
  let idCliente = document.getElementById("id").value;
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let direccion = document.getElementById("direccion").value;
  let email = document.getElementById("email").value;
  let ciudad = document.getElementById("ciudad").value;

  if (!idCliente.trim() || !nombre.trim() || !apellido.trim() || !direccion.trim() || !email.trim() || !ciudad.trim()) {
    alert("Datos incompletos");
    return
  }
    idVenta = parseInt(idVenta);

    let elemento=document.getElementById("cuerpotabla");
    
    elemento.innerHTML+=`<tr><td>${idCliente}</td><td>${nombre}</td><td>${apellido}</td>
    <td>${direccion}</td><td>${email}</td><td>${ciudad}</td></tr>`;
    
    const obj={
      id: idCliente,
      nombre: nombre,
      apellido: apellido,
      direccion: direccion,
      email: email,
      ciudad: ciudad,
    }
    usuarios.push(obj);
}

const eliminar=()=>{

  let idOption = parseInt(prompt('Digite el id a eliminar: '))
  usuarios = usuarios.filter(i => i.id !== idOption);

  console.log(usuarios);
}


function mostrarId(){
  try{

  let idOp = parseInt(prompt('Ingrese el Id del cliente a modificar: '));
  let copyClientes = usuarios.find((i) => i.id == idOp);

    if (copyClientes.id != idOp) {
        throw "Ha digitado un id inexistente"
    } 

      id.value = copyClientes.id
      nombre.value = copyClientes.nombre
      apellido.value = copyClientes.apellido
      direccion.value = copyClientes.direccion
      email.value = copyClientes.email
      ciudad.value = copyClientes.ciudad


  }catch(error){
      alert("Error: Ha digitado un id inexistente");
  }
  
}


const editar=()=>{
  
  let idCliente = document.getElementById("id").value;
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let direccion = document.getElementById("direccion").value;
  let email = document.getElementById("email").value;
  let ciudad = document.getElementById("ciudad").value;

  if (!idCliente.trim() || !nombre.trim() || !apellido.trim() || !direccion.trim() || !email.trim() || !ciudad.trim()) {
    alert("Datos incompletos");
    return
  }

  idCliente = parseInt(idCliente)
  let copyClientes = usuarios.find((i) => i.id == idCliente);

  if(copyClientes.id != idCliente){
    alert("El usuario no existe, ingrese un id existente.");
    return
  }
  
  copyClientes.id = idCliente;
  copyClientes.nombre = nombre;
  copyClientes.apellido = apellido;
  copyClientes.direccion = direccion;
  copyClientes.email = email;
  copyClientes.ciudad = ciudad;
}

function limpiar() {
  document.getElementById("id").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("email").value = "";
  document.getElementById("ciudad").value = "";
}

//CRUD Ventas

 //Final función validar

/*let copyCuentas = cuentas.find((i) => i.identificacion == opIdentificacion);*/





