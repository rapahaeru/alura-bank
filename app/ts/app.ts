const controller = new NegociacaoController();
// submit do form
$(".form").submit(controller.adiciona.bind(controller));
