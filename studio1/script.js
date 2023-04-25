(function() {
    'use strict';
    const lectureVideo = document.querySelector('#lecture-video');
    const loading = document.querySelector('.fa-spinner');
    const request = document.querySelector('#request');
    const reviewContainer = document.getElementById('review-container');
    const submitButton = document.getElementById('submit');
    const reviewButtons = document.getElementsByClassName('review-button');
    const correctStatus = document.getElementsByClassName('correct');
    const wrongStatus = document.getElementsByClassName('wrong');

    // Hide the loading message when playing the video
    lectureVideo.addEventListener('playing', function() {
        loading.style.display = 'none';
        request.style.display = 'none';
    });

    // Behaviors when video ends
    lectureVideo.addEventListener('ended', function () {
        endVideo();
    });

    function endVideo() {
        lectureVideo.style.visibility = 'hidden';
        request.style.display = 'inherit';
        reviewContainer.style.display = 'inherit';
        reviewContainer.scrollIntoView({
            behavior: "smooth"
        });
    }

    // Check the answers when users submit
    const questions = ["queue-order", "data-structure"];
    const answerKey = ["FIFO", "array"];

    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        // Hide the status
        for (let status of correctStatus) {
            status.style.display = "none";
        }

        for (let status of wrongStatus) {
            status.style.display = "none";
        }

        // Iterate to check each answer key
        for (let i = 0; i < questions.length; i++) {
            let question = questions[i];
            let answerList = document.getElementsByName(question);

            for (let answer of answerList) {
                // Find the picked option
                if (answer.checked) {
                    if (answer.value === answerKey[i]) {
                        correctStatus[i].style.display = "inherit";
                    }
                    else {
                        wrongStatus[i].style.display = "inherit";
                    }
                    break;
                }
            }
        }
    });

    // The video part to review for each question
    const reviewVideo = {
        start: [9, 28],
        end: [13, 32]
    }

    for (let i = 0; i < reviewButtons.length; i++) {
        let btn = reviewButtons[i];
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            lectureVideo.scrollIntoView({
                behavior: "smooth"
            });
            lectureVideo.style.visibility = 'visible';
            lectureVideo.currentTime = reviewVideo.start[i];
            lectureVideo.play();
            setInterval(function() {
                if (lectureVideo.currentTime > reviewVideo.end[i]) {
                    lectureVideo.pause();
                    endVideo();
                }
            }, 1000);
        });
    }
})();