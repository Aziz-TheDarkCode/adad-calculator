const letters = [
    {
        letter : '\xa0',
        value : 0
    },
    {
        letter : 'ب',
        value : 2
    },
    {
        letter : 'ا',
        value : 1
    },
    {
        letter : 'ج',
        value : 3
    },
    {
        letter : 'د',
        value : 4
    },
    {
        letter : 'ه',
        value : 5
    },
    {
        letter : 'و',
        value : 6
    },
    {
        letter : 'ز',
        value : 7
    },
    {
        letter : 'ح',
        value : 8
    },
    {
        letter : 'ط',
        value : 9
    },
    {
        letter : 'ي',
        value : 10
    },
    {
        letter : 'ك',
        value : 20
    },

    {
        letter : 'ل',
        value : 30
    },

    {
        letter : 'م',
        value : 40
    },

    {
        letter : 'ن',
        value : 50
    },

    {
        letter : 'ص',
        value : 60
    },

    {
        letter : 'ع',
        value : 70
    },

    {
        letter : 'ف',
        value : 80
    },

    {
        letter : 'ض',
        value : 90
    },

    {
        letter : 'ق',
        value : 100
    },

    {
        letter : 'ر',
        value : 200
    },

    {
        letter : 'س',
        value : 300
    },

    {
        letter : 'ت',
        value : 400
    },

    {
        letter : 'ث',
        value : 500
    },

    {
        letter : 'خ',
        value : 600
    },

    {
        letter : 'ذ',
        value : 700
    },

    {
        letter : 'ظ',
        value : 800
    },

    {
        letter : 'غ',
        value : 900
    },

    {
        letter : 'ش',
        value : 1000
    },

]
const calculatorPad = document.querySelector('.calculator-pad');
let resultScreenElement = document.querySelector('.result-screen')
let resultScreen = resultScreenElement.innerText
let numericResultElement = document.querySelector('.numeric-result')
let numericResult = numericResultElement.innerText
const clearScreen = document.querySelector('.clear-screen').addEventListener('click',()=>{

})
const removeLastChar = document.querySelector('.remove-last-char')

let total = 0
let text = ''
letters.forEach((letter) =>{
    const btn = document.createElement('div')
    const value = document.createElement('div')
    value.innerText = letter.value
    btn.appendChild(value)
    btn.setAttribute('data-value', letter.value)
    btn.classList.add('rounded-full','cursor-pointer','my-2','p-2','btn','text-white','text-2xl','font-semibold','h-16','w-16','flex','items-center','bg-purple-800','justify-center' ,'shadow-lg','border-2','border-purple-700','hover:border-2','hover:border-gray-500','focus:outline-none')
    btn.innerText=letter.letter
    calculatorPad.appendChild(btn)
})
const pads = document.querySelectorAll('.btn')
pads.forEach((pad) =>{
    pad.addEventListener('click',(event)=>{
        if(pad.classList.contains('clear-screen')){
            total = 0
            text = ''
            numericResultElement.innerText = total.toString()
            resultScreenElement.innerText = text
        }else if(pad.classList.contains('remove-last-char')){
            const lastChar = text[text.length-1]
            text = text.slice(0, -1)
            letters.forEach(lett =>{
                if(lett.letter == lastChar){
                    total -= lett.value
                }
            })
            numericResultElement.innerText = total.toString()
            resultScreenElement.innerText = text
        }
        else{
            text += pad.innerText
            resultScreenElement.innerText = text
            total += parseInt(pad.dataset.value)
            numericResultElement.innerText = total.toString()
        }
    })
})
// removeLastChar.addEventListener('click',()=>{
//     const removedText = text.slice(0, -1)
//     resultScreenElement.innerText = removedText
//     numericResultElement.innerText = total.toString()

// })
