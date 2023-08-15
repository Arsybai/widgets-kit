function toggleCollapse(button) {
    const answer = button.parentNode.nextElementSibling;
    answer.classList.toggle('show');
    button.textContent = answer.classList.contains('show') ? '-' : '+';
  }
  