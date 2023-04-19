


let granimInstance = new Granim({
    element: '#canvasBasicL',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                [
                    { color : '#F9A8D4', pos: .2 }, 
                    { color : '#EC4899', pos: .8 },
                    { color : '#BE185D', pos: 1}
            ], [
                { color : '#BE185D', pos: 0 },
                { color : '#9F1239', pos: .2 },
                { color : '#881337', pos: .75 }
            ]
            ]
        }
    }
});


canvasBasicL.onmouseover = function() {
   
    granimInstance.play();
};
canvasBasicL.onmouseout = function () {
    granimInstance.pause();
};



let granimInstance1 = new Granim({
    element: '#canvasBasicG',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [

                [
                    { color : '#facc15', pos: .2 },
                    { color : '#ba9850', pos: .8 },
                    { color : '#806885', pos: 1 }
                ], [
                    { color : '#4639ba', pos: 0 },
                    { color : '#2820d5', pos: .2 },
                    { color : '#0000F9', pos: .75 }
            ]
        ]
        }
    }
});

canvasBasicG.onmouseover = function() {
   
    granimInstance1.play();
};
canvasBasicG.onmouseout = function () {
    granimInstance1.pause();
};



let granimInstance2 = new Granim({
    element: '#canvasBasicB',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                [
                    { color : '#0101f9', pos: .2 },
                    { color : '#300fe6', pos: .8 },
                    { color : '#581bd6', pos: 1 }
                ], [
                    { color : '#8027c6', pos: 0 },
                    { color : '#aa34b5', pos: .2 },
                    { color : '#ec489a', pos: .75 }
            ]
            ]
        }
    }
});

canvasBasicB.onmouseover = function() {
   
    granimInstance2.play();
};
canvasBasicB.onmouseout = function () {
    granimInstance2.pause();
};


let granimInstance3 = new Granim({
    element: '#canvasBasicT',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                [
                    { color : '#f372b6', pos: .2 },
                    { color : '#d076c4', pos: .8 },
                    { color : '#b27ad0', pos: 1 }
                 ], [
                    { color : '#927edd', pos: 0 },
                    { color : '#7581e9', pos: .2 },
                    { color : '#5b84f4', pos: .75 }
            ]
            ]
        }
    }
});

canvasBasicT.onmouseover = function() {
   
    granimInstance3.play();
};
canvasBasicT.onmouseout = function () {
    granimInstance3.pause();
};


let granimInstance4 = new Granim({
    element: '#canvasBasicQ',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                [
                    { color : '#E879F9', pos: .2 },
                    { color : '#b997d5', pos: .8 },
                    { color : '#a1a6c3', pos: 1 }
                ], [
                    { color : '#89b5b1', pos: 0 },
                    { color : '#6ec79c', pos: .2 },
                    { color : '#4ADE80', pos: .75 }
            ]
            ]
        }
    }
});

canvasBasicQ.onmouseover = function() {
   
    granimInstance4.play();
};
canvasBasicQ.onmouseout = function () {
    granimInstance4.pause();
};


let granimInstance5 = new Granim({
    element: '#canvasBasicI',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                [
                    { color : '#facc15', pos: .2 },
                    { color : '#d78f34', pos: .8 },
                    { color : '#bf644a', pos: 1 }
                 ], [

                  { color : '#ac435b', pos: 0 },
                  { color : '#971e6e', pos: .2 },
                  { color : '#86007d', pos: .75 }
                ]
            ]
        }
    }
});

canvasBasicI.onmouseover = function() {
   
    granimInstance5.play();
};
canvasBasicI.onmouseout = function () {
    granimInstance5.pause();
};




let granimInstance6 = new Granim({
    element: '#canvasBasicA',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                [
                    { color : '#6b7180', pos: .2 },
                    { color : '#6f5f80', pos: .8 },
                    { color : '#75477f', pos: 1 }
                ], [
                { color : '#79377f', pos: 0 },
                { color : '#7e237e', pos: .2 },
                { color : '#86017d', pos: .75 }
            ]
            ]
        }
    }
});

canvasBasicA.onmouseover = function() {
   
    granimInstance6.play();
};
canvasBasicA.onmouseout = function () {
    granimInstance6.pause();
};


let granimInstance7 = new Granim({
    element: '#canvasBasicLG',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                [
                    { color : '#06b6d4', pos: .2 },
                    { color : '#45b1a9', pos: .8 },
                    { color : '#78ae87', pos: 1 }
                 ], [

                  { color : '#9dab6e', pos: 0 },
                  { color : '#bda959', pos: .2 },
                  { color : '#faa530', pos: .75 }
            ]
            ]
        }
    }
});

canvasBasicLG.onmouseover = function() {
   
    granimInstance7.play();
};
canvasBasicLG.onmouseout = function () {
    granimInstance7.pause();
};