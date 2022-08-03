import { PartialDeep } from "type-fest";

//互換性があるものが残る
type Foo1 = Extract<string | number, string>;

//互換性がないものが残る
type Foo2 = Exclude<string | number, string>;

//nullとundefinedを除外する
type Foo3 = NonNullable<string | null | undefined>;

//objectのkeyとvalueを指定
type Foo4 = Record<string, number>;

const obj: Foo4 = {
  hoge: 1,
  huge: 2,
};

//関数の引数をTupleとして取得
function foo(a: string, b: number[], c: boolean) {
  return;
}
type Foo5 = Parameters<typeof foo>;

//文字列操作、組み込みのUtility Types
type Foo6 = Uppercase<"hello">;
type Foo7 = Lowercase<"Hello">;
type Foo8 = Capitalize<"hello">;
type Foo9 = Uncapitalize<"Hello">;


//type fest



type User = {
  name: string;
  age: number | null;
  address:{
    country: "US" | "UK" | "JP"
  }
};
//o@tionalにする。標準のPartialではネストされたプロパティには対応していない 👉partialDeepで対応
type PartialUser = PartialDeep<User>;

const user: PartialUser = {
  name: "John",
  address: {},
};
