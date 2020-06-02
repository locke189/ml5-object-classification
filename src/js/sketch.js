import imagePath from '../assets/dog.jpg'


// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.

let s = ( sketch ) => {
  let classifier;

  // A variable to hold the image we want to classify
  let img;

  sketch.preload = () => {
    classifier = ml5.imageClassifier('MobileNet');
    img = sketch.loadImage(imagePath);
    console.log(img);
  }

  sketch.setup = () => {
    sketch.createCanvas(400, 400);
    classifier.classify(img, gotResult);
    sketch.image(img, 0, 0);
  }

  // A function to run when we get any errors and the results
  function gotResult(error, results) {
    // Display error in the console
    if (error) {
      console.error(error);
    } else {
      // The results are in an array ordered by confidence.
      console.log(results);
      sketch.createDiv(`Label: ${results[0].label}`);
      sketch.createDiv(`Confidence: ${sketch.nf(results[0].confidence, 0, 2)}`);
    }
  }
}


export default () => {
  let myp5 = new p5(s, 'p5sketch');
};
