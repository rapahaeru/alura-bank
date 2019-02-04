class MensagemView extends View {
  update(mensagem: string) {
    this._elemento.innerHTML = this.template(mensagem);
  }

  template(mensagem: string) {
    return `<p class="alert alert-info">${mensagem}</p>`;
  }
}
