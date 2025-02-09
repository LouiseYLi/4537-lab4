class SearchPage {
    constructor() {
        this.init_page();
    }
    init_page() {
        const title = document.querySelector("#title_search");
        const page_title = document.querySelector("#page_title h1");
        const word_label = document.querySelector('#word_label');
        const definition_label = document.querySelector('#definition_label');
        const submit_btn = document.querySelector('input[type="submit"]');
    
        title.textContent = TITLE_SEARCHPAGE;
        page_title.textContent = TITLE_SEARCHPAGE;
        word_label.textContent = WORD_LABEL;
        definition_label.textContent = DEFINITION_LABEL;
        submit_btn.value = SEARCH_LABEL;

        submit_btn.addEventListener('click', this.search_word.bind(this));
    }

    search_word() {
        this.reset_page();
        const word = document.querySelector("#word").value;
        
        if (!this.validate_string(word) || word.includes(" ")) {
            this.display_err("#error_message_word", ERR_INVALID_WORD);
            return;
        }

        const xhr = new XMLHttpRequest();
        xhr.open("GET", `http://localhost:8080/api/dictionary/?word=${word}`);
        xhr.send();
        xhr.onreadystatechange = () => {
            // if request was fully sent or error occurred
            if (xhr.readyState == 4) {
                if (xhr.responseText === ERR_WORD_NOT_FOUND) {
                    this.display_err("#error_message_word", xhr.responseText);
                } else {
                    this.display_search_result(xhr.responseText);
                }
                return;
            }
        };
    }
    reset_page() {
        event.preventDefault();
        document.querySelector("#submit_status").textContent = "";
        document.querySelector("#error_message_word").textContent = "";
        document.querySelector("#search_definition").textContent = "";
    }

    validate_string(str) {
        if (str.length == 0) {
            return false;
        }

        for (let i = 0; i < str.length; i++) {
            if(!((/[a-zA-z' ']/).test(str[i]))) {
                return false;
            }
        }
        return true;
    }
    display_err(id, msg) {
        document.querySelector(id).textContent = msg;
    }

    display_send_status(msg) {
        document.querySelector("#submit_status").textContent = msg;
    }

    display_search_result(msg) {
        document.querySelector("#search_definition").textContent = msg;
    }
}

const page = new SearchPage();


