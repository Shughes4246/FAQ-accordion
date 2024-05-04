const questions = document.querySelectorAll('.question');

questions.forEach(function (q) {
    q.addEventListener("click", () => {
        const isOpen = q.classList.contains('open');
        
        questions.forEach(function (item) {
            item.classList.remove('open');
        });

        if (!isOpen) {
            q.classList.add('open');
        }
    });
});
