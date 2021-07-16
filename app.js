let accordionQuestions = document.querySelectorAll(".accordion__question");
let accordionAnswers = document.querySelectorAll(".accordion__answer");
let buttons = document.querySelectorAll(".button");

accordionQuestions.forEach((accQuest, index) => {
  accQuest.addEventListener("click", (e) => {
    let panel = accordionAnswers[index];
    let button = buttons[index];

    if (panel.style.maxHeight) {
      //accordion is open, let's close it
      panel.style.maxHeight = null;

      panel.classList.remove("open");
      accQuest.classList.remove("open");
      button.classList.remove("active");
    } else {
      //accordion is closed, but before opening new one let's close previous accordion
      //remove className "open"
      accordionQuestions.forEach((el) => el.classList.remove("open"));
      accordionAnswers.forEach((el) => {
        //!important- following piece of code closes all previous accordions
        el.style.maxHeight = null;
        el.classList.remove("open");
      });
      buttons.forEach((el) => el.classList.remove("active"));

      //this line of code opens the panel of accordion
      panel.style.maxHeight = panel.scrollHeight + "px";

      accQuest.classList.add("open");
      panel.classList.add("open");
      button.classList.add("active");
    }
  });
});
