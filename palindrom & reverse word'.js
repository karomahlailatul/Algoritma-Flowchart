function cekhuruf(a) {
    valid = /^[A-Za-z ]{1,}$/;
    return valid.test(a);
}


function isPalindrom(kata) {
    try {
        if (kata == "") throw "Mohon isi input kata";
        if (!cekhuruf(kata)) throw "Kata bukan huruf mohon isi kembali";
        kata = kata.toLowerCase();
        var length = kata.length;
        for (var i = 0; i < length / 2; i++) {
            var dariDepan = kata[i];
            var dariBelakang = kata[length - i - 1];
            if (dariDepan != dariBelakang) {
                return console.log(`${kata} bukan kata palindrom`);
            }
            return console.log(`${kata} adalah kata palindrom`)
        }

    } catch (error) {
        console.log(error)
    }
};


isPalindrom('alam');


function isReverseWord(kalimat) {
    try {
        if (kalimat.indexOf(' ') <= -1) throw "Minimal 2 kalimat";
        if (kalimat == "") throw "Mohon isi input kalimat";
        if (!cekhuruf(kalimat)) throw "kalimat bukan huruf mohon isi kembali";
        reverse = kalimat.split(" ").reverse().join(" ");
        console.log(reverse);
    } catch (error) {
        console.log(error)
    }
};


isReverseWord('ayam makan');