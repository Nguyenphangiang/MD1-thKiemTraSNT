function kiemtraSNT(x){
    flag=true;
    for (let i = 2; i <= Math.sqrt(x) ; i++) {
        if (x%i==0){
            flag=false;
            break;
        }
    }return flag
}
function kiemtra(){
    let num= document.getElementById("inputN").value;
    let result=true;
    if (result === kiemtraSNT(num)){
        document.getElementById('result').innerHTML = num + "- là số nguyên tố"
    } else {
        document.getElementById("result").innerHTML = num + "- không phải là số nguyên tố"
    }
}