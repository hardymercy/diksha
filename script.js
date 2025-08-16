const songs = [
    "songs/1.mp3",
    "songs/2.mp3",
    "songs/3.mp3",
    "songs/4.mp3",
    "songs/5.mp3",
    "songs/6.mp3",
    "songs/7.mp3",
    "songs/8.mp3",
    "songs/9.mp3",
    "songs/10.mp3",
    "songs/11.mp3",
    "songs/12.mp3",
    "songs/13.mp3",
    "songs/14.mp3",
    "songs/15.mp3",
    "songs/16.mp3",
    "songs/17.mp3",
    "songs/18.mp3",
    "songs/19.mp3",
    "songs/20.mp3",
    "songs/21.mp3",
    "songs/22.mp3",
    "songs/23.mp3",
];

const messages = [
    "I hope you found your favorite window seat today, with the perfect breeze. I’m sure 4:25 will arrive before you even notice, and you’ll be back there again.",
    "I can already picture you sitting by the window, with your knees up on the opposite seat, the sunlight looks good on your face",
    "Maybe your head is resting against the glass. i hope today passes soon",
    "I hope u got your window seat by now. Something about you sitting there just feels right.",
    "I hope today treats you kindly. 4:25 will come fast, and you’ll be right back by that window again.",
    "Did you get the spot where the breeze sneaks in, just enough to make you smile?",
    "I imagine you, eyes half-closed, enjoying the quiet moments",
    "I can almost see you there, earbuds in, watching the world blur by through that little opening.",
    "I hope the morning air feels gentle and the day passes quick enough to bring you to 4:25.",
    "I picture you sitting quietly by the window, noticing little things outside.",
    "I imagine the breeze touching your cheek as you look out the window",
    "Today’s going to go fine, I can tell. And by the time you blink, 4:25 will be here.",
    "Did you sit where the light falls just right on your face? I hope so.",
    "There’s something about you and the window seat—like the day isn’t complete without that picture.",
    "I hope the air felt perfect today, fresh but soft, just how you like it.",
    "Something tells me today will be one of those peaceful ones, with no rush",
    "Did you get your window seat today, or was it taken? I hope it was yours.",
    "I hope today is kind to you. Before you know it, 4:25 will bring you back to where you belong.",
    "Did you sit in the spot where the breeze feels like it’s only for you?",
    "watching the city pass by?",
    "I hope today has little surprises that make you smile before you even reach 4:25.",
    "The window seat just suits you—it’s where you’re meant to be.",
    "The breeze, the view, and you, that’s all a morning needs.",
    "You probably don’t notice, but you make mornings softer just by existing.",
    "I imagine your head resting lightly against the glass, eyes wandering outside.",
    "Don’t worry about the hours ahead—4:25 is already on its way.",
    "I think mornings and you have an understanding—they both feel gentle.",
    "Did you get the seat with the perfect view again?",
    "I’m guessing the breeze today was just right—not too much to mess up your hair, not too little.",
    "Some days, it’s enough just to sit by the window and let the air do its thing.",
    "I wonder what you were thinking about while looking out the window today.",
    "I hope your day feels light and that 4:25 doesn’t take its time.",
    "I hope today’s view from the window felt a little extra pretty.",
    "Seeing you in morning seems is the best part of my day",
    "The window seat and you are just a perfect match.",
    "You make mornings feel special.",
    "I think the world looks better when its you in between me and those windows",
    "I hope you got your perfect corner today.",
    "There’s something calming about seeing you in mornings.",
    "You make that seat look like it was made for you.",
    "Just relax today’s going to go fine, I just know it.",
    "The window seat wouldn’t be the same without you.",
    "The day feels softer when it starts with you.",
    "I hope today goes lightly, and the evening finds you smiling.",
    "You and mornings just.. fit.. to me atleast.",
    "The world outside your window probably has no idea it’s being watched by such a pretty creature",
    "The seat is just a seat until you’re in it.",
    "The breeze will probably whisper something nice today.",
];

const allTheBestMessages = [
    "All the very best, you will ace it",
    "I hope that crazy woman gives u more than 26",
    "Best of luckk",
];

const noAssessmentMessages = [
    "Noice",
];

const quotes = [
    "Thank u for opening me today!!",
];

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function showAssessmentMessage(hasAssessment) {
    const assessmentMessage = document.getElementById('assessment-message');
    const assessmentQuestion = document.getElementById('assessment-question');
    if (hasAssessment) {
        const messageIndex = getRandomIndex(allTheBestMessages);
        assessmentMessage.innerText = allTheBestMessages[messageIndex];
    } else {
        const messageIndex = getRandomIndex(noAssessmentMessages);
        assessmentMessage.innerText = noAssessmentMessages[messageIndex];
    }
    assessmentMessage.classList.remove('hidden');
    assessmentQuestion.classList.add('hidden');
}

function revealContent() {
    const songIndex = getRandomIndex(songs);
    const messageIndex = getRandomIndex(messages);
    
    const btn = document.querySelector('.reveal-btn');
    btn.style.transition = 'transform 1s';
    btn.style.transform = 'rotate(360deg)';
    
    setTimeout(() => {
        btn.style.display = 'none';
        btn.style.transform = 'rotate(0deg)';
        
        const audioPlayer = document.getElementById('audioPlayer');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const dikshaText = document.getElementById('diksha-text');
        const songEmbedDiv = document.getElementById('song-embed');
        const songError = document.getElementById('song-error');

        if (!audioPlayer || !playPauseBtn || !dikshaText || !songEmbedDiv) {
            console.error('Missing audio elements:', {
                audioPlayer: !!audioPlayer,
                playPauseBtn: !!playPauseBtn,
                dikshaText: !!dikshaText,
                songEmbed: !!songEmbedDiv
            });
            songError.classList.remove('hidden');
            return;
        }

        audioPlayer.src = songs[songIndex];
        audioPlayer.load();
        audioPlayer.onerror = () => {
            console.error('Audio load error for:', songs[songIndex]);
            songError.classList.remove('hidden');
        };

        playPauseBtn.textContent = '▶';
        songEmbedDiv.classList.remove('playing');

        document.getElementById('message').innerText = messages[messageIndex];
        document.getElementById('quote-text').innerText = quotes[getRandomIndex(quotes)];
        
        document.getElementById('daily-content').classList.remove('hidden');
        document.getElementById('daily-content').classList.add('show');
        document.getElementById('assessment-question').classList.remove('hidden');

        playPauseBtn.onclick = () => {
            if (audioPlayer.paused) {
                audioPlayer.play().catch(error => console.error('Play error:', error));
                playPauseBtn.textContent = '⏸';
                songEmbedDiv.classList.add('playing');
                console.log('Playing:', songs[songIndex]);
                updateDikshaColor();
            } else {
                audioPlayer.pause();
                playPauseBtn.textContent = '▶';
                songEmbedDiv.classList.remove('playing');
            }
        };

        function updateDikshaColor() {
            audioPlayer.addEventListener('timeupdate', () => {
                const progress = audioPlayer.currentTime / audioPlayer.duration || 0;
                const darkness = Math.min(1, progress); // 0 (light) to 1 (dark)
                dikshaText.style.color = `rgba(255, 228, 225, ${1 - darkness})`;
            });
            audioPlayer.addEventListener('ended', () => {
                dikshaText.style.color = 'rgba(29, 0, 37, 1)'; // Fully dark
                playPauseBtn.textContent = '▶';
                songEmbedDiv.classList.remove('playing');
            });
        }
    }, 1000);
}