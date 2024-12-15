const faqQuestion = document.querySelectorAll(
  ".container__main__faq__question"
);

faqQuestion.forEach((question) => {
  question.addEventListener("click", () => {
    const details = question.closest(".container__main__faq");

    const img = question.querySelector(
      ".container__main__faq__question__image"
    );
    details.hasAttribute("open")
      ? (img.src = "./images/icon-plus.svg")
      : (img.src = "./images/icon-minus.svg");
  });
});
