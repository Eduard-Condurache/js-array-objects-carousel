const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const imagesContainer = document.querySelector('.images-container');

images.forEach((item, index) => {
    
    imagesContainer.innerHTML += `<h4>${item.title}<h4>`
    
    if (index === 0) {
        imagesContainer.innerHTML += `<img src="${item.image}" class="active">`;
    } else {
        imagesContainer.innerHTML += `<img src="${item.image}">`;
    }
});


const allImages = document.querySelectorAll('.images-container > img');

const nextButton = document.getElementById('next-button');

const prevButton = document.getElementById('prev-button');



let currentIndex = 0;

nextButton.addEventListener('click',
    function() {
        
        if (currentIndex < (images.length - 1)) {
            allImages[currentIndex].classList.remove('active');

            currentIndex++;

            allImages[currentIndex].classList.add('active');
        }
        else {
            allImages[currentIndex].classList.remove('active');

            currentIndex = 0;

            allImages[currentIndex].classList.add('active');
        }
    }
    
);

prevButton.addEventListener('click',
    function() {
        if (currentIndex > 0) {
            allImages[currentIndex].classList.remove('active');

            currentIndex--;

            allImages[currentIndex].classList.add('active');
        }

        else {
            allImages[currentIndex].classList.remove('active');

            currentIndex = 4;

            allImages[currentIndex].classList.add('active');
        }
    }
);
