// Importando lógica de rotas
import Utils from './service/Utils';

// importando páginas de
import Home from './views/home';
import ErrorPage from './views/error';

// routes
let routes = {
  '/': Home,
}

const router = async () => {
  const app = document.getElementById('app');
  let request = Utils.parseRequestURL();

  let parseURL = ( request.resource ? '/' + request.resource : '/') + ( request.id ? '/:id' + request.id : '' ) + (request.verb ? '/' + request.verb : '' );
  let page = routes[parseURL] ? routes[parseURL] : ErrorPage;

  app.innerHTML = await page.render();
  await page.after_render();
}

// observa mudanças na hash
window.addEventListener('hashchange', router);

// carregamento da página
window.addEventListener('load', router);