function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('app').querySelector('#nested').querySelector('.target');
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i=0; i<lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML)+n;
  }
}

function deepestChild(){
  return document.getElementById('app').querySelector('#grand-node').querySelector('div div div div')
}
