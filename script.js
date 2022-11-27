let enter_encode = document.getElementById('enter_encode');

enter_encode.onclick = function () {
  
let encode = document.getElementById('encode').value;

console.log(encode);

let out_encode = window.btoa(encode);
let out_encode1 = window.btoa(out_encode);

let out_code = document.getElementById('out_code');

   out_code.innerHTML = out_encode1;

/*let out1 = document.getElementById('out1');

out1.innerHTML = ver_os;*/

};


let enter_decode = document.getElementById('enter_decode');

enter_decode.onclick = function () {
  
let decode = document.getElementById('decode').value;

console.log(decode);

let out_decoder = window.atob(decode);
let out_decode1 = window.atob(out_decoder);

let out_decode = document.getElementById('out_decode');

   out_decode.innerHTML = out_decode1;

/*let out1 = document.getElementById('out1');

out1.innerHTML = ver_os;*/

};




/*let text = "Hello World!";
let encoded = window.btoa(text);
let decoded = window.atob(encoded);

document.getElementById("demo").innerHTML = "Encoded: " + encoded + "<br>" + "Decoded: " + decoded;*/