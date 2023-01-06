/*
  Código Ruim do exemplo Listagem 3-1
  Problemas:
    - Longo
    - Código Repetido
    - variáveis não descritivas
    - muitos tipos de dados diferentes
*/

const testableHtml = (pageData, includeSuiteSetup) => {
  try {
    wikiPage = pageData.getWikiPage();
    let buffer = '';
    const pageCrawlerImpl = new PageCrawlerImpl();
    if (pageData.hasAttribute("Test")) {
      if (includeSuiteSetup) {
        suiteSetup = pageCrawlerImpl.getInheritedPage(SuiteResponder.SUITE_SETUP_NAME, wikiPage);

        if (suiteSetup != null) {
          pagePath = suiteSetup.getPageCrawler().getFullPath(suiteSetup);
          pagePathName = PathParser.render(pagePath);
          buffer.concat(pagePathName);
        }
      }

      setup = pageCrawlerImpl.getInheritedPage("SetUp", wikiPage);

      if (setup != null) {
        setupPath = wikiPage.getPageCrawler().getFullPath(setup);
        setupPathName = PathParser.render(setupPath);
        buffer.concat(setupPathName);
      }
    }

    buffer.concat(pageData.getContent());

    if (pageData.hasAttribute("Test")) {
      teardown = pageCrawlerImpl.getInheritedPage("TearDown", wikiPage);
      if (teardown != null) {
        tearDownPath = wikiPage.getPageCrawler().getFullPath(teardown);
        tearDownPathName = PathParser.render(tearDownPath);
        buffer.concat(tearDownPathName);
      }

      if (includeSuiteSetup) {
        suiteTeardown = pageCrawlerImpl.getInheritedPage(SuiteResponder.SUITE_TEARDOWN_NAME, wikiPage);

        if (suiteTeardown != null) {
          pagePath = suiteTeardown.getPageCrawler().getFullPath(suiteTeardown);
          pagePathName = PathParser.render(pagePath);
          buffer.concat(pagePathName);
        }
      }
    }

    pageData.setContent(buffer.toString());
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

class PageCrawlerImpl {
  constructor() {};

  getInheritedPage = (suiteName, wikiPage) => {
    return null;
  }
}

const SuiteResponder = () => {
  const SUITE_SETUP_NAME = 'setup';
  const SUITE_TEARDOWN_NAME = 'teardown';
}

const pageData = new PageData();
testableHtml(pageData, false);