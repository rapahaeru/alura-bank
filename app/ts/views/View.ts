declare var $: any;
abstract class View<T> {
  protected _elemento: any;

  constructor(seletor: string) {
    this._elemento = $(seletor);
  }

  update(mensagem: T): void {
    this._elemento.html(this.template(mensagem));
  }

  abstract template(model: T): string;
}
