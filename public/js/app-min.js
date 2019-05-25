function ContactController(t,e,n,i){this.$el=$(t),this.view=e,this.model=n,this.init=function(){this.view.renderTable(this.$el),this.view.renderForm(this.$el),this.bindEvents(),this.showContacts(),this.subscribeEvents()},this.bindEvents=function(){this.$el.on("submit",".js-add-contact",this.createContact.bind(this)),this.$el.on("click",".js-remove-contact",this.deleteContact.bind(this))},this.createContact=function(t){t.preventDefault();let e=this.$el.find(".js-contact-name").val();this.model.create(e),this.showContacts()},this.deleteContact=function(t){t.preventDefault();let e=$(t.target).data("id");this.model.remove(e),this.showContacts()},this.showContacts=function(){let t=this.model.getAll();this.view.renderTableContent(this.$el,t)},this.addImgToContact=function(t){let e=$(t.target).attr("src");this.$el.find(".js-contact-name").val(`${e}`)},this.subscribeEvents=function(){i.subscribe(this.addImgToContact.bind(this))}}function GalleryController(t,e,n,i){this.$el=$(t),this.view=e,this.model=n,this.init=function(){this.renderImg(),this.bindEvents()},this.renderImg=function(){let t=this.model.createImages(3);this.view.renderImages(this.$el,t)},this.bindEvents=function(){this.$el.on("click","img",t=>{i.fire(t)})}}function ContactModel(){this.data=[{id:1,name:"Damir"},{id:2,name:"Mauricio"},{id:3,name:"Juan"}],this.autoIncrement=this.data.length+1,this.getAll=function(){return this.data},this.create=function(t){this.data.push({id:this.autoIncrement++,name:t})},this.remove=function(t){this.data=this.data.filter(e=>e.id!==t)}}function GalleryModel(){this.images=[],this.createImages=function(t){return["https://placekitten.com/250/250","https://placebear.com/250/250","https://placekitten.com/250/250"].forEach(t=>{this.images.push(`<img src=${t}></img>`)}),this.images}}function ContactView(){this.renderTable=function(t,e){t.append('<table class="js-table-contacts">\n            <thead>\n                <th>Contact name</th>\n                <th>Remove</th>\n            </thead>\n            <tbody></tbody>\n        </table>')},this.renderTableContent=function(t,e){$table=t.find(".js-table-contacts tbody"),$table.empty(),e.forEach(function(t){let e=`<tr><td>${t.name}</td>`;e+=`<td><a href="#" class="js-remove-contact" data-id="${t.id}">remove</a></td></tr>`,$table.append(e)})},this.renderForm=function(t){t.append('<form class="js-add-contact">\n            <input type="text" class="js-contact-name" name="name" required/>\n            <button type="submit">Add</button>\n        </form>')}}function GalleryView(){this.renderImages=function(t,e){e.forEach(e=>{t.append(e)})},this.selectImg=function(t){let e=$(t.target);console.log(e)}}function Subscribe(){this.handlers=[]}$(function(){let t=new Subscribe;$("[data-controller='Contact']").each(function(){new ContactController(this,new ContactView,new ContactModel,t).init()}),$("[data-controller='Gallery']").each(function(){let e=new GalleryView,n=new GalleryModel;new Subscribe;new GalleryController(this,e,n,t).init()})}),Subscribe.prototype={subscribe:function(t){this.handlers.push(t)},unsubscribe:function(t){this.handlers=this.handlers.filter(function(e){if(e!==t)return e})},fire:function(t){this.handlers.forEach(function(e){e(t)})},sub_unsub:function(t){-1!==this.handlers.indexOf(t)?this.unsubscribe(t):this.subscribe(t)}};