class ImageSwitcher {
    element
    images = []
    index = 0
    speed = 5000
    backGroundImage = false

    constructor(elementID, images, backGroundImage = false) {
        this.element = document.getElementById(elementID)
        this.images = images
        this.backGroundImage = backGroundImage
        this.setNewImages()
        this.start()
    }

    setNewImages() {
        if (this.backGroundImage) {
            this.element.style.backgroundImage = `url('${this.images[this.index]}')`
        } else {
            this.element.src = this.images[this.index]
        }

        this.index++
        this.index = this.index % this.images.length
    }

    start() {
        setInterval(() => {
            this.setNewImages()
        }, this.speed)
    }
}

new ImageSwitcher('startBlock', [
    'assets/img/Rezepte_mit_rapsoel_mit Flasche cmyk.png',
    'assets/img/Kleeschulte-in-Bueren-Agrarhandel-Pellethandel-Speiseoele.jpg',
], true)

new ImageSwitcher('productionImages', [
    'assets/img/DSC01017.JPG',
    'assets/img/DSC01023.JPG',
    'assets/img/DSC01177.JPG',
    'assets/img/DSC01358.JPG'
], false)