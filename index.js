// Задание 2 *дополнительно
// Выберите одну API из списка. Сделайте fetch запрос, 
// разместите полученную от API информацию на странице html.

const whatshouldIDo = document.getElementById("randomTask");
const refreshBtn = document.getElementById("nextTask");

async function getNewMission() {

    const responce = await fetch("https://www.boredapi.com/api/activity");
    const resultJson = await responce.json();
    const {activity} = resultJson;

    whatshouldIDo.textContent = activity;
}

getNewMission();
refreshBtn.addEventListener('click', getNewMission);