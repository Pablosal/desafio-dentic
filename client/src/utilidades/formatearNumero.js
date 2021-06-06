export const verificarDigitos = {
  validaEntero: function (value) {
    var RegExPattern = /[0-9]+$/;
    return RegExPattern.test(value);
  },

  formateaNumero: function (value) {
    if (verificarDigitos.validaEntero(value)) {
      var retorno = "";
      value = value.toString().split("").reverse().join("");
      var i = value.length;
      while (i > 0)
        retorno +=
          (i % 3 === 0 && i != value.length ? "." : "") +
          value.substring(i--, i);
      return retorno;
    }
    return 0;
  },
};
