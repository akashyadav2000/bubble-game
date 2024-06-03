var timer = 60;
var num = 0;
var ran = 0;
var newscore = 0;
var newscore = 0;
var tcount = 0;
function start() {
    function makeBubble() {
        var clutter = "";

        for (var i = 1; i <= 189; i++) {
            ran = Math.floor(Math.random() * 10);
            clutter += `<div class="bubble">${ran}</div>`;
        }
        document.querySelector(".pbottom").innerHTML = clutter;
    }
    makeBubble();

    function runtimer() {
        tcount = setInterval(function () {
            if (timer > 0) {
                timer--;
                document.querySelector("#time").textContent = timer;
            } else {
                clearInterval(tcount);
                document.querySelector(".pbottom").innerHTML = `<h1 class="game-over">Game Over</h1>`;
                document.querySelector("#hit").textContent = 0;
            }
        }, 1000);
    }
    runtimer();

    function hitcount() {
        num = Math.floor(Math.random() * 10);
        document.querySelector("#hit").innerHTML = num;
    }
    hitcount();

    function nscore() {
        newscore += 10;
        document.querySelector("#score").textContent = newscore;
    }

    function countScore() {
        document
            .querySelector(".pbottom")
            .addEventListener("click", function (detail) {
                var clickedNum = Number(detail.target.textContent);
                const audioElement = document.getElementById("myAudio");

                // Check if the audio is currently paused or ended
                if (audioElement.paused || audioElement.ended) {
                    // Play the audio
                    audioElement.play();
                } else {
                    // If the audio is already playing, pause and rewind it to the beginning
                    audioElement.pause();
                    audioElement.currentTime = 0;
                }
                if (clickedNum === num) {
                    nscore();
                    makeBubble();
                    hitcount();
                } else {
                }
            });
    }
    countScore();
}

document.querySelector(".exit").addEventListener("click", function () {
    location.reload();
});



// let timer = 60;
// let score = 0;

// document.querySelector(".btn").addEventListener("click", function () {
//     startGame();
// });

// function startGame() {
//     // Reset score and timer
//     score = 0;
//     timer = 60;
//     document.getElementById("score").textContent = score;
//     document.getElementById("time").textContent = timer;

//     function updateScore() {
//         score += 10;
//         document.getElementById("score").textContent = score;
//     }

//     function updateTimer() {
//         if (timer > 0) {
//             timer--;
//             document.getElementById("time").textContent = timer;
//         } else {
//             clearInterval(timerInterval);
//             document.querySelector(".pbottom").innerHTML = '<h1 class="game-over">Game Over</h1>';
//             document.getElementById("hit").textContent = 0;
//         }
//     }

//     function createBubble() {
//         const bubblesContainer = document.querySelector(".pbottom");
//         bubblesContainer.innerHTML = "";
//         const num = Math.floor(Math.random() * 10); // Generate new find value
//         document.getElementById("hit").textContent = num;
//         for (let i = 0; i < 189; i++) {
//             const randomNumber = Math.floor(Math.random() * 10);
//             const bubble = document.createElement("div");
//             bubble.classList.add("bubble");
//             bubble.textContent = randomNumber;
//             bubble.addEventListener("click", function () {
//                 if (randomNumber === parseInt(document.getElementById("hit").textContent)) {
//                     updateScore();
//                     createBubble();
//                 }
//             });
//             bubblesContainer.appendChild(bubble);
//         }
//     }

//     const timerInterval = setInterval(updateTimer, 1000);

//     document.querySelector(".exit").addEventListener("click", function () {
//         location.reload();
//     });

//     createBubble();
// }
