function trail (e) {
    var div = document.createElement('div');

    div.classList.add('happyTrail');

    Object.assign(div.style, {
        top: e.pageY + 'px',
        left: e.pageX + 'px'
    });

    document.body.appendChild(div);
    setTimeout(function(){document.body.removeChild(div)}, 20);
}

addEventListener('mousemove', trail);


// blob
const blob = document.getElementById('blob');

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {
        duration: 500,
        fill: 'forwards'
    });
}
