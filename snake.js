function snake(){
    this.x=0;
    this.y=0;
    this.xspeed=1;
    this.yspeed=0;
    this.total=0;
    this.tail=[];
    this.left=false;
    this.right=false;
    this.top=false;
    this.bottom=false;
    this.color;
this.update=function(){
  for(var i=0;i<this.tail.length-1;i++){
    this.tail[i]=this.tail[i+1];
  }
      this.tail[this.total-1]=createVector(this.x,this.y);
      this.x+=this.xspeed * scl;
      this.y+=this.yspeed * scl;
      this.x=constrain(this.x,0,width-scl);
      this.y=constrain(this.y,0,height-scl);

  }
  this.death = function(){
    for(var i=0; i < this.tail.length;i++){
        var pos= this.tail[i];
        var d= dist(this.x,this.y,pos.x,pos.y);
            if(d<1){
              var scr = this.score();
              alert("!!GAME OVER,your total score is :" + scr );
              this.total=0;
              this.tail=[];
            }
    }
  }
  this.score=function(){
      var scr=0;
      scr+=this.total * 20;
        return scr;
      }
  this.show = function() {
    for(var i=this.total-1;i>=0;i--){
      this.color = map((i +1)* scl/2,0,this.total*scl,0,255);
      fill(this.color%255);
      rect(this.tail[i].x,this.tail[i].y,scl-0.5,scl-0.5);
    }

      fill(255,158,51);
      rect(this.x,this.y,scl-0.5,scl-0.5);
    }
  this.dir = function(x,y){
    this.xspeed=x;
    this.yspeed=y;
  }
  this.eat=function(pos){
     var d= dist(this.x,this.y,pos.x,pos.y);
      if(d<2){
       this.total++;
       return true;
     }else{
       return false;
     }
  }
}