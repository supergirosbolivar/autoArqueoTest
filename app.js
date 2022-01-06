/* const Quagga = require("./dependencies/quagga.min.js"); */

Quagga.init(
  {
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: document.querySelector("#interactive"),
      constraints: {
        width: 520,
        height: 400,
        facingMode: "environment" //"environment" for back camera, "user" front camera
      }
    },
    decoder: {
      readers: ["code_128_reader"]
    }
  },
  function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Initialization finished. Ready to start");
    Quagga.start();
    Quagga.onDetected(function (result) {
      alert("yes ")
      alert(result.codeResult.code)
      console.log(result.codeResult.code);
    });

    Quagga.offDetected((result) => {
      alert("no")
      console.log(result.codeResult.code);
    });
  }
);
