canvas=document.getElementById('mycanvas');
ctx = canvas.getContext("2d");
nasa_mars_images_array=["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_width=100; rover_height=90;
background_image=nasa_mars_images_array[random_number];
console.log("background image = "+background_image);
rover_image="rover.png";
rover_x=10; rover_y=10;

function add(){
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;
    rover_imgtag = new Image();
    rover_imgtag.onload= uploadrover;
    rover_imgtag.src = rover_image;
} 

function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y, rover_width, rover_height);
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if( keypressed == '38'){
        up();
        console.log("up");
    }
    if( keypressed == '40'){
        down();
        console.log("down");
        
}
if( keypressed == '37'){
    left();
    console.log("left");
    
}
if( keypressed == '39'){
    right();
    console.log("right");
    
}
}

function up(){
    if (rover_y >= 0){
        rover_y -= 10;
        console.log("When down arrow is pressed,x = "+rover_x +" |y =  "+ rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down(){
    if (rover_y <= 500){
        rover_y += 10;
        console.log("When down arrow is pressed,x = "+rover_x +" |y =  "+ rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left(){
    if (rover_x >= 0){
        rover_x -= 10;
        console.log("When down arrow is pressed,x = "+rover_x +" |y =  "+ rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right(){
    if (rover_x <= 700){
        rover_x += 10;
        console.log("When right arrow is pressed,x = "+rover_x +" |y =  "+ rover_y);
        uploadBackground();
        uploadrover();
    }
}
