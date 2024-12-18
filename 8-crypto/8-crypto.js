function encryption (password) {
    let code = [...password].reverse().join('');
    return code;
}

console.log(encryption('chocolate'));

function checkCode (password, codePassword) {
    const decryption = encryption(codePassword);
    return password === decryption;
}

console.log(checkCode('chocolate', 'etalocohc'));
console.log(checkCode('chocolate', 'etalcohc'));