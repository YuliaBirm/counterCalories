const inputs = document.querySelectorAll("input[required]");

for (const input of inputs) {
    input.addEventListener("input", function() { // Добавляем обработчик события "input"
      const form = input.form; // Получаем саму форму
      const submit = form.querySelector("#button-submit"); // Получаем кнопку отправки
   
      let allValid = true; // Создаем флаг, который говорит о том, что все поля заполнены
   
      for (const input of inputs) {
        if (!input.validity.valid) { // Проверяем каждое обязательное поле
          allValid = false;
          break; // Если одно из полей невалидно, то цикл прерывается
        }
      }
   
      if (allValid) {
        submit.removeAttribute("disabled"); // Если все поля заполнены, то кнопка активируется
      } else {
        submit.setAttribute("disabled", ""); // Если даже одно поле не заполнено, то кнопка остается неактивной
      }
    });
};



var submitEvent = function(){

  document.getElementById("result").classList.remove("counter__result--hidden");

  let k = 1;

  if (document.getElementById('activity-minimal').checked) {
    k = 1.2;
  };  
  if (document.getElementById('activity-low').checked) {
     k = 1.375;
  };  
  if (document.getElementById('activity-medium').checked) {
    k = 1.55;
  }; 
  if (document.getElementById('activity-high').checked) {
    k = 1.725;
  };
  if (document.getElementById('activity-maximal').checked) {
    k = 1.9;
  };

  let weight = Number(document.getElementById('weight').value);
  let age = Number(document.getElementById('age').value);
  let height = Number(document.getElementById('height').value);
  let n;

  if (document.getElementById('gender-female').checked) {
    n = 10 * weight + 6.25 * height - 5 * age - 161;
  } else {
    n = 10 * weight + 6.25 * height - 5 * age + 5;
  };

  let caloriesNorm;
  let caloriasMore;
  let caloriasLess;

  caloriesNorm = n * k;
  caloriasMore = (n * k) + ((n * k) * 15 / 100);
  caloriasLess = (n * k) - ((n * k) * 15 / 100);

  document.getElementById("calories-norm").innerHTML = caloriesNorm;
  document.getElementById("calories-maximal").innerHTML = caloriasMore;
  document.getElementById("calories-minimal").innerHTML = caloriasLess;
};


