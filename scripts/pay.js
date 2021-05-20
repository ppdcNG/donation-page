
function get(id) {
  return document.getElementById(id);
}

const key = 'pk_test_436209c086483511b3d8cb318d158bf6b0c0e27e';
let paymentForm = get('paymentForm');
let chooseCurrencySection = get('choose-currency');
let selectAmountSection = get('select-amount');
let naira = get('naira');
let usd = get('usd');
let currency = get('currency');

let email = get('email');
let amount = get('amount');

let nairaBtn = get('payNaira');
let usdBtn = get('payUSD');

naira.addEventListener("click", processNaira, false);
usd.addEventListener("click", processUSD, false);

function showAmountSection() {
  chooseCurrencySection.style.display = 'none';
  selectAmountSection.style.display = 'block';
}
function goBack() {
  chooseCurrencySection.style.display = 'block';
  selectAmountSection.style.display = 'none';
  paymentForm.reset();
}


function processNaira() {
  showAmountSection();
  currency.innerText = "Naira";
  nairaBtn.style.display = 'block';
  usdBtn.style.display = 'none';
  paymentForm.addEventListener("submit", payNaira, false);
}

function processUSD() {
  showAmountSection();
  currency.innerText = "USD";
  nairaBtn.style.display = 'none';
  usdBtn.style.display = 'block';
  paymentForm.addEventListener("submit", payUSD, false);
}

function payNaira(evt) {
  evt.preventDefault();

  let handler = PaystackPop.setup({
    key: key,
    email: email.value,
    amount: parseInt(amount.value) * 100,
    onClose: function () {
      alert('Window closed.');
    },
    callback: function (response) {
      let message = 'Thank you for your donation!';
      alert(message);
      location.reload();
    }
  });

  handler.openIframe();
}

function payUSD(evt) {
  evt.preventDefault();

  let handler = PaystackPop.setup({
    key: key,
    email: email.value,
    amount: parseInt(amount.value) * 100,
    currency: 'USD',
    // label: "Optional string that replaces customer email"
    onClose: function () {
      alert('Window closed.');
    },
    callback: function (response) {
      let message = 'Thank you for your donation!';
      alert(message);
      location.reload();
    }
  });

  handler.openIframe();
}