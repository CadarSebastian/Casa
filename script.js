function setup(){
    createCanvas(400,400)
}
function draw(){

    background("#00F6F0")
    Casa();
}

function Casa(){
    
 
fill("#B2C7C8")
rect(30,280,290,100);








fill("#559A90")
beginShape();
vertex(320,379.4);
vertex(320,280);
vertex(340,250);
vertex(340,350);
endShape(CLOSE);

fill("#D26D54")
beginShape();
vertex(250,200);
vertex(340,249);
vertex(320,280);
endShape(CLOSE);

triangle(30,280,250,200,320,280);


fill("#EDEDF7")
rect(160,310,40,40)
rect(200,310,40,40)
rect(120,320,30,60)

rect(50,300,20,20)

}
    
   