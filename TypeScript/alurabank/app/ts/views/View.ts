namespace Views {
    export abstract class View<T> {

        protected elemento: Element;
    
        constructor(seletor: string) {
            this.elemento = document.querySelector(seletor);
        }
    
        update(model: T) {
            this.elemento.innerHTML = this.template(model);
        }
    
        template(model: T): string {
            throw new Error('é nessesario adicionar o metodo template');
        }
    }
}
