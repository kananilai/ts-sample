//<T = string>で初期値設定
//extendsはGenericsとはいえある程度制限したい時に使う
export type Foo<T extends string | number = string> = {
  value: T;
};

const foo1: Foo = {
  value: "",
};
const foo2: Foo<number> = {
  value: 222,
};
