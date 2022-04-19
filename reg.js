var submit_div = document.getElementById("sales");

function buy(){

submit.innerHTML = 'Спасибо за покупку! <input type="button" value="Отменить покупку" onclick="cancel()" />';

}

function cancel(){

submit.innerHTML = 'Купи меня! <input type="button" value="Купить" onclick="buy()" />';

}
