canvas= document.getElementById("Track");
ctx = document.getContext("2d");
background_image = "https://thumbs.dreamstime.com/b/race-track-dark-background-illustration-rectamgular-cartoon-top-view-174314605.jpg"
car_image_1 = "car1.png";
car_image_2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy5DpLYp2-acYdyP32X1_FFTKVj7xCkMk6RQ&usqp=CAU";
car_1_width = 120;
car_1_height = 70;
car_1_x = 10;
car_1_y = 10;
car_2_width = 120;
car_2_height = 70;
car_2_x = 10;
car_2_y = 100;
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackround();
    background_imgTag.src = background_image;
    
    car_1_imgTag = new Image();
    car_1_imgTag.onload = uploadCar_1();
    car_1_imgTag.src = car_image_1;

    car_2_imgTag = new Image();
    car_1_imgTag.onload = uploadCar_2();
    car_2_imgTag.src = car_image_2;
}

function uploadBackround(){
    ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height);
}

function uploadCar_1(){
    ctx.drawImage(car_1 , car_1_x , car_1_y , car_1_width , car_1_height);
}

function uploadCar_2(){
    ctx.drawImage(car_2 , car_2_x , car_2_y , car_2_width , car_2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    if(keyPressed = '87'){
        car_1_straight();
    }
    if(keyPressed = '83'){
        car_1_back();
    }
    if(keyPressed = '65'){
        car_1_left();
    }
    if(keyPressed = '68'){
        car_1_right();
    }
    if(keyPressed = '38'){
        car_2_straight();
    }
    if(keyPressed = '40'){
        car_2_back();
    }
    if(keyPressed = '37'){
        car_2_left();
    }
    if(keyPressed = '39'){
        car_2_right();
    }
}
function car_1_straight(){
    if(car_1_x <= 700){
        car_1_x = car_1_x += 10;
        uploadBackround();
        uploadCar_1();
    }
}

function car_1_back(){
    if (car_1_x >= 0){
        car_1_x -= 10;
        uploadCar_1();
        uploadBackround();
    }
}

function car_1_left(){
    if (car_1_y >= 0){
        car_1_y -= 10;
        uploadCar_1();
        uploadBackround();
    }
}

function car_1_right(){
    if (car_1_y >= 0){
        car_1_y -= 10;
        uploadCar_1();
        uploadBackround();
    }
}

function car_2_straight(){
    if(car_2_x <= 700){
        car_2_x = car_1_x += 10;
        uploadBackround();
        uploadCar_2();
    }
}

function car_2_right(){
    if (car_2_y >= 0){
        car_2_y -= 10;
        uploadCar_2();
        uploadBackround();
    }
}

function car_2_left(){
    if (car_2_y >= 0){
        car_2_y -= 10;
        uploadCar_2();
        uploadBackround();
    }
}

function car_2_back(){
    if (car_2_x >= 0){
        car_2_x -= 10;
        uploadCar_2();
        uploadBackround();
    }
}

if(car_1_x == 770 && car_1_y == 570){
    document.getElementById("score").innerHTML = "Game status: Car 1 wins";
    console.log("car 1 wins");
}

if(car_2_x == 770 && car_2_y == 570){
    document.getElementById("score").innerHTML = "Game status: Car 2 wins";
    console.log("car 2 wins");
}