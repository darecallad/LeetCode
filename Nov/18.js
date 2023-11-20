class RealImage {
  constructor(filename) {
    this.filename = filename;
    this.loadImage();
  }

  loadImage() {
    console.log(`load image: ${this.filename}`);
  }
  display() {
    console.log(`display image: ${this.filename}`);
  }
}

class ImageProxy {
  constructor(filename) {
    this.filename = filename;
    this.image = null;
  }

  display() {
    if (this.image === null) {
      this.image = new RealImage(this.filename);
    }
    this.image.display();
  }
}

const image = new ImageProxy(`example.jpg`);
image.display();

class ActualObject {
  constructor(filename) {
    this.filename = filename;
    this.loadImage();
  }

  loadImage() {
    console.log(`loading image: ${this.filename}`);
  }
  displayImage() {
    console.log(`display image: ${this.filename}`);
  }
}

class ProxyObject {
  constructor(filename) {
    this.filename = filename;
    this.image = null;
  }
  display() {
    if (this.image === null) {
      this.image = new ActualObject(this.filename);
    }
    this.image.displayImage();
  }
}

const immmage = new ProxyObject(`exmaple.jgp`);
immmage.display();

class realObject {
  constructor(filename) {
    this.filename = filename;
    this.loading();
  }
  loading() {
    console.log(`loading : ${this.filename}`);
  }
  display() {
    console.log(`display: ${this.filename}`);
  }
}

class ProxyObject {
  constructor(filename) {
    this.filename = filename;
    this.image = null;
  }

  display() {
    if (this.image === null) {
      this.image = new realObject(this.filename);
    }
    this.image.display();
  }
}

const testImage = new ProxyObject(`exmaple.jpg`);
testImage.display();

class RImage {
  constructor(filename) {
    this.filename = filename;
    this.loading();
  }
  loading() {
    console.log("in loading function");
  }
  display() {
    console.log(`inside RImage class:  ${this.filename}`);
  }
}

class PImage {
  constructor(filename) {
    this.filename = filename;
    this.image = null;
  }
  displayInProxy() {
    if (this.image === null) {
      this.image = new RImage(this.filename);
    }
    this.image.display();
  }
}

const test111 = new PImage(`exmaple.jpg`);
test111.displayInProxy();
