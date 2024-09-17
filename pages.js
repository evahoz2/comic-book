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
    }
})