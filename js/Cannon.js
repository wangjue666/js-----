class Cannon extends Spirit{
    constructor(type){
        if(type>7 || type<1){
            throw new Error('炮的类型不对,只能是1-7之间')
        };
       

        let data= __g_resouce['cannon'][`cannon${type}`];
        super({
            img:    data.img,
            sx:     data.frame.x,
            sy:     data.frame.y,
            w:      data.frame.w,
            h:      data.frame.h,    
        })
        this.type=type;
    }
}