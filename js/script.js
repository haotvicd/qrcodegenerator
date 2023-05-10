const formEle = document.getElementById('form');
const qrcodeEle = document.getElementById('qrcode');

const generateQRCode = (e) => {
  e.preventDefault();
  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;

  if (url === '') {
    alert('Please enter url');
  } else {
    qrcodeEle.innerHTML = '';

    const qrcode = new QRCode(qrcodeEle, {
      text: url,
      width: size,
      height: size,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });

    qrcode.clear(); // clear the code.
    qrcode.makeCode("http://naver.com"); // make another code.
  }

}

formEle.addEventListener('submit', generateQRCode);