class Fish extends Spirit{
    constructor(type){
        if(type>5||type<1){
            throw new Error('鱼的类型只能在1-5之间')
        };
       
        const data=__g_resouce['fish'][`fish${type}`];
        super({
            img:      data.img,
            sx:       data.frame.x,sy:data.frame.y,
            w:        data.frame.w,h:data.frame.h,
            speed:    Math.random()*1+1,
            rotation: 90
        });
        this.type=type;
        this.max_tick=5;
        this.max_frame=4;
    }
    draw(gd){
        this.rotation-=90;
        super.draw(gd);

        this.rotation+=90;
    }
   
}