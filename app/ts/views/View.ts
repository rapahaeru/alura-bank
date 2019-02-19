abstract class View<T> {
  protected _elemento: Element;

  constructor(seletor: string) {
    this._elemento = document.querySelector(seletor);
  }

  update(mensagem: T): void {
    this._elemento.innerHTML = this.template(mensagem);
  }

  abstract template(model: T): string;
}
