# `@r.cochin/modal-react` - A Simple React Modal Component Library

A library of React components created using `create-react-app`.

## Installation

Run the following command:

\`\`\`bash
npm install "@r.cochin/modal-react"
\`\`\`

## Usage

To use the `Modal` component in your React application, you can import it as shown below:

\`\`\`jsx
import Modal from '@r.cochin/modal-react';
\`\`\`

### Modal Component

The `Modal` component is designed to be simple yet flexible. Here's an example of how to use it:

\`\`\`jsx
<Modal 
  isOpen={true} 
  autoClose={true} 
  autoCloseDuration={3000} 
  onClose={() => console.log("Modal Closed")} 
  color="lightgray" 
  border="10px"
>
  <h1>Hello, World!</h1>
</Modal>
\`\`\`

#### Parameters

Here are the props you can pass to the `Modal` component:

- `isOpen` (boolean): Determines if the modal is open or closed. Default is `false`.

- `autoClose` (boolean): Determines if the modal should automatically close after a certain duration. Default is `false`.

- `autoCloseDuration` (number): Specifies the duration (in milliseconds) after which the modal should automatically close. Default is `3000` (3 seconds).

- `onClose` (function): A callback function that is called when the modal is closed.

- `color` (string): Specifies the background color of the modal. Default is `'white'`.

- `border` (string): Specifies the border-radius of the modal. Default is `'5px'`.

#### Callbacks

- `onClose`: This function is called when the modal is closed. Useful for performing actions like resetting form states or logging.

### Example

Here's a more detailed example:

\`\`\`jsx
const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = () => {
    setIsOpen(false);
    console.log("Modal closed");
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal 
        isOpen={isOpen} 
        autoClose={true} 
        autoCloseDuration={5000} 
        onClose={handleClose}
        color="lightblue"
        border="10px"
      >
        <h1>Hello, World!</h1>
      </Modal>
    </div>
  );
};
\`\`\`
