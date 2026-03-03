window.addEventListener('load', function() {
    alert('Welcome to the page!');

    var changeBtn = document.getElementById('changeColor');
    var infoBtn = document.getElementById('showInfo');

    if (changeBtn) {
        changeBtn.addEventListener('click', function() {
            document.body.style.backgroundColor =
                document.body.style.backgroundColor === 'lightyellow' ? '#f4f4f4' : 'lightyellow';
        });
    }

    if (infoBtn) {
        infoBtn.addEventListener('click', function() {
            alert('This site was built using HTML, CSS and JavaScript.');
        });
    }
});