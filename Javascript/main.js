/*const fruits =[10,90,20,1];


fruits.push(10);

console.log(Array.isArray(fruits));
console.log(fruits.indexOf('grapes'));

console.log(Math.max.apply(null,fruits));


console.log(fruits);*/
/*const Person={
    firstName:'Jash',
    LastNmae:'Shah',
    age:30,
    hobbies:['music','movies','sports'],
    address:{
        street:'50 min Strret',
        city:'Boston',
        State:'MA'
    }
}
//console.log(Person.hobbies[1]);
const { firstName,LastNmae,address:{State}} = Person;
console.log(State); 
Person.choices = [10,20,30];
console.log(Person);*/

/*const todos=[
    {
        id:1,
        text:'Take Test',
        isCompleyted:true
    },
    {
        id:2,
        text:'Meeting',
        isCompleyted:true
    },
    {
        id:3,
        text:'Dentist ',
        isCompleyted:false
    },
];
console.log(todos);
 
console.log(todos[0].text.toUpperCase());
const todoJson = JSON.stringify(todos);
console.log(todoJson);

for (todo of todos){
    console.log(todo.id);
}
//forEach,map,Filter
/*todos.forEach(function(todo){
console.log(todo.text);


});*/


/*const todoText = todos.map(function(todo){
return todo.text;

});
console.log(todoText)*/

/*const todoText = todos.filter(function(todo){

return todo.isCompleyted == true;

}).map(function(todo){
    return  todo.id;
});
console.log(todoText);*/
  
/*const  addNums=(num1,num2) =>
     num1+num2;



console.log(addNums(5,5));*/

/*function Person(firstname,lastname,dob){

    this.firstname=firstname;
    this.lastname=lastname;
    this.dob=new Date(dob);

    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }

    this.GetFullName = function(){
        return `${this.firstname} ${this.lastname}` 
    }
}
const p =new Person('Jash','shah','10-9-2000');
console.log(p.getBirthYear()  );
console.log(p.GetFullName());
console.log(p);*/

/*const form = console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'))
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));
*/

/*const items = document.querySelectorAll('.item');
for (item of items){
    console.log(item);
}*/

//const ul = document.querySelector('.items')
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[2].innerHTML='<h1>Hey</h1>'
//ul.children[1].innerText='Jash';
//const y = document.querySelector('.items').childElementCount;
//console.log(y);
//for(i=0;i<y;i++){
 //   ul.children[i].innerHTML='<h3>Jash</h3>';
//}

/*const btn = document.querySelector('.btn');
btn.style.background='red';
 btn.addEventListener('mouseover',(e)=>{
     e.preventDefault();
     console.log(e.target)
     document.querySelector('body').classList.add('bg-dark')
     document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>'
 });*/


const myForm=document.querySelector('#my-form')
const name=document.querySelector('#name')
const email=document.querySelector('#email')
const msg=document.querySelector('.msg')
const userList  =document.querySelector('#users')

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(name.value==''||email.value==''){
        msg.classList.add('error')
      msg.innerHTML='Please enter all fields'
      setTimeout(()=>msg.remove(),3000);
    }
    else{
        const li=document.createElement('li')
        li.appendChild(document.createTextNode(`${name.value}:${email.value}`))
        userList.appendChild(li);
        //clear fields
        name.value='';
        email.value='';
    }
}