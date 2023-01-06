/*
  Código Refatorado do exemplo Listagem 3-1
  Listagem 3-2
  Melhorias:
   - Função curta
   - Nomes declarativos
   - Tudo que poderia se tornar uma outra função se tornou
*/

const renderPageWithSetupsAndTeardowns = (pageData, isSuite) => {
  try {
   isTestPage = pageData.hasAttribute("Test");

   if (isTestPage) {
    testPage = pageData.getWikiPage();
    includeSetupPages(testPage, isSuite);
    const pageContent = pageData.getContent();
    includeTeardownPages(testPage, isSuite);
    pageData.setContent(pageContent);
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
  getWikiPage = () => {
    return 'wikiPage'
  }

  hasAttribute = (attributeName) => {
    return true;
  }

  getContent = () => {
    return 'content';
  }

  setContent = (buffer) => {
    return;
  }

  getHtml = () => {
    return '<h1>Hello</h1>';
  }
}

const includeSetupPages = () => {
  return true;
}

const includeTeardownPages = () => {
  return true;
}

const pageData = new PageData();
renderPageWithSetupsAndTeardowns(pageData, false);