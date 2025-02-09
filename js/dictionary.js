class Dictionary {
    constructor() {
        this.dictionary = new Map();
    }
    add_entry(word, definition) {
        if (!this.dictionary.has(word)) {
            this.dictionary.set(word, definition);
            return word;
        }
        else return null;
    }
    get_definition(word) {
        if (!this.dictionary.has(word)) return null;
        return this.dictionary.get(word);
    }
}
module.exports = Dictionary;