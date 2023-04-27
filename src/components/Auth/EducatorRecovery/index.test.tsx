import { MemoryRouter } from "react-router-dom";

import { render, screen } from "../../../lib/util/test-utils";
import { EducatorRecovery } from "../EducatorRecovery";

describe("Educator Recovery", async () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <EducatorRecovery />
      </MemoryRouter>,
    );
  });

  it("Should render without crash", async () => {
    expect(screen.getByText(/educator code recovery/i)).toBeTruthy();
  });
});
