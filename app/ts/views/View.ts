class View<T> {
  protected _elemento: Element;

  constructor(seletor: string) {
    this._elemento = document.querySelector(seletor);
  }

  update(mensagem: T): void {
    this._elemento.innerHTML = this.template(mensagem);
  }

  template(model: T): string {
    throw new Error("Faltou implementar o método componente");
  }
}
