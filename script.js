/* 
1. Iremos pegar dentro da API geradora de conselho e iremos passar para dentro da variável advice.
2. Os conselhos serão gerados dentro do button "generate advice".
3. O número do aviso deverá ser mostrado logo após o # do título h5.

*/




const numberAdvice = document.querySelector('.number-advice')
const generateAdvice = document.querySelector('.generate-advice');
const advice = document.querySelector('.advice')
const idApi = document.querySelector('.idApi')


const generatorAdvices = () => {


    fetch('https://api.adviceslip.com/advice')
    .then(res => {
        if(res.ok){
            return res.json();
        }else{
            throw new Error('NETWORK RESPONSE ERROR')
        }
    })
    .then(data => {
        displayAdvice(data)

    })


}

const displayAdvice = (data) => {
    const adviceOfApi = data.slip.advice;
    const adviceId = data.slip.id;
    idApi.innerHTML = adviceId;
    advice.innerHTML = adviceOfApi;


}

const randomAdviceGeneratorButton = () => {
    
    return generatorAdvices()

}







generatorAdvices();