// 1)4 esas funksiyaniz olacaq(Topla(),Cixma(),Vurma(),Bolme()).Bir Callback funksiyaniz olacaq(Output()).Kalkulyator yazacaqsiz.Işləmə prinsipi aşağıdakı kimi olacaq.
// Switch case olacaq 4 ədəd.topla,cixma,vurma,bolme caseləri olacaq.Key olaraq bunlardan hər hansı biri seçilsə yuxarıdakı funksiyaları işlədəcək.


function Calculator(num1, num2, op, callback) {
    let result;

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Try Again Please';
    }

    return callback(result);
}

function rslt(result) {
    console.log(result);
}

Calculator(6, 2, '*', rslt);







// 2)Toplamda 3 funksiyaniz olacaq.Verilən arrayda ilk funksiyada tək ədədləri tapacaqsız.İkinci funksiyada bu tək ədədlərdən 3 və 5ə bölünənləri tapib Output funksiyasına göndərəcəksiz.

let newArr = []
let arr = [11, 12, 13, 15, 18, 45, 60]

function Tek(arr, callback) {

    newArr = arr.filter(x => x % 2 !== 0)

    return callback(newArr, Output)
}

Tek(arr, Bolunen)

function Bolunen(array, out) {

    netice = array.filter((bolme) => bolme % 15 == 0)
    return out(netice)
}


function Output(netice) {
    console.log(netice);
}










