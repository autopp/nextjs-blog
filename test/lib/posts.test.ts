import { readdirSync } from "fs"
import { getAllPostIds } from "../../src/lib/posts"

jest.mock("fs", () => ({
  readdirSync: jest.fn(),
}))
const mockReaddirSync = (readdirSync as unknown) as jest.Mock<string[], [string]>

describe("getAllPostIds", () => {
  beforeEach(() => {
    mockReaddirSync.mockReturnValue(["first.md", "second.md"])
  })

  it("returns filenames without ext as id", async () => {
    const ids = await getAllPostIds()
    expect(ids).toEqual([{ params: { id: "first" } }, { params: { id: "second" } }])
  })
})
