/*
  Embora não se encontre no livro uma versão refatorada decidi eu mesmo fazer
*/

class UserValidator {
  cryptographer = new Cryptographer();

  getUserCodedPhrase(username) {
    try {
      const user = userGateway().findByName(username);
      const codedPhrase = user.getPhraseEncodedByPassword();

      return codedPhrase;
    } catch(e) {
      console.log(e);
    }
  }

  checkPassword(username, password) {
    const codedPhrase = getUserCodedPhrase(username);
    if (codedPhrase) {
      // Se estiver dentro de meu alcance, trocaria o retorno de decrypt
      // Pois validar sucesso contra uma string parece extremamente errado
      canDecrypt = cryptographer.decrypt(codedPhrase, password);
      return canDecrypt.success;
    }

    return false;
  }
}


// Dividi em duas funções, uma que pega o segredo do Usuário
// E a outra que propriamente realiza a checagem da senha, retornando se a tentiva de decryptar a senha foi um sucesso
// Retirei a responsabilidade de iniciar a sessão de dentro da função de checagem, essa deve ser feita fora, por exemplo:
const userValidator = new UserValidator();
const validPassword = userValidator.checkPassword('user', 'password');

if (validPassword) {
  Session.initialize();
}