
function sanitize(string){
    let sanitizedString = string.toLowerCase();
        sanitizedString = sanitizedString.replace(/[^A-Za-z]/g, '');
    return sanitizedString
}

if (require.main === module) {
}

module.exports = sanitize
