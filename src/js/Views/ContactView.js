function ContactView() {
    this.renderTable = function($el, data){
        let table = `<table class="js-table-contacts">
            <thead>
                <th>Contact name</th>
                <th>Remove</th>
            </thead>
            <tbody></tbody>
        </table>`;
        $el.append(table);
    }

    this.renderTableContent = function($el, data){
        $table = $el.find('.js-table-contacts tbody');
        $table.empty();
        data.forEach(function(e){
            let row = `<tr><td>${e.name}</td>`;
            row += `<td><a href="#" class="js-remove-contact" data-id="${e.id}">remove</a></td></tr>`
            $table.append(row);
        });
    }

    this.renderForm = function($el) {
        
        let form = `<form class="js-add-contact">
            <input type="text" class="js-contact-name" name="name" required/>
            <button type="submit">Add</button>
        </form>`;

        $el.append(form);

    }
}