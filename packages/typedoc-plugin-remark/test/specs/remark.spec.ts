import * as fs from 'fs';
import * as path from 'path';

describe(`Remark`, () => {
  test(`should parse members index`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/members/README.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should parse members module page`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/members/module-1/README.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should parse members class page`, async () => {
    const contents = fs
      .readFileSync(
        path.join(__dirname, '../out/members/module-1/classes/SomeClass.md'),
      )
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should parse modules index`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/modules/README.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should parse modules module page`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/modules/module-1.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });

  test(`should parse globals page`, async () => {
    const contents = fs
      .readFileSync(path.join(__dirname, '../out/globals/README.md'))
      .toString();
    expect(contents).toMatchSnapshot();
  });
});
