(function(){

    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    
    

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');

            if(answer.clientHeight === 0 ){
                height = answer.scrollHeight;  /*el scrollheight nos da el alto minimo para que el elemento se muestre*/

            }

            answer.style.height =`${height}px`;
        });
    });

    const titleQuestions1 = [...document.querySelectorAll('.questions__title1')];

    titleQuestions1.forEach(question1 =>{
        question1.addEventListener('click', ()=>{
            let height = 0;
            let answer = question1.nextElementSibling;
            let addPadding = question1.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add1');
            question1.children[0].classList.toggle('questions__arrow--rotate1');

            if(answer.clientHeight === 0 ){
                height = answer.scrollHeight;  /*el scrollheight nos da el alto minimo para que el elemento se muestre*/

            }

            answer.style.height =`${height}px`;
        });
    });

    

})();