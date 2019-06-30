class DateHelper {
    constructor() {
        throw Error("essa classe não pode ser instanciada pois ja possui todos os metodos static");
    }

    static textoParaData(texto){

        return new Date(texto.replace(/-/g, ","))
    }

    static dataParaTexto(data){
        
        return ` ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}