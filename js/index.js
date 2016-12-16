var inti = function() {
    var list = [{
        content: "http://be-fe.github.io/static/images/iSlider-card/1.jpg"
    }, {
        content: "http://be-fe.github.io/static/images/iSlider-card/2.jpg"
    }, {
        content: "http://be-fe.github.io/static/images/iSlider-card/3.jpg"
    }, {
        content: "http://be-fe.github.io/static/images/iSlider-card/4.jpg"
    }, {
        content: "http://be-fe.github.io/static/images/iSlider-card/5.jpg"
    }, {
        content: "http://be-fe.github.io/static/images/iSlider-card/6.jpg"
    }, {
        content: "http://be-fe.github.io/static/images/iSlider-card/7.jpg"
    }, {
        content: "http://be-fe.github.io/static/images/iSlider-card/8.jpg"
    }];

    var islider = new iSlider({
        data: list,
        dom: document.getElementById("iSlider-wrapper"),
        isOverspread: true,
        isVertical: true,
        isLooping: true,
        animateType: 'card',
        onslidechange: function(idx) {
            if (this.isLooping === false) {
                if (idx === this.data.length - 1) {
                    document.getElementById('iSlider-arrow').style.display = 'none';
                } else {
                    document.getElementById('iSlider-arrow').style.display = 'block';
                }
            }
        }
    });

    var audio = document.getElementById('autoplay');
    var controller = document.getElementById('musicBtn');
    var controllerHint = document.getElementById('musicBtnTxt');

    document.getElementById('musicBtn').addEventListener('touchstart', function() {

        controllerHint.style.display = '';
        if (audio.paused) {
            audio.play();
            controller.className = 'music-btn on';
            controllerHint.innerHTML = '开始';
        } else {
            audio.pause();
            controller.className = 'music-btn';
            controllerHint.innerHTML = '关闭';
        }

        setTimeout(function() {
            controllerHint.style.display = 'none';
        }, 1000);

    }, false);
}

window.addEventListener('load', inti, false);