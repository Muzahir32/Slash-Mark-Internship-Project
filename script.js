function encryptText(){
    var inputText=document.getElementById("inputText").value;
    var encryptionKey=document.getElementById("encryptionKey").value;
    if(inputText&&encryptionKey){
        var ciphertext=CryptoJS.AES.encrypt(inputText,encryptionKey).toString();
        document.getElementById("outputText").value=ciphertext;
    }else{
        alert("Please enter text and encryption key.");
    }
}

function decryptText(){
    var ciphertext=document.getElementById("ciphertext").value;
    var decryptionKey=document.getElementById("decryptionKey").value;

    if(ciphertext&&decryptionKey){
        try{
            var bytes=CryptoJS.AES.decrypt(ciphertext,decryptionKey);
            var originalText=bytes.toString(CryptoJS.enc.Utf8);
            document.getElementById("decryptionOutput").value=originalText;
        }catch(error){
            alert("Decryption failed. Please check your decryption key.");
        }
    }else{
        alert("Please enter ciphertext and decryption key.");
    }
}
