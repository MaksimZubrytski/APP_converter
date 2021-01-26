export default class Component {
  constructor(props = {}) {
    if (new.target === Component) {
      throw Error('You can\'t create instance from the Abstract class');
    }

    this.props = props;

    this._view = null;
    this._infoForRerender = {
      parentNode: null,
      viewChildNodes: null,
    };

    this._init();
    this.componentDidMount();
  }

  static appendToDom(parentNode, component) {
    component.saveInfoForRerender(parentNode);

    parentNode.append(component.view);
  }

  saveInfoForRerender(parentNode) {
    this._infoForRerender = {
      parentNode,
      removedNodes: this._view instanceof DocumentFragment
        ? [...this._view.childNodes]
        : [this._view],
    };
  }

  get view() {
    return this._view;
  }

  /*
  * The method inits component
  * */
  _init() {
    this._view = this.render();
  }

  /*
  * This method should return HTML node
  * */
  render() {}

  /*
  * This method runs after component is rendered
  * */
  componentDidMount() {
    console.log('component did mount');
  }

  /*
  * This method changes the component state and after then updates the view
  * */
  setState(newState) {
    this.state = { ...this.state, ...newState };

    this._rerenderComponent();
  }

  /*
  * This method re-renders the component
  * */
  _rerenderComponent() {
    const view = this.render();
    const { parentNode } = this._infoForRerender;

    this._removeView();

    this._view = view;
    this.saveInfoForRerender(parentNode);

    parentNode.append(view);
    console.log('Component is rerendered');
  }

  _removeView() {
    const { removedNodes } = this._infoForRerender;

    removedNodes.forEach((node) => node && node.remove());
  }
}
