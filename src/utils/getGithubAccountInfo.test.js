import { getGithubAccountInfo } from "./getGithubAccountInfo";

test("Account name should be dalram", () => {
  expect(
    getGithubAccountInfo("https://github.com/dalram/20-bandomasis").accountName
  ).toBe("dalram");
});

test("Account name should be undefined", () => {
  expect(getGithubAccountInfo("https://badlink.com").accountName).toBe(
    undefined
  );
});
test("Account name should be undefined if provided url do not have github.com on it", () => {
  expect(
    getGithubAccountInfo("https://badlink.com/dalram/20-bandomasis").accountName
  ).toBe(undefined);
});

test("Account repository should be 20-bandomasis", () => {
  expect(
    getGithubAccountInfo("https://github.com/dalram/20-bandomasis")
      .accountRepository
  ).toBe("20-bandomasis");
});
test("Account repository should be undefined", () => {
  expect(getGithubAccountInfo("https://badlink.com").accountRepository).toBe(
    undefined
  );
});

test("Account repository should be undefined if provided url do not have github.com on it", () => {
  expect(
    getGithubAccountInfo("https://badlink.com/dalram/20-bandomasis")
      .accountRepository
  ).toBe(undefined);
});
