let dogBar = document.getElementById('dog-bar')
let dogInfo = document.getElementById('dog-info')
let dogImg = document.getElementById('dog-img')
let dogH2 = document.getElementById('dog-h2')
let dogButton = document.getElementById('dog-button')
let dogFilter = document.getElementById('good-dog-filter')
let dogId = document.getElementById('dog-id')
let dogGoodFilter = document.getElementById('good-dog-filter')


let request = async() => {
    let req = await fetch('http://localhost:3000/pups')
    let res = await req.json()

    res.forEach( (element) => {
        let span = document.createElement('span')
        span.innerText = element.name
        span.id = "dog-span"
        dogBar.appendChild(span)

        span.addEventListener('click', () => {
            dogId.value = element.id
            dogImg.setAttribute('src', element.image)
            dogH2.textContent= element.name
            if (element.isGoodDog === true){
                dogButton.style.visibility = "visible"
                dogButton.textContent = "Good Dog!"
            } else{
                dogButton.style.visibility = "visible"
                dogButton.textContent = "Bad Dog!"
            }
            DogButton()
        })
    })

    //DogButton() Button to switch text from good Dog to bad dog

    
   
}

let filterRequest = async () => {
    let req = await fetch('http://localhost:3000/pups')
    let res = await req.json()

    dogGoodFilter.addEventListener("click", () => {
        if(dogGoodFilter.value === "off"){
            dogGoodFilter.value = "on"
            dogGoodFilter.textContent = "Filter good dogs: ON"
            dogBar.innerHTML = ""
           
            res.forEach((element) => {
                if(element.isGoodDog === true){
                    let newSpan = document.createElement('span')
                    newSpan.innerHTML = element.name
                    dogBar.appendChild(newSpan)

                    newSpan.addEventListener('click', () => {
                        dogId.value = element.id
                        dogImg.setAttribute('src', element.image)
                        dogH2.textContent = element.name
                        dogButton.style.visibility = "visible"
                        dogButton.textContent = "Good Dog!"
                        DogButton()
                    })
                }   

            })
            
        } else {
            dogGoodFilter.value = "off"
            dogGoodFilter.textContent = "Filter good dogs: OFF"
            dogBar.innerHTML = ""

            res.forEach((element) => {
                let span = document.createElement('span')
                span.innerText = element.name
                span.id = "dog-span"
                dogBar.appendChild(span)

                span.addEventListener('click', () => {
                    dogId.value = element.id
                    dogImg.setAttribute('src', element.image)
                    dogH2.textContent = element.name
                    if (element.isGoodDog === true) {
                        dogButton.style.visibility = "visible"
                        dogButton.textContent = "Good Dog!"
                    } else {
                        dogButton.style.visibility = "visible"
                        dogButton.textContent = "Bad Dog!"
                    }
                    DogButton()
                })
            })
 
        }  
    })
}

let DogButton = () => {
    dogButton.addEventListener('click', () => {
        if (dogButton.textContent === "Good Dog!") {
            dogButton.textContent = "Bad Dog!"
            // res[dogId.value].isGoodDog = false
        } else if (dogButton.textContent === "Bad Dog!") {
            dogButton.textContent = "Good Dog!"
            // res[dogId.value].isGoodDog.isGoodDog = true
        }
    })
}

request()
filterRequest()