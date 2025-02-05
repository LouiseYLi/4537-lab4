class StorePage {
    constructor() {
        this.init_page();

    }
    
    init_page() {
        const title = document.querySelector("#title_store");
        const page_title = document.querySelector("#page_title h1");
        const word_label = document.querySelector('#word_label');
        const definition_label = document.querySelector('#definition_label');
        const submit_btn = document.querySelector('input[type="submit"]');
    
        title.textContent = TITLE_STOREPAGE;
        page_title.textContent = TITLE_STOREPAGE;
        word_label.textContent = WORD_LABEL;
        definition_label.textContent = DEFINITION_LABEL;
        submit_btn.value = ADD_LABEL;

        submit_btn.addEventListener('click', this.add_word.bind(this));
    }

    add_word() {
        console.log("add word");
    }
    
}

const page = new StorePage();


