var boxes = document.querySelectorAll('.box');
var startText = document.querySelector('.startText');
var Container = document.querySelector('.container');
var Boxes = document.querySelector('.boxes');
var RestartButton = document.querySelector('.reset');
var Lives = document.querySelector('.livesCount');

let LiveCount = 100;
Lives.textContent = LiveCount;
var matchedCards = 0;



const StartGame = () =>{
    startText.style.display = 'none';
    Container.style.display = 'block';
    RandomizeImages();
    GenerateData();
}

const ImageData = () => [
    {imgsc: 'Images/A Girl.jpg', description: "A Girl Watching Backword"},
    {imgsc: 'Images/Elephant.jpg', description: "An Elephant"},
    {imgsc: 'Images/Ferrary.jpg', description: "A super Car!!"},
    {imgsc: 'Images/Flying Boat.jpg', description: "A Boat which fly"},
    {imgsc: 'Images/Game Controller.jpg', description: "PS5 Controller"},
    {imgsc: 'Images/House.jpg', description: "A picture of house"},
    {imgsc: 'Images/Panda.jpg', description: "A sticker of panda"},
    {imgsc: 'Images/PennyWise.jpg', description: "My Favourite!"},
    {imgsc: 'Images/A Girl.jpg', description: "A Girl Watching Backword"},
    {imgsc: 'Images/Elephant.jpg', description: "An Elephant"},
    {imgsc: 'Images/Ferrary.jpg', description: "A super Car!!"},
    {imgsc: 'Images/Flying Boat.jpg', description: "A Boat which fly"},
    {imgsc: 'Images/Game Controller.jpg', description: "PS5 Controller"},
    {imgsc: 'Images/House.jpg', description: "A picture of house"},
    {imgsc: 'Images/Panda.jpg', description: "A sticker of panda"},
    {imgsc: 'Images/PennyWise.jpg', description: "My Favourite!"}
]

const handleClick = () =>{
    var Cards = document.querySelectorAll('.box');

    Cards.forEach((card)=>{
        card.addEventListener('click', (e)=>{
            let currentCard = e.target;
            currentCard.classList.add('flip');
        })
    })
    
    checkCards();
    
}



const checkCards = () =>{
    var Cards = document.querySelectorAll('.box');
    
    Cards.forEach((card)=>{

        card.addEventListener('click', (e)=>{
            let currentCard = e.target;
            currentCard.classList.add('flipped');
                
                var flipped = document.querySelectorAll('.flipped')

                
                
                if(flipped.length == 2){
                    
                    if(flipped[0].getAttribute('name') == flipped[1].getAttribute('name')){
                    }
                    else{
                        LiveCount--;
                        Lives.textContent = LiveCount;
                        if(LiveCount < 0){
                            RestartGame();
                        }
                    }
                        

                }
                })
                
                // ************** Main Logic **************

                card.addEventListener('transitionend', ()=>{
                    var flipped = document.querySelectorAll('.flipped');

                    
                    if(flipped.length == 2){
                        const card1 = flipped[0].getAttribute('name');
                        const card2 = flipped[1].getAttribute('name');
                        if(flipped[0].getAttribute('name') == flipped[1].getAttribute('name')){
                            matchedCards++;

                            if(matchedCards == 8){
                                RestartGame();
                            }
                        }
                        else{
                            flipped.forEach(i=>{
                                i.classList.remove('flip')
                            })
                        }
                        
                        flipped.forEach(i=>i.classList.remove('flipped'))

                        return flipped;
                    }
        
                    if(LiveCount == 0){
                        RestartGame();
                    }
                    else if(LiveCount < 0){
                        RestartGame();
                    }
                    else if(matchedCards == 8){
                        RestartGame();
                    }
                    else return;
                    
                })
                
    

    });
}

const RandomizeImages = () =>{
    
    const data = ImageData();
    
    data.sort(()=> Math.random() - 0.5);
    
    return data;
    
}




const RestartGame = () =>{
    
    var Cards = document.querySelectorAll('.box');

    Cards.forEach(e => {
        e.classList.remove('flip');
        LiveCount = 6;
        Lives.textContent = LiveCount;
    })

    matchedCards = 0;
    alert("You Win !!")

}



const GenerateData = () =>{
    const data = RandomizeImages();
    for(i = 0; i < 16; i++){
        let box = document.createElement('div');
        let face = document.createElement('img');
        let back = document.createElement('div');

        box.classList.add('box');
        face.classList.add('face');
        back.classList.add('back');
        
        Boxes.appendChild(box);
        box.appendChild(face);
        box.appendChild(back);

        face.src = data[i].imgsc;
        box.setAttribute('name', data[i].description);
        
    }
    handleClick();
}


document.addEventListener('keydown', StartGame)

RestartButton.addEventListener('click', RestartGame);


let w = window.outerWidth;

if(w <= 786){
    startText.innerHTML = "Tap to StartGame!!";

    window.addEventListener("touchstart", StartGame, {once: true});
}
