//FAQ
const quests = document.querySelectorAll(".faq__item");

quests.forEach((qst) => {
    const questsButton = qst.querySelector(".faq__button");

    questsButton.addEventListener("click", () => {
        const questResponse = qst.querySelector(".faq__desc");

        const questActive = document.querySelector(".faq__desc--active");

        verificaQuestao(qst, questResponse, questActive);
    });
});

function verificaQuestao(quest, response, active) {
    const questIcon = quest.querySelector("button i");
    const title = quest.querySelector(".faq__title h3")
    console.log(title);
    
    const iconsActive = document.querySelectorAll(".quest button i");

    iconsActive.forEach((icon) => icon.style.transform="rotate(180deg)");

    if (active) {
        active.style.height = 0;
        active.classList.remove("faq__desc--active");
        title.style.color = "var(--clr-white)";
        questIcon.style.transform="rotate(0deg)";
        questIcon.style.color = 'var(--clr-white)';

    }

    if (response !== active) {
        questIcon.style.transform="rotate(180deg)";
        response.classList.add("faq__desc--active");
        response.style.height = response.scrollHeight + 15 + "px";
        title.style.color = 'var(--clr-orange-high)';
        questIcon.style.color = 'var(--clr-orange-high)';
    }
}