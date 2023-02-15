const questionEle = document.querySelectorAll('.question');
for(let i=0; i< questionEle.length; i++){
    const answerEle = document.querySelectorAll('.answer');
    questionEle[i].addEventListener('click',()=>{
        if(answerEle[i].className === 'answer'){
            answerEle[i].classList.add('active');
            console.log(answerEle[i].className);
        }
        else{
            answerEle[i].classList.remove('active');
            console.log(answerEle[i].className);
        }
        
    })
}