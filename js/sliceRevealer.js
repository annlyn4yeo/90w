/**
 *
 * 
 */
{
    // the settings for each one of the slides uncover instances.
    const uncoverOpts = [
        {
            // total number of slices.
            slicesTotal: 5,
            // slices color.
            slicesColor: '#f2f2f2',
            // 'vertical' || 'horizontal'.
            orientation: 'vertical',
            // 'bottom' || 'top' for vertical orientation and 'right' || 'left' for horizontal orientation.
            slicesOrigin: {show: 'top', hide: 'top'}
        },
        {
            slicesTotal: 8, 
            slicesColor: '#f2f2f2', 
            orientation: 'horizontal', 
            slicesOrigin: {show: 'left', hide: 'left'}
        },
        {
            slicesTotal: 11,
            slicesColor: '#f2f2f2',
            orientation: 'horizontal',
            slicesOrigin: {show: 'right', hide: 'right'}
        },
        {
            slicesTotal: 9,
            slicesColor: '#f2f2f2',
            orientation: 'vertical',
            slicesOrigin: {show: 'bottom', hide: 'bottom'}
        },
        {
            slicesTotal: 7,
            slicesColor: '#f2f2f2',
            orientation: 'vertical',
            slicesOrigin: {show: 'bottom', hide: 'bottom'}
        },
        {
            slicesTotal: 5,
            slicesColor: '#f2f2f2',
            orientation: 'horizontal',
            slicesOrigin: {show: 'left', hide: 'left'}
        }
    ];

    const uncoverAnimation = [
        {
            show: {
                slices: {duration: 600, delay: (_,i,t) => (t-i-1)*100, easing: 'easeInOutCirc'},
                image: {
                    duration: 1200,
                    delay: 350,
                    easing: 'easeOutCubic',
                    scale: [1.3,1]
                }
            },
            hide: {
                slices: {duration: 600, delay: (_,i,t) => (t-i-1)*100, easing: 'easeInOutCirc'}
            }
        },
        {
            show: {
                slices: {duration: 600, delay: (_,i,t) => Math.abs(t/2-i)*80, easing: 'easeInOutCirc'},
                image: {
                    duration: 1200,
                    delay: 350,
                    easing: 'easeOutCubic',
                    scale: [1.3,1]
                }
            },
            hide: {
                slices: {duration: 300, delay: (_,i,t) => Math.abs(t/2-i)*40, easing: 'easeInOutCirc'}
            }
        },
        {
            show: {
                slices: {delay: (_,i,t) => anime.random(0,t)*50},
                image: {
                    duration: 1200,
                    delay: 350,
                    easing: 'easeOutCubic',
                    scale: [1.3,1]
                }
            },
            hide: {
                slices: {duration: 300, delay: (_,i,t) => anime.random(0,t)*50}
            }
        },
        {
            show: {
                slices: {duration: 1200, delay: (_,i) => i*150, easing: 'easeOutExpo'},
                image: {
                    duration: 1200,
                    delay: 350,
                    easing: 'easeOutCubic',
                    scale: [1.3,1]
                }
            },
            hide: {
                slices: {duration: 500, delay: (_,i) => i*150, easing: 'easeInOutExpo'}
            }
        },
        {
            show: {
                slices: {duration: 600, delay: (_,i,t) => Math.abs(t/2-i)*80, easing: 'easeInOutCirc'},
                image: {
                    duration: 1200,
                    delay: 350,
                    easing: 'easeOutCubic',
                    scale: [1.3,1]
                }
            },
            hide: {
                slices: {duration: 600, delay: (_,i,t) => Math.abs(t/2-i)*80, easing: 'easeInOutCirc'}
            }
        },
        {
            show: {
                slices: {duration: 400, delay: (_,i,t) => (t-i-1)*150, easing: 'easeInOutQuad'},
                image: {
                    duration: 1200,
                    delay: 350,
                    easing: 'easeOutCubic',
                    scale: [1.3,1]
                }
            },
            hide: {
                slices: {duration: 400, delay: (_,i,t) => (t-i-1)*30, easing: 'easeInOutQuad'}
            }
        }
    ];

    const items = Array.from(document.querySelectorAll('.row > .img-slice-wrap'));
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if ( entry.intersectionRatio > 0.5 ) {
                uncoverArr[items.indexOf(entry.target)].show(true, uncoverAnimation[items.indexOf(entry.target)].show);
            }
            else {
                uncoverArr[items.indexOf(entry.target)].hide(true, uncoverAnimation[items.indexOf(entry.target)].hide);
            }
        });
    }, { threshold: 0.5 });
    
    let uncoverArr = [];

    imagesLoaded(document.querySelectorAll('.slide__img'), {background: true}, () => {

        items.forEach((item, pos) => {
            uncoverArr.push(new Uncover(item.querySelector('.scroll-img'), uncoverOpts[pos]));
            observer.observe(item);
        });
    });
}