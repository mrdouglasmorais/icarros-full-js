import Nav from '../../components/nav';
import Footer from '../../components/footer';
import ImagemQualquer from '../../img/logo.jpeg'

let Home = {
  render: async () => {
    let view = `
      ${Nav}
      <div class="container">
        <h1>Home page</h1>

        <div class="card">
          <p class="__title">Este é o meu CARD</p>
          <img class="image" src="${ImagemQualquer}" alt="">
          <button class="button _success">Clique aqui que nada acontece</button>
        </div>

      </div>
      ${Footer}
    `
    return view
  },
  after_render: async () => {}
};

export default Home;