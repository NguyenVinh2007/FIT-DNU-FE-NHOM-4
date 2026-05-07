function hamCallback (ten){
    console.log("Xin chao: " + ten);
}
function chaoNam(ham){
    if (typeof ham == "function"){
    ham("Nam");
}
}
chaoNam(hamCallback);