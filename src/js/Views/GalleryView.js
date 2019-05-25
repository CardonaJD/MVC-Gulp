function GalleryView() {
    this.renderImages = function($el, img){
        img.forEach(img => {
            $el.append(img);
        });
    }

    this.selectImg = function(e){
        let img = $(e.target);
        console.log(img)
    }
}