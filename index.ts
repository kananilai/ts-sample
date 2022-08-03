//Genericsは引数の前に記述
const foo = <T extends string>(arg: T) => {
  //extendsで型を指定することで、メソッドが使える様になる。extendsで型制限をしないとunknown型になる。
  //ユニオンタイプスの場合は、メソッドにアクセスできない⇨if文で型を絞る必要がある。(typeofなど)
  return { value: arg };
};

// const foo1 = foo("");
// const foo2 = foo(1);
// const foo3 = foo([true]);
