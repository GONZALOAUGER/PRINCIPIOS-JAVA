class Userapp {
    constructor{nombres, apellido, libros, mascotas} {
    this.nombre = nombres
    this.apellido = apellido
    this.libro = libros
    this.mascota = mascota

}
// Metodos de usuario
geFullName(){
    return ` El nombre de usuario es: ${this.nombre} ${this.apellido} `
}
//Agrego mascota del usuario
addMascota(){
    let nuevaMascota = prompt("Ingresa el nombre de una nueva mascota")
    return this.mascota.push(nuevaMascota)

}
//Cantidad de mascotas que posee
countMascotas(){
    return this.mascota.lenght

}
// Se agregan libros
addBook(titulo,autor){
    this.LIBROS.PUSH({Titulo:titulo, Autor:autor})
    console.log(`Se agregó el libro "${titulo}" de ${autor} a la lista de libros de ${this.nombre}${this.apellido}`)
}
getBookNames(){
    let titulos =[]
    this.libros.forEach(libro=>
        titulos.push(libro.Titulo));
        return console.log (`Los nombres de los libros de ${this.nombre}${this.apellido}son:"${titulos}`)
}
// Se agregan nombres y autores de libros
let peyn = new userapp("Peyn Auger", "Nilta",
    [{
            nombre: "El señor Peyn",
            autor: "Nilta"},
    {       nombre: "Serenata del señor",
             autor: "Mario Tinter"}],
            ["Cirio", "Mateko"]);
//metodo getFullName
console.log(peyn.getFullName(peyn.nombre, peyn,apellido))

peyn.addMascota()
console.log(peyn.Mascota)
console.log(peyn.countMascotas())
