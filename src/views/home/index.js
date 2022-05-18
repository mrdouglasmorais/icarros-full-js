import Nav from '../../components/nav';
import Footer from '../../components/footer';

let Home = {
  render: async () => {
    let view = `
      ${Nav}
      <div>
        <h1>Home page</h1>
      </div>
      ${Footer}
    `
    return view
  },
  after_render: async () => {}
};

export default Home;