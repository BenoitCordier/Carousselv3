class Diaporama {

    constructor(imgElem, images) {
        this.imgElem = imgElem;
        this.images = images;
        this.position = 0;
        this.start();
    }
    slideLeft() {
        if (this.position <= 0) {
            this.position = this.images.length - 1;
        } else {
            this.position--;
        }
        // this is part of the 'bridge' between "caroussel.js" and the DOM
        this.imgElem.src = this.images[this.position];
    }
    slideRight() {
        if (this.position >= this.images.length - 1) {
            this.position = 0;
        }
        else {
            this.position++;
        }
        // this is part of the 'bridge' between "caroussel.js" and the DOM
        this.imgElem.src = this.images[this.position];
    }
    start() {
        // this is part of the 'bridge' between "caroussel.js" and the DOM
        this.imgElem.src = this.images[this.position];
    }

}
