function customRender(reactElement, container){
  /*const domElement = document.createElement(reactElement.type)   //yha parr element create to ho gaya

  domElement.innerHTML = reactElement.children
  domElement.setAttribute('href', reactElement.props.href)
  domElement.setAttribute('target', reactElement.props.target)

  container.appendChild(domElement)*/


  const domElement = document.createElement(reactElement.type)    //ye ek method hai jo continously element ko crete karte rheta hai
  domElement.innerHTML = reactElement.children
  for (const prop in reactElement.props) {
    if(prop == 'children') continue;                             //agar prop ki key children hhaii to continue kardo
    domElement.setAttribute(prop, reactElement.props[prop])
  }

  container.appendChild(domElement)

}

const reactElement = {          //ye basiclly dikha raha hai ki rect kaise cheezo ko dekhta hai, wo hamesha element ko tree ke form me convert karta hai
    type: 'a',
    props: {
      href: 'https://google.com',
      target: '_main'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer) 