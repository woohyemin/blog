# 일단 React와 Typescript를 사용할건데 Next.js를 사용할지 말지 결정해야 한다.

블로그를 만들고 추후에 검색엔진 최적화도 해볼 예정이기 때문에 SSR로 동작하는 Next.js를 선택했다.

# Next.js로 결정했으니, 이제 프로젝트를 생성해보자.

근데.. 또 한가지 고민되는 부분이 생겼다.
프로젝트 매니저는 어떤 것을 사용하는 것이 좋을까..?
막상 나만의 블로그를 만든다고 생각하니 하나하나 진지하게 고민하게 된다..

그래서 결국 npx, npm, yarn, pnpm의 차이를 알아보았다.
결론적으로 pnpm이 npm과 yarn의 단점을 보완하여 나왔다고 해서 pnpm으로 결정했다..ㅎ

# 이제 진짜 진짜로 프로젝트 생성을 한다.

다음은 pnpm을 사용해서 `hem-lab-blog`라는 이름의 `next.js` 프로젝트를 생성하는 명령어이다.
타입스크립트를 사용할 예정이기 때문에 `--typescript` 옵션도 추가해주었다.

![img](/images/sample_image.png)

- rkskafasf ㄹㅁㄴㄹㅁㄴㄹ
- ㅁㅇㄹㅁㄴㄹㅁㄴㄹ
  > - ㅁㅇㄹㅁㄴㄹㅇㄴㄹ
  > - ㅁㅇㄹㅁㄴㄹㅇㄴㄹㅁㄴㅇㅁㄴㅇ

```bash
 pnpm create next-app hem-lab-blog --typescript
```
