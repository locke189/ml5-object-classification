// import another component
import main from './js/main';
import sketch from './js/sketch';

// parcel hot module replacement
if (module.hot) {
  module.hot.accept();
}

main();
sketch()
