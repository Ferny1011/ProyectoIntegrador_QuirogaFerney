export class About {
    id?: number;
    titulo: string;
    subtitulo: string;
    img: string;

    constructor(titulo: string, subtitulo: string, img: string) {
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.img = img;
    }
}
