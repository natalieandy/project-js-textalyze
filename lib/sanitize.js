
function sanitize(string){
    let sanitizedString = string.toLowerCase()
    console.log(sanitizedString)
    return sanitizedString
}

if (require.main === module) {
}

module.exports = sanitize