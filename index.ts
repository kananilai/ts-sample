const foo = (id: string, age: number, name: string) => {
  return 0;
};

//今回は返り値の方をnumberにしているから=>で指定している。なんでも良い時はanyを使う。
type Return<T> = T extends (...args: [any, infer U, ...any[]]) => any
  ? U
  : never;

type Foo = Return<typeof foo>;
