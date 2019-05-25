$(function(){
    let events = new Subscribe();
    $("[data-controller='Contact']").each(function() {
        let view = new ContactView();
        let model = new ContactModel();
        let ctrl = new ContactController(this, view, model, events);
        ctrl.init();
    });

    $("[data-controller='Gallery']").each(function(){
        let view = new GalleryView();
        let model = new GalleryModel();
        let subscribe = new Subscribe();
        let ctrl = new GalleryController(this, view, model, events);
        ctrl.init();
    })
});