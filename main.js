// 各エレメントを取得
const elements = {
  inputFizz: document.getElementById('fizz_num_input'),
  inputBuzz: document.getElementById('buzz_num_input'),
  runButton: document.querySelector('.run_btn'),
  outputsItem: document.querySelector('.outputs_items'),
};


// runButtonを押すとイベント発動
elements.runButton.addEventListener('click', () => {
  // outputItem内にアイテムがあったら削除する関数
  resetElement();

  const inputFizzNumVal = Number(elements.inputFizz.value);
  const inputBuzzNumVal = Number(elements.inputBuzz.value);
  console.log(inputBuzzNumVal, inputFizzNumVal);

  // 1~99までの整数値か確認する関数
  isInteger(inputFizzNumVal, inputBuzzNumVal);

});

// outputItem内にアイテムがあったら削除
const resetElement = () => {
  while (elements.outputsItem.firstChild) {
    elements.outputsItem.removeChild(elements.outputsItem.firstChild);
  }
};

// 1~99までの整数値か確認する関数
const isInteger = (fizzNumVal, buzzNumVal) => {
  if (Number.isInteger(fizzNumVal) && Number.isInteger(buzzNumVal) && 0 < fizzNumVal && fizzNumVal < 100 && 0 < buzzNumVal && buzzNumVal < 100) {
    controlFizzBuzz(fizzNumVal, buzzNumVal);
  } else {
    let error = '1~99までの整数値で入力してください';
    let listElement = document.createElement('li');
    listElement.textContent = error;
    elements.outputsItem.appendChild(listElement);
  }
};

// fizzかbuzzか分ける関数
const controlFizzBuzz = (fizzNumVal, buzzNumVal) => {
  let listElement;
  for (let i = 1; i < 100; i++) {
    if (i % fizzNumVal === 0 && i % buzzNumVal === 0) {
      listElement = document.createElement('li');
      listElement.textContent = `FizzBuzz ${ i }`;
      elements.outputsItem.appendChild(listElement);
    } else if (i % fizzNumVal === 0) {
      listElement = document.createElement('li');
      listElement.textContent = `Fizz ${ i }`;
      elements.outputsItem.appendChild(listElement);
    } else if (i % buzzNumVal === 0) {
      listElement = document.createElement('li');
      listElement.textContent = `Fizz ${ i }`;
      elements.outputsItem.appendChild(listElement);
    }
  }
}
