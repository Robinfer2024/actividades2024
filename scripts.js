function loadActivities() {
    const day = document.getElementById("days").value;
    const activityList = document.getElementById("activityList");
    activityList.innerHTML = ""; // Limpia la lista

    // Carga el script correspondiente al día
    const script = document.createElement("script");
    script.src = `day${day}.js`;
    script.onload = () => {
        // Llama a la función del día cargado
        if (typeof displayActivities === "function") {
            displayActivities();
        }
    };
    document.body.appendChild(script);
}
