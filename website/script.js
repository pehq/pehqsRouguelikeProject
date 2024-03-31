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

const LoadingAnimation = [
    "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                     :>                                     \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
]

//pre.innerText = "\nI'M IN YOUR WALLS"
let output = ConvertArrayMapToStr(CreateSquareArrayMap(50, 30))
pre.innerHTML = output

let animationData = {
    "FPS" : 8,
    "Looped" : true,
    "AnimationType" : "ArrayEdit",
    "AnimationBase" : [
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "]
    ],
    "AnimationData" : [
        {
            "x" : 38,
            "y" : 15,
            "char" : "|"
        },
        {
            "x" : 38,
            "y" : 15,
            "char" : "/"
        },
        {
            "x" : 38,
            "y" : 15,
            "char" : "-"
        },
        {
            "x" : 38,
            "y" : 15,
            "char" : "\\"
        }
    ]
};

console.log(animationData)
console.log(animationData.AnimationData)
console.log(animationData.AnimationData[1])

let curFrame = [];
function StartAnimation(animdata) {
    let fps = animdata.FPS;
    let baseHtml = ConvertArrayMapToStr(animdata.AnimationBase);
    let isLooped = animdata.Looped;

    curFrame = animdata.AnimationBase

    pre.innerHTML = baseHtml;
}

function UpdateAnimation(frame) {
    curFrame[frame.y][frame.x] = frame.char
    
    pre.innerHTML = ConvertArrayMapToStr(curFrame)
}

function Animate(animdata) {
    StartAnimation(animdata);

    let frameNum = 0;

    let timer = setInterval(function() {
        UpdateAnimation(animdata.AnimationData[frameNum]);
        if (animdata.AnimationData.length - 1 === frameNum && animdata.Looped == true) {
            frameNum = 0;
        } else {
            frameNum += 1;
        }
    }, 1000 / animdata.FPS)

}

Animate(animationData)