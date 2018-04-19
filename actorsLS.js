const finincialAdvisor = {}
const John = finincialAdvisor
John.name = "John"
John.company = "Best Stock Firm"
John.specialty = "budgets"
John.portfolio = [["APPL", 200, 300], ["MSOFT", 400, 300]]

console.log(John.company)

John.company = "Big Shares"

console.log(John.company)

Object.defineProperty(John, 'portfolio', {
    enumerable: false
  });
 Object.defineProperty(John, 'worth', {
    value: function (John) {
        for (let index = 0; index < John.portfolio.length; index++) {
            let worth = 0
            worth += John.portfolio[index][1] * John.portfolio[index][2]
            return(worth)   
        }
    },
    enumerable: true,
    writeable: false
});
Object.defineProperty(John, 'purchase', {
    value: function (a, b, c) {
        for (let index = 0; index < John.portfolio.length; index++) {
            if (John.portfolio[index][0] === a) {
            John.portfolio[index][2] = John.portfolio[index][2] + c
            }
            else {
                let newStock = [a, b, c]
                John.portfolio.push(newStock)
            }
            
        }
        
    }
});

Object.defineProperty(John, 'sell', {
    value: function (a, b, c) {
        for (let i = 0; i < John.portfolio.length; index++) {
            if (John.portfolio[index][0] === a) {
            John.portfolio[index][2] = John.portfolio[i][2] - c
            }
            
        }
    }
});

John.sell("APPL", 200, 100)

// for (let key in John) replaces keyArray and counter for loop method
const keyArray = ["name", "company", "specialty"]

const advisorName = document.createElement("ul")
for(let i=0; i < keyArray.length; i++) {
    let listItem = document.createElement("li")
    listItem.textContent = John[keyArray[i]]
    advisorName.appendChild(listItem)
}
document.getElementById("body").appendChild(advisorName)






for (let index = 0; index < array.length; index++) {
    array[index];
    
}