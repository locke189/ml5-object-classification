export default () => {

  const videoStream = document.querySelector("#videoElement");
  const label = document.querySelector(".webcam-stream__label");

  
  // Initialize the Image Classifier method with MobileNet
  const classifier = ml5.imageClassifier('MobileNet', videoStream, modelLoaded);

  // When the model is loaded
  function modelLoaded() {
    console.log('Model Loaded!');
    classify();
  }

  // Make a prediction with a selected image
  const classify = () => {
    classifier.classify((err, results) => {
      label.innerHTML = `${results[0].label} @ ${results[0].confidence}`;
      console.log(results);
      setTimeout(classify, 2000)
    });
    
  }

};
