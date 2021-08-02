const selectors = {
  heroBanner: '.heroBanner',
  scrollButton: '.heroBanner__scrollButton',
  seciton: 'section'
};

class ScrollToSection {
  constructor() {
    this.elements = this._getElements();
    if (Object.keys(this.elements).length === 0) return;
    this._setupEventListeners();
  }

  _getElements() {
    const container = document.querySelector(selectors.heroBanner);
    return container ? {
      container,
      scrollButton: container.querySelector(selectors.scrollButton),
      secondSection: document.querySelectorAll(selectors.seciton)[1]
    } : {};
  }

  _setupEventListeners() {
    this.elements.secondSection ? this.elements.scrollButton.addEventListener('click', this._handleScrollClick) : null;
  }

  _handleScrollClick = () => {
    this.elements.secondSection.scrollIntoView({behavior: "smooth", block: "end"});
  }
}
