export default function chunk() {
  const newDiv = document.createElement("div");
  newDiv.innerText = "I'm chonk";
  newDiv.classList.add("text-violet");
  document.querySelector("body").appendChild(newDiv);
}
