function clickBtn() {
    let name = prompt("あなたの名前は？","");
    let resultName = isVlidName(name);

    let old = Number(prompt("あなたの年齢は？",""));
    let resultOld = isVlidOld(old);

    if (resultName && resultOld) {
        let message = `名前：${name}。年齢：${old}。`
        alert(message);
    };
    
}

function isVlidName(name) {
    if (name == null) {
        alert("名前を入力してください。");
        return false;
    } else if (typeof name != "string") {
        alert("文字列で入力して下さい。");
        return false;
    } else {
        return true;
    }
}

function isVlidOld(old) {
    if (old == null) {
        alert("年齢を入力してください。");
        return false;
    } else if (typeof old != "NaN") {
        alert("数値で入力してください。");
        return false;
    } else {
        return true;
    }
}
