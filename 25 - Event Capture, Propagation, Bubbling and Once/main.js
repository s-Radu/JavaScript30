const divs = document.querySelectorAll("div");
function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); //!  stop the bubbeling effect ( ripple effect ) and only responds to the block that we have clicked, it will not trigger the event listner on the other divs that are above the one we flicked ( if they exist )
}

divs.forEach((div) =>
  div.addEventListener("click", logText, {
    //  once: true, //! THis will make the event lisner run only once and not again untill the page has been reloaded, if and only if we don't have stopPropagation(), if we do, it will allow us to use the event listner as many times as we have outder divs ( items to click on )
  })
);
