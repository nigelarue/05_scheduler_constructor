const saveButtons = document.querySelectorAll("#save_button");

saveButtons.forEach(button => {
  button.addEventListener("click", function() {
    const textarea = this.parentNode.querySelector("#description");
    const selectedTime = this.parentNode.querySelector("#hour").textContent;
    const siblingAttributes = getSiblingAttributes(this.parentNode);

    const savedData = {
      time: selectedTime,
      description: textarea.value,
      ...siblingAttributes
    };

    localStorage.setItem(selectedTime, JSON.stringify(savedData));
  });
});

function getSiblingAttributes(parentNode) {
  const siblingNodes = [...parentNode.parentNode.children];
  const siblingAttributes = {};

  siblingNodes.forEach(node => {
    if (node.id !== parentNode.id) {
      const key = node.querySelector("#hour").textContent;
      const value = node.querySelector("#description").value;
      siblingAttributes[key] = value;
    }
  });

  return siblingAttributes;
}
