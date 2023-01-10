/*
  Essa função se encontra na figura Listagem 3-6 e possui um grave efeito coleral
*/

class UserValidator {
  cryptographer = new Cryptographer();

  checkPassword(username, password) {
    const user = userGateway().findByName(username);
    if (user) {
      codedPhrase = user.getPhraseEncodedByPassword();
      phrase = cryptographer.decrypt(codedPhrase, password);

      if (phrase === "Valid Password") {
        // Aqui se encontra o efeito colateral, embora ela diga que irá apenas checar a senha, ela também inicia a sessão sem avisar
        Session.initialize();
        return true;
      }
    }
    return false;
  }
}
