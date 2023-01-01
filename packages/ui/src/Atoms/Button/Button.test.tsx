import { describe, expect, it, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react';

import { Button } from './Button';
import styles from './button.module.scss';


describe('Button', () => {

  it('should render the given label',() => {
    const { getByText } = render(<Button label="Click me" />);
    const button = getByText('Click me');
    // @ts-ignore
    expect(button).toBeInTheDocument();
  });

  it('should have primary style if primary prop is set', () => {
    const { container }  = render(<Button primary={true} label="Click me" />);
    // @ts-ignore
    expect(container.firstChild).toHaveClass(styles.primary);
  });

  it('should use given backgroundColor and color props', () => {
    const { container } = render(
      <Button backgroundColor="#f00" color="#fff" label="Click me" />
    );
    // @ts-ignore
    expect(container.firstChild).toHaveStyle({
      backgroundColor: '#f00',
      color: '#fff',
    });
  });

  it('should have medium size by default', () => {
    const { container } = render(<Button label="Click me" />);
    // @ts-ignore
    expect(container.firstChild).toHaveClass(styles.medium);
  });

  it('should use given size prop', () => {
    const { container } = render(<Button size="large" label="Click me" />);
    // @ts-ignore
    expect(container.firstChild).toHaveClass(styles.large);
  });

  it('should trigger onClick event when clicked', () => {
    const onClick = vi.fn();
    const { getByText } = render(<Button label="Click me" onClick={onClick} />);
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

});

