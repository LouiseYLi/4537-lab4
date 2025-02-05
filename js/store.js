

function init_page() {
    const title = document.querySelector("#title_store");
    const page_title = document.querySelector("#page_title h1");
    const word_label = document.querySelector('label[for="word"]');
    const definition_label = document.querySelector('label[for="definition"]');
    const submit_btn = document.querySelector('input[type="submit"]');

    title.textContent = TITLE_STOREPAGE;
    page_title.textContent = TITLE_STOREPAGE;
    word_label.textContent = WORD_LABEL;
    definition_label.textContent = DEFINITION_LABEL;
    submit_btn.value = ADD_LABEL;
}

init_page();
