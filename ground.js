class Ground { 
    constructor(x,y,width,height) { 
      var options = { 
        'isStatic': true 
        // 'friction': 1.0, 
        // 'restitution': 0.8, 
        // 'density': 0.3 
      } 
        this.width = width; 
        this.height = height; 
        this.body = Bodies.rectangle(x,y,this.width,this.height,options); 
        World.add(world, this.body); 
      } 
      display(){ 
        push(); 
        var pos =this.body.position; 
        rectMode(CENTER); 
        fill(225); 
        rect(pos.x, pos.y, this.width, this.height); 
        pop(); 
      } 
    };
    
  