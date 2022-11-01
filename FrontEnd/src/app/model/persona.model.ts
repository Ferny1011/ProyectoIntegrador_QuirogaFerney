export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    cv: string;
    descripcion: string;

    constructor(nombre: string, apellido: string, img: string, cv: string, descripcion: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.cv = cv;
        this.descripcion = descripcion;
    }
}