import axios from 'axios';

import LoaderContent from '../../img/loader.gif'

import Nav from '../../components/nav';
import Footer from '../../components/footer';

let Contato = {
  render: async () => {
    let view = `
      ${Nav}
      <div>
        <h1>Contato</h1>
        <div id="loader"></div>
        <form id="contact">
          <input type="text" id="name" placeholder="Seu nome">
          <input type="text" id="phone" placeholder="Seu telefone">
          <input type="submit" value="Enviar">
        </form>
      </div>
      ${Footer}
    `
    return view
  },
  after_render: async () => {
    let form = document.getElementById("contact")
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let loader = document.getElementById("loader")

      let userName = document.getElementById('name').value,
          userPhone = document.getElementById('phone').value

      loader.innerHTML = `
        <img src="${LoaderContent}" alt="loader">
      `
      axios.post('https://webhook.site/4c639737-c1c9-488d-a085-013d2a26e614', {
        name: userName,
        phone: userPhone
      })
      .catch( e => console.error(e) )
      .finally( () => loader.innerHTML = ``)
    })
  }
};

export default Contato;