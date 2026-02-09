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