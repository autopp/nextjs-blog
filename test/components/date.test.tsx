import React from "react"
import X from "@/components/date"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"

describe("Date", () => {
  it("render date string", () => {
    const { getByText } = render(<X dateString="2021-04-15" />)
    expect(getByText("April 15, 2021")).toBeInTheDocument()
  })
})
