// let xRate =

const usdPriceInGel = round(3.5, 2);
const boxPriceInUsd = 0.6;
const sqMetPriceInGel = round(usdPriceInGel * boxPriceInUsd, 2);
const margin = 0.4;

function round(number, digits) {
  const num = parseFloat(number.toFixed(digits));
  return num;
}

class InputValidator {
  constructor(input) {
    this.inputs = input;
    this.validator();
    this.launchDetector();
  }
  launchDetector() {
    console.log('validator launches')
  }

  validator() {
    // console.log(this.inputs)
    let i = 1;
    // console.log(this.inputs[0] ===!'ტიპის 0');
    while ( i < 4 ) {
      if (isNaN(this.inputs[i]) || (this.inputs[0] === 'ტიპი 0') ) {
        alert('გთხოვთ აიერჩიოთ ყუთის ტიპი და მიუთითოთ შესაბამისი პარამეტრები: სიგრძე, სიგანე და სიმაღლე');
        this.inputs = [];
        break;
      } else if (!(this.inputs[0].includes('ტიპი 0')) && (this.inputs[i] < 0) ) {
        // console.log(this.inputs[0],this.inputs[i])
        alert('გთხოვთ მიუთითოთ დადებითი ციფრები პარამეტრებში');
        this.inputs = [];
        break;
      }
      i++;
      let calc = new Calculator(this.inputs);
    }
    
  }
}


class PictureChanger {
  constructor(type) {
    this.type = type;
    this.clean();
    this.render();
  }

  imageHook = document.querySelector('.image');
  

  clean() {
    this.imageHook.innerHTML = '';
    
  }

  render() {
    switch (this.type) {
      case 'ტიპი 1':
        this.imageHook.innerHTML = `
      <img src="type 1.png"></img>
      `;
        break;
      case 'ტიპი 2':
        this.imageHook.innerHTML = `<img src="type 2.png"></img>`;
        break;
      case 'ტიპი 3':
        this.imageHook.innerHTML = `<img src="type 3.png"></img>`;
    }
  }
}


class Calculator {
  constructor(array) {
    (this.type = array[0]),
      (this.width = array[1]),
      (this.length = array[2]),
      (this.height = array[3]),
      this.calc();
  }

  priceHook = document.querySelector('#pricetag');

  cleaner() {
    this.priceHook.textContent = '';
  }

  calc() {
    let matLength;
    let matWidth;
    let useMatLength;
    let useMatWidth;
    let usabMatInSqM;
    let boxCost;
    let sellingPrice;
    switch (this.type) {
      case 'ტიპი 1':
        matLength = 80 + this.length * 2 + this.height * 2;
        matWidth = this.height * 2 + this.width;
        useMatLength = matLength + 50;
        useMatWidth = matWidth + 50;
        usabMatInSqM = useMatLength * (useMatWidth / 1000000);
        boxCost = usabMatInSqM * sqMetPriceInGel;
        sellingPrice = boxCost + margin;
        break;
      case 'ტიპი 2':
        matLength = this.length * 2 + this.height * 3;
        matWidth = this.height * 4 + this.width;
        useMatLength = matLength + 50;
        useMatWidth = matWidth + 50;
        usabMatInSqM = useMatLength * (useMatWidth / 1000000);
        boxCost = usabMatInSqM * sqMetPriceInGel;
        sellingPrice = boxCost + margin;
        break;
      case 'ტიპი 3':
        matLength = this.width * 2 + this.length * 2 + 50;
        matWidth = this.height * 2;
        useMatLength = matLength + 50;
        useMatWidth = matWidth + 50;
        usabMatInSqM = useMatLength * (useMatWidth / 1000000);
        boxCost = usabMatInSqM * sqMetPriceInGel;
        sellingPrice = boxCost + margin;
        break;
    }

    console.log('price is ' + round(sellingPrice, 2) + ' ლარი');

    this.priceHook.textContent = `ფასი: ${round(sellingPrice, 2)} ლარი`;
    document.getElementById('pricetag').style.backgroundColor =
      'rgb(0, 255, 8)';
  }
}

// let init = new Calculator('type1', 180, 160, 80)

let userInputs = [];

const submitBtn = document.querySelector('form');

submitBtn.addEventListener('submit', (event) => {
  event.preventDefault();
  userInputs.push(event.target[0].value);
  // console.log(userInputs)
  let i = 1;
  while (i < 4) {
    userInputs.push(parseInt(event.target[i].value));
    // userInputs.push(event.target[i].value)
    i++;
  }
  // console.log(userInputs)
  // console.log(event.target.[0].value)
  let validate = new InputValidator(userInputs)
  // let calc = new Calculator(userInputs);
  userInputs = [];
});

const typeSelector = document.querySelector('#box-type');

let currentType = typeSelector.value;
// console.log(currentType)

function typeRegister() {
  let buttonColorChanger = document.getElementById('box-type');
  buttonColorChanger.style.backgroundColor = 'white';
  buttonColorChanger.style.color = 'black';

  currentType = typeSelector.value;
  

  let launcher = new PictureChanger(currentType);   
}

function tempConsole() {
  console.log(currentType);
}

typeSelector.addEventListener('change', typeRegister);
typeSelector.addEventListener('change', tempConsole);
// typeSelector.addEventListener('change', )
// console.log()

// let something = new PictureChanger(typeSelector.value);

// typeSelector.addEventListener('change', new PictureChanger(typeSelector.value))

// console.log(imageHook)
