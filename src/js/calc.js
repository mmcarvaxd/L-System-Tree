function calc(initialText) {
    let finalText = '';

    for (let symbol of initialText) {
        let keys = Object.keys(rules)
        for (let axiom of keys) {
            let rule = rules[axiom]
            if (symbol == axiom) {
                finalText += rule;
                ismatch = 1;
                break;
            }

            else finalText += symbol;
        }
    }
    return finalText;
}