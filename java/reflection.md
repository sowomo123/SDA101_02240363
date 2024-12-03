1. Describe the main concepts you applied?
 concepts that i used here is avaScript (Web Components):
UserProfile Class:

The UserProfile class extends HTMLElement, making it a custom element.
It attaches a shadow DOM using this.attachShadow({ mode: 'open' }), which allows the component to have encapsulated styles and HTML.
Template:

A template containing HTML for the profile card is created and added to the shadow DOM.
It consists of a div with class profile-card, an h2 for the name, and a p for the role.

2. Discuss new skills or knowledge acquired
new skill that i got was  isplayed inside a shadowRoot, so any styling for this component should be added within the shadow DOM.
3. Discuss what you learned.
i have learnt about connectedCallback():
This lifecycle method is called when the custom element is added to the document.
It sets the text content of the #name and #role elements within the shadow DOM based on the attributes of the custom element (name and role).
4. challenges and solution u faced?
Challenge: Understanding and using the Shadow DOM can be tricky, especially when dealing with styling and accessing elements inside the shadow tree.
Solution: Shadow DOM encapsulates styles and DOM elements, making it easier to avoid conflicts with other elements on the page. However, you must use ::part, ::slotted, or use JavaScript to manipulate elements inside the shadow DOM.