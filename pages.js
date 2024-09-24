AFRAME.registerComponent(page,{
    schema: {
        pages:{type: 'array',default:[
            {
                page: 'one',
                color: 'pink'

            },
            {
                page: 'two',
                color: 'blue'

            },
            {
                page: 'thr',
                color: 'pink'

            },
            {
                page: 'fou',
                color: 'pink'

            },
            {
                page: 'fiv',
                color: 'pink'

            },

        
        ]},
        pageIndex: {type: 'int', default:0}
        
    },
    init: function(){
        var pageEl=this.pageEl=document.querySelector('[layer]');
        pageEl.object3D.position.set(0,1.8,-2.5);
        var pageIndex = this.data.pageIndex;
        window.addEventListener("keydown", (e)=>{
            if(e.key==="ArrowRight"& pageIndex<4){
                pageIndex+=1;
                this.turnPage(pageIndex);
                }
                if(e.key==="ArrowLeft"& pageIndex>0){
                    pageIndex-=1;
                    this.turnPage(pageIndex);
                }
                
                
            
        });
    },
    turnPage:function(pageIndex){
        var pages= this.data.pages;
        var pageld= pages[pageIndex].page;
        var color=pages[pageIndex].color;
        this.pageEl.setAttribute("layer","src","#"+ pageld);
        this.el.sceneEl.setAttribute("baclground","color",color);
    },
});