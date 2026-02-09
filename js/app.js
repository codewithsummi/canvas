//get all ids from html 
const colorPicker=document.getElementById("color");
const brushSizeSelector=document.getElementById("BrushSize");
const penTool=document.getElementById("pen");
const eraserTool=document.getElementById("eraser");
const drawSquareBtn=document.getElementById("square");
const clearCanvasBtn=document.getElementById("clean");
const DownloadDrawingBtn=document.getElementById("download");
const canvas=document.getElementById("canvas");

//prepare the canvas content
const ctx=canvas.getContext("2d");
//setting canvas size 
canvas.height=420;
canvas.width=800;

//set state variables (app memory)
let isDrawing=false; //currently drawing anything with freehand
let currentTool="pen"; // "pen" or "eraser"
let isDrawingSquare=false; //if true , then square /rectangle mode is enable 

//setting default brush styles 
ctx.strokeStyle=colorPicker.value; //line color
ctx.lineWidth=brushSizeSelector.value;//brush thickness
ctx.lineCap="round" // makes line ends rounded (smoother drawing)

//variable for rectangle start points
let startX=0;
let startY=0;

//Drawing function 

function startDraw(e)//when mouse is pressed down
{
   if(isDrawingSquare){
       startX=e.offsetX;
       startY=e.offsetY;
       return;
   }
   isDrawing=true;
   ctx.beginPath();//start a new path 
   ctx.moveTo(e.offsetX,e.offsetY)
}

function draw(e)//when mouse moves
{

}
function stopDrawing(e)//when mouse is released
{

}
//tool buttons (event listeners)
eraserTool.addEventListener("click",()=>{
    isDrawingSquare=false;
    penTool.classList.remove("active")
    eraserTool.classList.add("active")
    drawSquareBtn.classList.remove("active")
    currentTool="eraser";
})