function init_page() {
    const title = document.querySelector("#title_search");
    const page_title = document.querySelector("#page_title h1");
    const word_label = document.querySelector('label[for="word"]');
    const definition_label = document.querySelector('label[for="definition"]');
    const submit_btn = document.querySelector('input[type="submit"]');

    document.querySelector("#search_definition").value = "AHAHAHAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH";

    title.textContent = TITLE_SEARCHPAGE;
    page_title.textContent = TITLE_SEARCHPAGE;
    word_label.textContent = WORD_LABEL;
    definition_label.textContent = DEFINITION_LABEL;
    submit_btn.value = SEARCH_LABEL;
}

init_page();
