class Persona{
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;

    }

    get nombre(){
        return this._nombre;
    }
    set nuevoNombre(nombre){
        this._nombre=nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set nuevoApellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set nuevaEdad(edad){
        this._edad = edad;
    }
}