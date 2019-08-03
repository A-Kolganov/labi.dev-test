function showTxt (e) {
    e.preventDefault();
    const partTxt = e.currentTarget.parentNode.parentNode.querySelector('.search-item__title__txt__hidden');
    const txtBox = e.currentTarget.parentNode.parentNode.querySelector('.search-item__title__txt');
    txtBox.textContent = txtBox.textContent.slice(0,300);
    txtBox.textContent += partTxt.textContent;
    const showMoreBtn = e.currentTarget
    showMoreBtn.removeEventListener('click',showTxt);
}

export {showTxt};