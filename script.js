const data = [
    {
        'id': 0,
        'studentName': 'Tanya Sinclair',
        'position': 'UX Engineer',
        'quote': `\u201C I’ve been interested in coding for a while but never taken the jump, 
        until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and
         so excited about the future. \u201D`,
        'image': './images/image-tanya.jpg'
    },
    {
        'id': 1,
        'studentName': 'John Tarkpor',
        'position': 'Junior Front-end Developer',
        'quote': `\u201C If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about starting up as 
        a professional developer. \u201D`,
        'image': './images/image-john.jpg'
    }
]

const quote = document.querySelector('.quote');
const name = document.querySelector('.name');
const position = document.querySelector('.position');
const photo = document.querySelector('.photo')
const previous  = document.querySelector('.prev');
const next  = document.querySelector('.next');

let current = 0;
let quoteText = document.createTextNode(data[current].quote);
let studentName = document.createTextNode(data[current].studentName);
let studentPosition = document.createTextNode(data[current].position);

quote.appendChild(quoteText)
name.appendChild(studentName)
position.appendChild(studentPosition)

const setData = () => {
    if (current === 0){
        current = 1;
        quote.innerHTML = data[current].quote
        name.innerHTML = data[current].studentName
        position.innerHTML = data[current].position 
        photo.style.backgroundImage = `url(${data[current].image})`
        
    } else {
        current = 0;
        quote.innerHTML = data[current].quote
        name.innerHTML = data[current].studentName
        position.innerHTML = data[current].position
        photo.style.backgroundImage = `url(${data[current].image})` 
    }
}

next.addEventListener('click', setData)
previous.addEventListener('click', setData)

