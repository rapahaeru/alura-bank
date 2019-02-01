class Negociacoes {
  private _negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  paraArray(): Negociacao[] {
    // programacao defensiva
    return [].concat(this._negociacoes);
  }
}
