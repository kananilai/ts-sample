//リテラルタイプスで推論されている
export const color = "red";

// string Literal Typesにダウンキャスト
// redしか受け取らない
// 自分が指定した値であることを保証する

const theme = {
  // color: "red" as "red",
  // const assertion⏬
  color: "red",
  backgroundColor: "blue",
} as const;
