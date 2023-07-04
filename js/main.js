const array = [
    [ 11, 12, 13, 14, 15, 16, 17, 18 ],
    [ 21, 22, 23, 24, 25, 26, 27, 28 ],
    [ 31, 32, 33, 34, 35, 36, 37, 38 ],
    [ 41, 42, 43, 44, 45, 46, 47, 48 ],
    [ 51, 52, 53, 54, 55, 56, 57, 58 ],
    [ 61, 62, 63, 64, 65, 66, 67, 68 ],
    [ 71, 72, 73, 74, 75, 76, 77, 78 ],
    [ 81, 82, 83, 84, 85, 86, 87, 88 ],
];

let array_b_figyge = [
    [11, 12, 13, 14, 15, 16, 17, 18],//!black_figure
    [21, 22, 23, 24, 25, 26, 27, 28],//!black_pawns
]

let array_w_figyge = [
    [71, 72, 73, 74, 75, 76, 77, 78],//!white_figure
    [81, 82, 83, 84, 85, 86, 87, 88],//!white_pawns
]

url = 'image/point.png';

function add(mass, url){
    mass.forEach(function(id) {
        const element = document.getElementById(id);
        if (element) {
            const image = document.createElement('img');
            image.src = url;
            element.appendChild(image);
    }
});
}

function rook(id) {
    let l = Math.floor(id/10);
    let r = id % 10;
    let m_rook = [];
    let flag = true;
    for (let i = l; i > 0; i--)
    {
        if (i+r == l+r)
            continue;
        if (array_w_figyge.some(arr => arr.includes(i*10 + r)))
            break;
        m_rook.push(i*10+r);
        if (array_b_figyge.some(arr => arr.includes(i*10 + r)))
            break;
    }
    for (let i = l; i < 9; i++)
    {
        if (i+r == l+r)
            continue;
        if (array_w_figyge.some(arr => arr.includes(i*10 + r)))
            break;
        m_rook.push(i*10+r);
        if (array_b_figyge.some(arr => arr.includes(i*10 + r)))
            break;
    }
    for (let i = r; i < 9; i++)
    {
        if (l*10+i == l*10+r)
            continue;
        if (array_w_figyge.some(arr => arr.includes(l*10 + i)))
            break;
        m_rook.push(l*10+i);
        if (array_b_figyge.some(arr => arr.includes(l*10 + i)))
            break;
    }
    for (let i = r; i > 0; i--)
    {
        if (l*10+i == l*10+r)
            continue;
        if (array_w_figyge.some(arr => arr.includes(l*10 + i)))
            break;
        m_rook.push(l*10+i);
        if (array_b_figyge.some(arr => arr.includes(l*10 + i)))
            break;
    }
    console.log(m_rook);
    return m_rook;
}

const images = document.querySelectorAll('.image');

function handleClick(event) {
    const clickedImage = event.target;
    const altText = clickedImage.alt;// class
    const id = event.target.parentElement.id;//id teg
    
    switch (altText) {
        case "b_rook 1":
        case "b_rook 2":
            let move = rook(id);//! don`t workind{
            add(move, url);
            console.log(id);
            function handleClick(event) {
                const clickedImage = event.target;
                const altText = clickedImage.alt;// class
                const id = event.target.parentElement.id;//id teg
                const newId = parseInt(id);
                const targetDiv = document.getElementById(newId.toString());
                targetDiv.innerHTML = '';
                targetDiv.appendChild(event.target);
            }
            move.forEach((divId) => {
                const div = document.getElementById(divId);
                const images = div.getElementsByTagName("img");
                for (let i = images.length - 1; i >= 0; i--) {
                    const image = images[i];
                    image.parentNode.removeChild(image);
                }
                });//!}
            break;
        case "b_knight 1":
        case "b_knight 2":
            alert('В точку!');
            break;
        case "b_bishop 1":
        case "b_bishop 2":
            alert('Перебор');
            break;
        case "b_queen 1":
        case "b_queen 2":
            alert('Перебор');
            break;
        case "b_king":
            alert('Перебор');
            break;
        case "w_rook 1":
        case "w_rook 2":
            alert('Перебор');
            break;
        case "w_knight 1":
        case "w_knight 2":
            alert('Перебор');
            break;
        case "w_bishop 1":
        case "w_bishop 2":
            alert('Перебор');
            break;
        case "w_queen 1":
        case "w_queen 2":
            alert('Перебор');
            break;
        case "w_king":
            alert('Перебор');
            break;
        case "b_pawn 1":
        case "b_pawn 2":
        case "b_pawn 3":
        case "b_pawn 4":
        case "b_pawn 5":
        case "b_pawn 6":
        case "b_pawn 7":
        case "b_pawn 8":
            alert('Перебор');
            break;
        case "w_pawn 1":
        case "w_pawn 2":
        case "w_pawn 3":
        case "w_pawn 4":
        case "w_pawn 5":
        case "w_pawn 6":
        case "w_pawn 7":
        case "w_pawn 8":
            alert('Перебор');
            break;
    }
}

images.forEach(function (image) {
    image.addEventListener('click', handleClick);
});
