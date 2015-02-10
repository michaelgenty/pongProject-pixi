/**
 * Created by Michael on 10/02/2015.
 */
    
var m_cCountdown = false;

var Countdown = function(renderer) {


    var viewWidth = window.innerWidth;
    var viewHeight = window.innerHeight;
    
    
    /*PIXI.DisplayObjectContainer.call(this);
    this.three = PIXI.Sprite.fromFrame("3Get.png");
    this.two = PIXI.Sprite.fromFrame("2tricksy.png");
    this.one = PIXI.Sprite.fromFrame("1pixie.png");*/

    //import the images - TO DO: use assets?
    this.three1 = PIXI.Texture.fromImage("img/counter/count-3.png");
    this.two1 = PIXI.Texture.fromImage("img/counter/count-2.png");
    this.one1 = PIXI.Texture.fromImage("img/counter/count-1.png");

    this.three = new PIXI.Sprite(this.three1);
    this.two = new PIXI.Sprite(this.two1);
    this.one = new PIXI.Sprite(this.one1);
    

    //define the position of the images
    this.three.position.x = (viewWidth)/2 ;
    this.three.position.y = (viewHeight)/2 ;
    
    this.two.position.x = (viewWidth)/2 ;
    this.two.position.y = (viewHeight)/2 ;

    this.one.position.x = (viewWidth)/2 ;
    this.one.position.y = (viewHeight)/2 ;
    
    
    this.three.anchor.x = this.three.anchor.y = 0.5;
    this.two.anchor.x = this.two.anchor.y = 0.5;
    this.one.anchor.x = this.one.anchor.y = 0.5;

    this.three.alpha = 0;
    this.two.alpha = 0;
    this.one.alpha = 0;

    renderer.stage.addChild(this.three);
    renderer.stage.addChild(this.two);
    renderer.stage.addChild(this.one);

    this.three.alpha = 0;
    this.two.alpha = 0;
    this.one.alpha = 0;

    m_cCountdown = this;


    Countdown.prototype.startCountDown = function(onComplete) {
        this.visible = true;
        this.onComplete = onComplete;

        this.three.alpha = 0;
        this.two.alpha = 0;
        this.one.alpha = 0;

        this.three.scale.x = this.three.scale.y = 2;
        this.two.scale.x = this.two.scale.y = 2;
        this.one.scale.x = this.one.scale.y = 2;

        var that = this;

        TweenLite.to(this.three, 1 * time2, {
            alpha : 1,
            onComplete : function()
            {console.log("pass 3");
                m_cCountdown.onThreeShown();
            }
        });

        TweenLite.to(this.three.scale, 1 * time2, {
            x : 1,
            y : 1,
            ease : Elastic.easeOut
        });
    };

    var time = 0.1;
    var time2 = 0.5;
    var delay = 0;

    Countdown.prototype.onThreeShown = function() {
        var that = this;

        TweenLite.to(that.three, 1 * time, {
            alpha : 0,
            ease : Sine.easeOut,
            delay : delay
        });

        TweenLite.to(that.three.scale, 1 * time, {
            x : 0.5,
            y : 0.5,
            ease : Cubic.easeOut,
            delay : delay
        });

        TweenLite.to(that.two, 1 * time2, {
            alpha : 1,
            onComplete : function()
            {     console.log("2");
                TweenLite.to(that.two, 1 * time, {
                    alpha : 0,
                    delay : delay
                });

                TweenLite.to(that.two.scale, 1 * time, {
                    x : 0.5,
                    y : 0.5,
                    ease : Cubic.easeOut,
                    delay : delay
                });

                TweenLite.to(that.one, 1 * time2, {
                    alpha : 1,
                    onComplete : function(){
                        TweenLite.to(that.one.scale, 1 * time, {
                            x : 0.5,
                            y : 0.5,
                            ease : Cubic.easeOut,
                            delay : delay
                        });
                        //this is the end of the animation
                        TweenLite.to(that.one, 1 * time, {
                            alpha : 0,
                            onComplete : function(){
                                that.visible = false;
                                //do something when the animation ended
                                //we up the event to the upper class
                                if (that._onAnimationEnded != null) {
                                    that._onAnimationEnded();
                                }
                                
                            },
                            delay : delay
                        });
                    },
                    delay : delay
                });

                TweenLite.to(that.one.scale, 1 * time2, {
                    x : 1,
                    y : 1,
                    ease : Elastic.easeOut,
                    delay : delay
                });
            },
            delay : delay
        });

        TweenLite.to(this.two.scale, 1 * time2, {
            x : 1,
            y : 1,
            ease : Elastic.easeOut,
            delay : delay
        });
    };
    

};
