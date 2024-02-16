//every section used function
function sectInnerText(elment, value) {
  const elmentd = document.getElementById(elment);
  const elmentVlue = (elmentd.innerText = value);
  const valued = parseInt(elmentVlue);
  return valued;
}
function priceSumed(element) {
  const elementd = document.getElementById(element);
  const elementValue = elementd.innerText;
  const prarsInit = parseInt(elementValue);
  return prarsInit;
}

//button click section
let countNume = 1;
let sum = 0;
const clickBtn = document.getElementsByClassName('buy-now');
for (const num of clickBtn) {
  num.addEventListener('click', function () {
    const clickValue = num.parentNode.parentNode.childNodes[1];
    const clickInnerText = clickValue.innerText;

    //add product name with contner text
    const contener = document.getElementById('contener');
    const p = document.createElement('p');
    p.innerText = countNume + '.' + clickInnerText;
    contener.appendChild(p);
    countNume++;
    //price section cliked ----

    const clickPrice =
      num.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    const PriceParsint = parseInt(clickPrice);
    sum = sum + PriceParsint;

    const TotalePriceValue = sectInnerText('TotalePrice', sum);
    //discount price set

    const btn = document.getElementById('applyDiscountCupon');
    btn.addEventListener('click', function () {
      const inputFileds = document.getElementById('inputFiled').value;
      const finldInput = inputFileds.split(' ').join('').toUpperCase();
      if (TotalePriceValue >= 200) {
        if (finldInput === 'SALE200') {
          const discount = TotalePriceValue * 0.2;
          const discountValue = sectInnerText('discountPrice', discount);
          const discountfilenValue = TotalePriceValue - discountValue;
          sectInnerText('discountTotalPrice', discountfilenValue);
        } else {
          alert('Invlide copun code ');
        }
      } else {
        alert('kors koren bahi ');
      }
    });
  });
}
