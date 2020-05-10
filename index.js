module.exports = {
    fix(arg) {
        let fixed = arg.split('şey').join(' şey');
        return fixed;
    }
}