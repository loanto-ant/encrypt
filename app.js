var slider = document.getElementById("slider");
var label = document.getElementById("label");
slider.oninput = function status() {
   label.innerHTML = slider.value;
};
function encrypt() {
   var txt = document.getElementById("eingabe").value;
   var codes = new Array();
   var verschiebung = parseInt(document.getElementById("slider").value);
   var v_ende = verschiebung;
   for (var i = 0; i < txt.length; i++) {
      codes[i] = txt.charCodeAt(i) + verschiebung;

      //Leerzeichen bleiben Leerzeichen
      if (codes[i] == 32 + verschiebung) {
         codes[i] = 32;
      }

      for (var v = verschiebung; v > 0; v--) {
         if (codes[i] == 122 + v) {
            codes[i] = 96 + v;
         }
         if (codes[i] == 90 + v) {
            codes[i] = 64 + v;
         }
      }
   }
   var txt2 = "";
   for (var i = 0; i < codes.length; i++) {
      txt2 = txt2 + String.fromCharCode(codes[i]);
   }
   document.getElementById("ausgabe").value = txt2;
}
