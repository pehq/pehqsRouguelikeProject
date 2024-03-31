const canvas = document.getElementById('mainScene');
const pre = document.getElementById('pre');

const TileDimensions = [75, 39]

const tileWidth = 20;
const tileHeight = 20;
const cellSize = 14;
const mapWidth = canvas.width / tileWidth;
const mapHeight = canvas.height / tileHeight;

const exampleArrayMap = [
    [".","#",".","#","."],
    [".","#",".","#","."],    
    [".","#",".","#","."],
    [".",".",".",".","."],
    ["#",".",".",".","#"],
    [".","#","#","#","."],
    [".",".",".",".","."],    
]

function CreateSquareArrayMap(x, y) {
    let ArrayMap = []
    for (let i = 0; i < y; i++) {
        ArrayMap.push([])
        for (let j = 0; j < x; j++) {
        ArrayMap[i].push(".")
        }
    }

    return ArrayMap
}

function ConvertArrayMapToStr(arraymap) {
    let str = ""
    
    for (let i = 0; i < arraymap.length; i++) {
        for (let j = 0; j < arraymap[i].length; j++) {
            str = str.concat(arraymap[i][j]);
        }
        if (i != arraymap.length) {
            str = str.concat("\n");
        }
    }

    return str;
}

function getJson(jsonLocation) {
    fetch(jsonLocation)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return data
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

console.log(getJson('AnimationData/Loading.json'))

const LoadingAnimation = [
    "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                     :>                                     \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
]

//pre.innerText = "\nI'M IN YOUR WALLS"
let output = ConvertArrayMapToStr(CreateSquareArrayMap(50, 30))
pre.innerHTML = output
