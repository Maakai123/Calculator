function calculator() {
    const previousDisplayNum = document.querySelector('.previousNumber')
    const currentDisplayNum = document.querySelector('.currentNumber')
    const numButton= document.querySelectorAll('.number')
    const operatorButton = document.querySelectorAll('.operator')
    const deleteButton = document.querySelector('.delete')
    const clearButton = document.querySelector('.clear')
    const equalButton= document.querySelector('.equal')


    let currentOparand = ""
    let previousOparand = ""
    let operator = null

    function handleButton() {
        numButton.forEach(btn => {
       btn.addEventListener('click',()=>{
        currentOparand === 0? currentOparand = "":"";
        if(btn.textContent=== "." && currentOparand.includes("."))return
        currentOparand += btn.textContent.toString()
        upDateDisplay()
       })   
        })

        operatorButton.forEach(btn => {
           btn.addEventListener('click', ()=> {
            if(currentOparand === "") return
            operator = btn.textContent
            operate()
            upDateDisplay()
            
           }) 
        })

        deleteButton.addEventListener('click',()=> {
            let temp;
            if(currentOparand === "You Can't Divide by 0") {
                currentOparand = 0;
                temp = currentOparand
            }
            else {
                temp = currentOparand.toString().slice(0, -1)
            }

            if(temp === '' || temp === 0) {
                temp = 0
                currentOparand = temp
                upDateDisplay()
            }
            else {
                currentOparand = parseFloat(temp)
                upDateDisplay()
            }
        })

        clearButton.addEventListener('click',()=> {
            currentOparand = 0
            previousOparand = ""
            operator = null
            upDateDisplay()
        }) 
    }


    equalButton.addEventListener('click', ()=> {
        upDateDisplay()
        calculateResults()
    })


    function operate() {
        if(currentOparand === "")return
        if(previousOparand !== "") {
            calculateResults()
           
        }
        
        previousOparand =`${currentOparand} ${operator}`
        currentOparand = ""
    }


    function calculateResults() {
        let curr = parseFloat(currentOparand)
        let prev = parseFloat(previousOparand)
        let results;

        if(isNaN(prev)||isNaN(curr)) return
        operator ==="+"? results = prev + curr
        :operator ==="-"? results = prev - curr
        :operator ==="*"? results = prev * curr
        :operator ==="/"? results = prev /curr
        :operator ==="/" && curr === 0? results = "You cant divide by 0"
        :"";

        currentOparand = results
        operator = null
        previousOparand = ""
    }


    function upDateDisplay() {
        currentDisplayNum.textContent = currentOparand
        previousDisplayNum.textContent = previousOparand
    }

    handleButton()
}

calculator()
console.log(calculator())