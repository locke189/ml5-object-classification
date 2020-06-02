// import another component
import main from './js/main';
import camera from './js/camera';
import videoClassifier from './js/videoClassifier1';

// parcel hot module replacement
if (module.hot) {
  module.hot.accept();
}

main();
camera();
videoClassifier();