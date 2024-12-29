function displayActivities() {
    const activities = [
        { time: "07:00", activity: "Correr en el parque" },
        { time: "09:00", activity: "Clase de física" },
        { time: "12:30", activity: "Almuerzo con amigos" },
        { time: "14:00", activity: "Revisión de tareas" },
        { time: "19:00", activity: "Ver una película" },
    ];

    const activityList = document.getElementById("activityList");
    activities.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.time} - ${item.activity}`;
        activityList.appendChild(li);
    });
}
