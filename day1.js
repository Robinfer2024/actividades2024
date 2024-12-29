function displayActivities() {
    const activities = [
        { time: "08:00", activity: "Desayuno" },
        { time: "09:30", activity: "Clase de matemáticas" },
        { time: "12:00", activity: "Almuerzo" },
        { time: "15:00", activity: "Entrenamiento físico" },
        { time: "18:00", activity: "Cena" },
    ];

    const activityList = document.getElementById("activityList");
    activities.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.time} - ${item.activity}`;
        activityList.appendChild(li);
    });
}
