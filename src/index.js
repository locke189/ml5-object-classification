// import another component
import main from './js/main';

// parcel hot module replacement
if (module.hot) {
  module.hot.accept();
}

main();
