function calculate() {
    const eatTime = parseInt(document.getElementById("eat").value);
    const sleepTime = parseInt(document.getElementById("sleep").value) * 60;
    const poopTime = parseInt(document.getElementById("poop").value);
    const gamesTime = parseInt(document.getElementById("games").value);
    const workTime = parseInt(document.getElementById("work").value) * 60;
    const studyTime = parseInt(document.getElementById("study").value) * 60;
    const gymTime = parseInt(document.getElementById("gym").value) * 60;

    const totalTime = eatTime + sleepTime + poopTime + gamesTime + workTime + studyTime + gymTime;

    document.getElementById("eat-result").innerHTML = `You spend ${eatTime} minutes eating each day.`;
    document.getElementById("sleep-result").innerHTML = `You spend ${sleepTime / 60} hours sleeping each day.`;
    document.getElementById("poop-result").innerHTML = `You spend ${poopTime} minutes using the bathroom each day.`;
    document.getElementById("games-result").innerHTML = `You spend ${gamesTime} minutes playing computer games each day.`;
    document.getElementById("work-result").innerHTML = `You spend ${workTime / 60} hours working each day.`;
    document.getElementById("study-result").innerHTML = `You spend ${studyTime / 60} hours studying each day.`;
    document.getElementById("gym-result").innerHTML = `You spend ${gymTime / 60} hours studying each day.`;

    document.getElementById("total-result").innerHTML = `You spend <strong>${totalTime}</strong> minutes on your daily routines each day.`;

    alert(`You spend ${totalTime} minutes on your daily routines each day.`);

};