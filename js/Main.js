'use strict';

{
  // サイコロ
  document.querySelector('button').addEventListener('click', () =>{
    const h1 = document.querySelector('h1');
    let result = Math.floor(Math.random() * 6 + 1);
    h1.textContent = result;
  });
}



// {
//   document.querySelector('form').addEventListener('submit', e =>{
//     e.preventDefault();
//     console.log('submit!');
//   });
// }




// {
//   const text = document.querySelector('textarea');

//   text.addEventListener('focus', () =>{
//     console.log('focus!');
//   });

//   text.addEventListener('blur', () =>{
//     console.log('blur!');
//   });

//   text.addEventListener('input', () =>{
//     console.log(text.value.length);
//   });

//   text.addEventListener('change', () =>{
//     console.log('changed!');
//   });



// }



// {
//   document.querySelector('button').addEventListener('dblclick', () => {
//     console.log('double clicked!');
//   });

//   document.addEventListener('mousemove', e =>{
//     // console.log('moved!');
//     console.log(e.clientX, e.clientY);
//   });

//   document.addEventListener('keydown', e => {
//     console.log(e.key);
//   });
// }




// {
//   document.querySelector('button').addEventListener('click', () =>{
//     const colors = document.querySelectorAll('input');
//     const selectedColors = [];

//     colors.forEach(color => {
//       if(color.checked === true){
//         selectedColors.push(color.value);
//       };
//     });

//     const li = document.createElement('li');
//     li.textContent = selectedColors;
//     document.querySelector('ul').appendChild(li);
//   });
// }



// {
//   document.querySelector('button').addEventListener('click', () =>{
//     const colors = document.querySelectorAll('input');
//     let selectedColor;

//     colors.forEach(color => {
//       if(color.checked === true){
//         selectedColor = color.value;
//       }
//     });

//     const li = document.createElement('li');
//     const ul = document.querySelector('ul');

//     li.textContent = selectedColor;

//     ul.appendChild(li);

//   });
// }






// {
//   document.getElementById('select').addEventListener('click', () => {
//     const addLi = document.createElement('li');
//     const selectColor = document.querySelector('select');

//     addLi.textContent = `${selectColor.value} - ${selectColor.selectedIndex}`;

//     document.querySelector('ul').appendChild(addLi);
//   });
// }








// {

//   document.querySelector('button').addEventListener('click', () => {

  
//   const li = document.createElement('li');
//   const text = document.querySelector('input');

//   li.textContent = text.value;
//   document.querySelector('ul').appendChild(li);

//   text.value = '';
//   text.focus();

// });
// }














// {




  // document.querySelector('button').addEventListener('click', () => {

  //   const targetNode = document.getElementById('target')
    // targetNode.textContent = 'Changed!';
    // targetNode.title = 'Changed!';
    // targetNode.style.backgroundColor = 'skyblue';

    // targetNode.className = 'my-color';
    // targetNode.className = 'my-color my-border';
    // targetNode.classList.add('my-color');

    // if (targetNode.classList.contains('my-color') === true){
    //   targetNode.classList
    //   .remove('my-color');
    // } else {
    //   targetNode.classList
    //   .add('my-color');
    // };

    // targetNode.classList.toggle('my-color');

  // });


// }

// {

//   document.querySelector('button').addEventListener('click', () => {

//     const targetNode = document.getElementById('target')

//   targetNode.textContent = targetNode.dataset.transration;



//   // ---------ココからリスト追加------------
//   // const item2 = document.createElement('li');

//   // item2.textContent = 'item2';
//   // const ulNode = document.querySelector('ul');
//   // ulNode.appendChild(item2);

//   const item0 = document.querySelectorAll('li')[0];
//   const copy = item0.cloneNode(true);

//   const ulNode = document.querySelector('ul');
//   const item2 = document.querySelectorAll('li')[2];
//   ulNode.insertBefore(copy, item2);

//   const item1 = document.querySelectorAll('li')[1];
//   item1.remove();

// });

// }