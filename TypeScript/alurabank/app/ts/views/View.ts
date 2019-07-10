class View {

    public elemento: Element;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }
}