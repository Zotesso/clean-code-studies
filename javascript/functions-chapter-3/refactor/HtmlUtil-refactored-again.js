/*
  Código Refatorado do exemplo Listagem 3-2
  Listagem 3-3
  Melhorias:
   - Função menor ainda
   - Leitura e compreensão se torna extremamente simples
*/

const renderPageWithSetupsAndTeardowns = (pageData, isSuite) => {
  try {
   if (isTestPage(pageData)) {
    includeSetupAndTeardownPages(pageData, isSuite);
   }

   console.log('Função completa');
   return pageData.getHtml();
  } catch (error) {
    console.log(error);
  }
}

// A partir daqui colocarei apenas mocks das funções acima para o código se tornar executável.

class PageData {
  constructor() {};

  getHtml = () => {
    return '<h1>Hello</h1>';
  }
}

const includeSetupAndTeardownPages = (pageData, isSuite) => {
  return true;
}

const isTestPage = (pageData) => {
  return true;
}

const pageData = new PageData();
renderPageWithSetupsAndTeardowns(pageData, false);