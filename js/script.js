
/* ==========================================
   FOR MY THANGAPULLAA 🎀
   Interactive Birthday Website
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // 1. FLOATING HEARTS 💗

    const heartsContainer = document.getElementById("floatingHearts");

    const heartSymbols = ["♥", "♡", "💕", "💗", "❤"];

    function createHeart() {
        if (!heartsContainer) return;

        // Keep the page light and smooth
        if (heartsContainer.childElementCount >= 24) return;

        const heart = document.createElement("span");

        heart.classList.add("floating-heart");
        heart.textContent =
            heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (12 + Math.random() * 22) + "px";
        heart.style.animationDuration = (7 + Math.random() * 8) + "s";
        heart.style.animationDelay = (Math.random() * 1.5) + "s";

        heartsContainer.appendChild(heart);

        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }

    // Start with a few hearts
    for (let i = 0; i < 12; i++) {
        setTimeout(createHeart, i * 250);
    }

    // Add hearts continuously
    setInterval(createHeart, 550);


    // 2. FLOATING SPARKLES ✨

    function createSparkle() {
        if (!heartsContainer) return;

        if (heartsContainer.childElementCount >= 24) return;

        const sparkle = document.createElement("span");

        sparkle.classList.add("floating-heart");
        sparkle.textContent = "✦";
        sparkle.style.color = "#ffffff";
        sparkle.style.textShadow = "0 0 12px #ffffff";
        sparkle.style.left = Math.random() * 100 + "%";
        sparkle.style.fontSize = (10 + Math.random() * 12) + "px";
        sparkle.style.animationDuration = (8 + Math.random() * 6) + "s";

        heartsContainer.appendChild(sparkle);

        sparkle.addEventListener("animationend", () => {
            sparkle.remove();
        });
    }

    setInterval(createSparkle, 1800);


    // Helper: find an element safely
    function getElement(id) {
        return document.getElementById(id);
    }


    // 3. OPEN YOUR SURPRISE 🎁

    const openSurprise = getElement("openSurprise");

    if (openSurprise) {
        openSurprise.addEventListener("click", () => {

            const surpriseSection = getElement("surprise");

            openSurprise.disabled = true;
            openSurprise.innerHTML =
                '<span class="gift-icon">💗</span> Opening your surprise...';

            // Tiny pause for the surprise effect
            setTimeout(() => {
                if (surpriseSection) {
                    surpriseSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }

                openSurprise.disabled = false;
                openSurprise.innerHTML =
                    '<span class="gift-icon">🎁</span> Open Your Surprise <span class="arrow">→</span>';

                // A little burst of hearts
                for (let i = 0; i < 8; i++) {
                    setTimeout(createHeart, i * 100);
                }
            }, 350);
        });
    }


    // 4. GO TO MEMORIES 📸

    const nextToMemories = getElement("nextToMemories");

    if (nextToMemories) {
        nextToMemories.addEventListener("click", () => {
            const memories = getElement("memories");

            if (memories) {
                memories.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }


    // 5. VIRTUAL HUG 🫂

    const letterHeart = getElement("letterHeart");

    if (letterHeart) {
        letterHeart.addEventListener("click", () => {
            const hugMessage = getElement("hugMessage");

            if (hugMessage) {
                hugMessage.textContent =
                    "Sending the biggest virtual hug to my Thangapullaa! 🫂💗";
            }

            letterHeart.textContent = "Hug sent successfully! 💕";

            for (let i = 0; i < 10; i++) {
                setTimeout(createHeart, i * 120);
            }
        });
    }


    // 6. BIRTHDAY WISH 🎂

    const wishButton = getElement("wishButton");

    if (wishButton) {
        wishButton.addEventListener("click", () => {
            const wishMessage = getElement("wishMessage");

            if (wishMessage) {
                wishMessage.textContent =
                    "May all your dreams come true, birthday boy! ✨💗 " +
                    "You deserve happiness, success and endless smiles. 🎂";
            }

            wishButton.textContent = "Wish made! 🎉";

            for (let i = 0; i < 12; i++) {
                setTimeout(createHeart, i * 100);
            }
        });
    }


    // 7. BACK TO THE BEGINNING 🏠

    const backToTop = getElement("backToTop");

    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // 8. NAVIGATION ACTIVE STATE 💌

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");
        });
    });


    // 9. OPEN THE SECRET LETTER 💌

    const openLetter = getElement("openLetter");
    const letterEnvelope = getElement("letterEnvelope");
    const letterContent = getElement("letterContent");

    function showLetter() {
        if (letterEnvelope) {
            letterEnvelope.classList.add("open");
        }

        if (letterContent) {
            letterContent.hidden = false;
            letterContent.style.display = "block";
        }
    }

    if (openLetter) {
        openLetter.addEventListener("click", showLetter);
    }

    if (letterEnvelope) {
        letterEnvelope.addEventListener("click", showLetter);
    }

    // 10. REVEAL THE SECRET MESSAGE 🤫

    const revealSecret = getElement("revealSecret");
    const secretMessage = getElement("secretMessage");

    if (revealSecret) {
        revealSecret.addEventListener("click", () => {
            if (secretMessage) {
                secretMessage.hidden = false;
                secretMessage.style.display = "block";
            }

            revealSecret.textContent = "Secret revealed! 💗";

            for (let i = 0; i < 8; i++) {
                setTimeout(createHeart, i * 100);
            }
        });
    }

    // 9. SHOW A LITTLE WELCOME IN THE CONSOLE 🎀

    console.log("Made with love for Thangapullaa 💗");
    console.log("Signed by your favourite Delulu! 🎀");

});
