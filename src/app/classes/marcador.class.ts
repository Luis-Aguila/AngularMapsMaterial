// Se crea la clase con opción de exportación
export class Marcador {
// Se inicializan las variables latitud y longitud de tipo numericos y publicos

    public lat: number;
    public lng: number;
// Se inicializan las variables titulo y descripción de tipo string y publicos
    public titulo = 'Sin Título';
    public desc = 'Sin Descripción';
// recibe y asignan los valores que recibe a las variables de clases
    constructor( lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }
}
