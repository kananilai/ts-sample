//double assertion
export function getFirstLatter(str:number) {
  //as unknown でアップキャストして、as stringでダウンキャスト
  return (str as unknown as string).charAt(0);
}

