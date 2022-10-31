/**
 * Bài 1
 */
document.getElementById("ketqua").onclick = function(){
    var S = 0;
    var n = 0;
  
    
    while ( S < 10000){
        n++;
        S = S + n;
       
    }
   //console.log(n);
  //  console.log(S);
    document.getElementById("infob4").innerHTML = n;
};


/**
 * Bài 2
 */

 document.getElementById("btnTinhTong").onclick = function (){
    //lấy giá trị user nhập
var soX = document.getElementById("so1").value * 1;
var soN = document.getElementById("so2").value * 1;

var T = 1;
var S = 0;
var i = "";  
while(i <= soX)
{
     T = T * soX;
     S = S + T;
     i++;
     console.log(S);
}
document.getElementById("infob2").innerHTML = S;
}

/**
 * Tinh Giai thừa 1 số nhập vào
 * Ví dụ nhập vào số 5 . tính giai thừa sẽ là 1*2*3*4*5
 */
 document.getElementById("btnTinhGiaiThua").onclick = function(){
    var nhapSo = document.getElementById("nhapSo").value * 1;
    
        var giaithua = 1;
        var giatri = 1;
    
        while (giatri <= nhapSo) {
            giaithua *= giatri;
            giatri++;
        }
        document.getElementById("infob3").innerHTML = giaithua;
        
    };
