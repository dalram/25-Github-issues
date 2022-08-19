import { getGithubAccountInfo } from "./getGithubAccountInfo";

test("Account name should be dalram", () => {
  expect(
    getGithubAccountInfo("https://github.com/dalram/20-bandomasis").accountName
  ).toBe("dalram");
});

test("Account repository should be 20-bandomasis", () => {
  expect(
    getGithubAccountInfo("https://github.com/dalram/20-bandomasis")
      .accountRepository
  ).toBe("20-bandomasis");
});
