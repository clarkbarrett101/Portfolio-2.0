
async function GetWakaStats() {
    const response = await fetch('https://nextjs-red-six-46.vercel.app/api/wakatime/clarkbarrett101')
    return response.json();
}


async function SetStats() {
    let stats = await GetWakaStats();
    document.getElementById("html").innerText = stats.data.languages[1].text
    document.getElementById("js").innerText = stats.data.languages[2].text
    document.getElementById("cs").innerText = stats.data.languages[0].text
}