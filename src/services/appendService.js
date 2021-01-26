import Component from '../components/AbstractClasses/Component';

class AppendNodeService {
  _appendComponent(parentNode, component) {
    if (component && component.view) {
      Component.appendToDom(parentNode, component);
    }
  }

  _appendDomNode(parentNode, childNodes) {
    if (childNodes) {
      parentNode.append(childNodes);
    }
  }

  append(parentNode, ...children) {
    children.forEach((child) => {
      if (child instanceof Component) {
        this._appendComponent(parentNode, child);
      } else {
        this._appendDomNode(parentNode, child);
      }
    });
  }
}

export default new AppendNodeService();
