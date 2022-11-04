export class Projects {
    id?: number;
    nombre: string;
    categoria: string;
    fecha: string;
    img: string;
    url: string;

    constructor(nombre: string, categoria: string, fecha: string, img: string, url: string) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.fecha = fecha;
        this.img = img;
        this.url = url;
    }
}
