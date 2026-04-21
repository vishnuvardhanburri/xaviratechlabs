// Mock motion module for server-side rendering
export const motion = {
  div: 'div',
  h1: 'h1', 
  h2: 'h2',
  h3: 'h3',
  p: 'p',
  section: 'section',
  span: 'span',
  button: 'button',
  a: 'a',
  li: 'li',
  ul: 'ul',
  form: 'form',
  input: 'input',
  img: 'img',
};

export const AnimatePresence = ({ children }: { children: React.ReactNode }) => children;

export default motion;
