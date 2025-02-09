class Dictionary {
    constructor() {
        this.dictionary = new Map();
    }
    add_entry(word, definition) {
        this.dictionary.set(word, definition);
    }
    get_definition(word) {
        return this.dictionary.get(word);
    }
}
module.exports = Dictionary;