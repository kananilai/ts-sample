export const Obj = {
  foo: "foo",
  111: "bar",
};

// type Obj = typeof Obj;
// type Key = keyof Obj;
//上をまとめると↓
// type Key = keyof typeof Obj;

function test(x:keyof typeof Obj){
  return;
}
//この場合、"foo"と"bar"のどちらかを引数に渡すことができる
test("foo");
