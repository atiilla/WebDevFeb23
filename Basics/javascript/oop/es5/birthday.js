const characters = document.querySelectorAll('pre');
const colorChars = () => {
  characters.forEach((pre) => {
    const chars = pre.textContent.split('');
    const coloredChars = chars.map((char) => {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      return `<span style="color: ${randomColor}">${char}</span>`;
    });
    pre.innerHTML = coloredChars.join('');
  });
};

setInterval(colorChars, 100); // Change colors every 100 milliseconds
