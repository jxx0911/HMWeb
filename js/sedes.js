const sedes = document.querySelector('#sedes');
let div = document.createElement('div');

class sedeTrux {
    constructor(telefono, correo, direccion) {
        this._telefono = telefono;
        this._correo = correo;
        this._direccion = direccion;
    }

    get telefono() {
        return this._telefono
    }

    set telefono(telefono) {
        this._telefono = telefono;
    }

    get correo() {
        return this._correo
    }

    set telefono(correo) {
        this._correo = correo;
    }

    get direccion() {
        return this._direccion
    }

    set telefono(direccion) {
        this._direccion = direccion;
    }
}