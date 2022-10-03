let facturas = [
    {
      id: 1,
      fecha: "20/2/2022",
      cliente: "alejandro",
      producto: "cuadro",
      cantidad: 3,
      valor_unitario: 20000,
      subtotal: 60000,
      neto_iva: 71400,
    },
    {
      id: 2,
      fecha: "20/2/2022",
      cliente: "rosario",
      producto: "acuarelas",
      cantidad: 2,
      valor_unitario: 10000,
      subtotal: 20000,
      neto_iva: 23800,
    },
    {
      id: 3,
      fecha: "20/2/2022",
      cliente: "jose",
      producto: "oleos",
      cantidad: 4,
      valor_unitario: 12000,
      subtotal: 24000,
      neto_iva: 28560,
    },
  ];

  const listarVentas=()=>{
    let tabla=document.getElementById("cuerpotabla")
    let item="<tr> <th>ID</th> <th>FECHA</th> <th>CLIENTE</th> <th>PRODUCTO</th> <th>CANTIDAD</th> <th>VALOR U</th><th>SUBTOTAL U</th> <th>NETO IVA</th></tr>" 
  
    for (let i = 0; i < facturas.length; i++) {
  
        item+=`<tr><td>${facturas[i].id}</td><td>${facturas[i].fecha}</td><td>${facturas[i].cliente}</td><td>${facturas[i].producto}</td>
        <td>${facturas[i].cantidad}</td><td>${facturas[i].valor_unitario}</td><td>${facturas[i].subtotal}</td><td>${facturas[i].neto_iva}</td></tr>`   
    }
    
    tabla.innerHTML=item;
  }

const crearVenta=()=>{
     
  let idVenta = document.getElementById("id").value;
  let fechaVenta = document.getElementById("fecha").value;
  let cliVenta = document.getElementById("cliente").value;
  let proVenta = document.getElementById("producto").value;
  let cantVenta = document.getElementById("cantidad").value;
  let valUnVenta = document.getElementById("valor_unitario").value;

  if (!idVenta.trim() || !fechaVenta.trim() || !cliVenta.trim() || !proVenta.trim() || !cantVenta.trim() || !valUnVenta.trim()) {
    alert("Datos incompletos");
    return
  }
    idVenta = parseInt(idVenta)

    let subtotalVenta = parseInt(cantVenta) * parseInt(valUnVenta);
    let neto_ivaVenta = parseInt(subtotalVenta) * 1.19;

    subtotalVenta.toFixed(2)
    neto_ivaVenta.toFixed(2)

    let elemento=document.getElementById("cuerpotabla")
    
    elemento.innerHTML+=`<tr><td>${idVenta}</td><td>${fechaVenta}</td><td>${cliVenta}</td>
    <td>${proVenta}</td><td>${cantVenta}</td><td>${valUnVenta}</td><td>${subtotalVenta}</td><td>${neto_ivaVenta}</td></tr>`
    
    const obj={
      id: idVenta,
      fecha: fechaVenta,
      cliente: cliVenta,
      producto: proVenta,
      cantidad: cantVenta,
      valor_unitario: valUnVenta,
      subtotal: subtotalVenta,
      neto_iva: neto_ivaVenta
    }
    facturas.push(obj)

    console.log(facturas)
}

const eliminar=()=>{

    let idOption = parseInt(prompt('Digite el id a eliminar: '))
    facturas = facturas.filter(i => i.id !== idOption)

    console.log(facturas)
}

function mostrarId(){
  try{

  let idOp = parseInt(prompt('Ingrese el Id del cliente a modificar: '));
  let copyVentas = facturas.find((i) => i.id == idOp);

    if (copyVentas.id != idOp) {
        throw "Ha digitado un id inexistente"
    } 

      id.value = copyVentas.id
      fecha.value = copyVentas.fecha
      cliente.value = copyVentas.cliente
      producto.value = copyVentas.producto
      cantidad.value = copyVentas.cantidad
      valor_unitario.value = copyVentas.valor_unitario


  }catch(error){
      alert("Error: Ha digitado un id inexistente");
  }
  
}

const editar=()=>{
  
  let idVenta = document.getElementById("id").value;
  let fechaVenta = document.getElementById("fecha").value;
  let cliVenta = document.getElementById("cliente").value;
  let proVenta = document.getElementById("producto").value;
  let cantVenta = document.getElementById("cantidad").value;
  let valUnVenta = document.getElementById("valor_unitario").value;

  if (!idVenta.trim() || !fechaVenta.trim() || !cliVenta.trim() || !proVenta.trim() || !cantVenta.trim() || !valUnVenta.trim()) {
    alert("Datos incompletos");
    return
  }

  idVenta = parseInt(idVenta)
  let copyVentas = facturas.find((i) => i.id == idVenta);

  if(copyVentas.id != idVenta){
    alert("El usuario no existe, ingrese un id existente.");
    return
  }

  let subtotalVenta = parseInt(cantVenta) * parseInt(valUnVenta);
  let neto_ivaVenta = parseInt(subtotalVenta) * 1.19;

    subtotalVenta.toFixed(2)
    neto_ivaVenta.toFixed(2)
  
  copyVentas.id = idVenta;
  copyVentas.fecha = fechaVenta;
  copyVentas.cliente = cliVenta;
  copyVentas.producto = proVenta;
  copyVentas.cantidad = cantVenta;
  copyVentas.valor_unitario = valUnVenta;
  copyVentas.subtotal = subtotal;
  copyVentas.neto_iva = neto_iva;
}

function limpiar() {
  document.getElementById("id").value = "";
  document.getElementById("fecha").value = "";
  document.getElementById("cliente").value = "";
  document.getElementById("producto").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("valor_unitario").value = "";
}