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

const black_figure = [11, 12, 13, 14, 15, 16, 17, 18];
const black_pawns = [21, 22, 23, 24, 25, 26, 27, 28];
const white_figure = [71, 72, 73, 74, 75, 76, 77, 78];
const white_pawns = [81, 82, 83, 84, 85, 86, 87, 88];

const images = document.querySelectorAll('.image');

function handleClick(event) {
    const clickedImage = event.target;
    const altText = clickedImage.alt;
    switch (altText) {
        case "b_rook 1":
        case "b_rook 2":
            console.log('work');
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
