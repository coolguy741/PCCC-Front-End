import { render, screen } from "../../../lib/util/test-utils";
import { MessageBox } from "../MessageBox";

describe("Sign in form", async () => {
  it("Should render without crash", async () => {
    const text = "Message Box";
    render(<MessageBox text={text} />);
    expect(screen.getByTestId("message-text")).toHaveTextContent(text);
  });
});
