function GalleryController(el, view, model, eventHandler){
    this.$el = $(el);
    this.view = view;
    this.model = model;

    this.init = function(){
        this.renderImg();
        this.bindEvents();
    }

    this.renderImg = function(){
        let img = this.model.createImages(3);
        this.view.renderImages(this.$el, img);
    }

    this.bindEvents = function(){
        this.$el.on("click", "img", (e) => { eventHandler.fire(e)} )
    }
}