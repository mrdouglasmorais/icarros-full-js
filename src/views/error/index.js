let Error = {
  render: async () => {
    let view = `
      <div>
        <h1>Error 404</h1>
      </div>
    `
    return view
  },
  after_render: async () => {}
};

export default Error;