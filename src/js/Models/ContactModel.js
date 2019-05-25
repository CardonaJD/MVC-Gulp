function ContactModel(){
    this.data = [
        {id: 1, name: 'Damir'},
        {id: 2, name: 'Mauricio'},
        {id: 3, name: 'Juan'},
    ];

    this.autoIncrement = this.data.length +1;

    this.getAll = function (){
        return this.data;
    }

    this.create = function(name) {
        this.data.push({
            id: this.autoIncrement++,
            name: name
        });
    }

    this.remove = function(id){
        this.data = this.data.filter((obj) => obj.id !== id);
    }
}