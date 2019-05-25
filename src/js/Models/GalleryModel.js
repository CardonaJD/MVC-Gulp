function GalleryModel(){
    this.images = []; 
    this.createImages = function(N){
        let imgSrc = ['https://placekitten.com/250/250','https://placebear.com/250/250','https://placekitten.com/250/250'] 
        
        imgSrc.forEach(src => {
            this.images.push(`<img src=${src}></img>`)
        })
        return this.images;
    }
}
