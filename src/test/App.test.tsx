import { describe, expect, it } from 'vitest';
import App from '../App';
import { dom, render, screen, userEvent, fireEvent, createEvent } from '../utils/test-utils';
import { debug } from 'vitest-preview';

describe('Simple working test', () => {

  it('should increment count on click', async () => {
    render(<App />);


    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByRole('button'));

    debug();
    expect(await screen.findByText(/count is: 7/i)).toBeInTheDocument();
  });
});



// describe("", () => {
//   it("should find a text in the document", async () => {
//     render(<App />);
//     const input = screen.getByLabelText('Username')
//     userEvent.type(input, "Obalende")
//     // fireEvent.change(input, { target: { value: "Obalende" } })

//     debug();
//     expect(await screen.findByDisplayValue(/Obalende/i)).toBeInTheDocument();
//   })
// })
