const listaSuper = document.getElementsById("Lista-super");
const input = document.getElementById("input-lista");
const botonAgregar = document.getElementById("boton-agregar");

botonAgregar.addEventListener("cick", onClickAdd);
input.addEventListener("input", onTypeList);

function onClickAdd() {
    const li = createListItem(input.value);
    listaSuper.appenChild(li);
    input.value = "";
    botonAgregar.disabled = true;
}

function onClickAdd() {
    const li = createListItem(input.value);
    listaSuper.appenChild(li);
    input.value = "";
    botonAgregar.disabled = true;
}

function onTypeList() {
    botonAgregar.disabled = input.value.length === 0;
}

function guardar(){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto Agregado Con Exito",
        showConfirmButton: false,
        timer:1500
    })
}

function createListItem(name) {
    const listItem = document.createElement("li");
    const heading = document.createElement("span");
    heading.textContent = name;
    const botonEliminar = document.createElement("button");

    listItem.classList.add("lista-item");
    botonEliminar.textContent = "X";
    botonEliminar.id = "boton-eliminar";
    botonEliminar.addEventListener("click", onClickDelete);

    listItem.appendChild(heading);
    listItem.appenChild(botonEliminar);

    return listItem;
}

function onClickDelete() {
    this.parentNode.remove();
}