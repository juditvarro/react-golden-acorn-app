const defaultStore = {
  counter: 0,
};

const acornReducer = (store = defaultStore, action) => {
  switch (action.type) {
    case 'EAT':
      return Object.assign({}, store,
        { counter: store.counter > 0 ? store.counter - action.counter : 0 });
    case 'BUY':
      return Object.assign({}, store, { counter: store.counter + action.counter });
    default:
      return store;
  }
};

export default acornReducer;
