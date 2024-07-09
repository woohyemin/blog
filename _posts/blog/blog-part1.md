# 블로그 개발을 시작한 이유

예전부터 기술 블로그를 직접 개발해서 공부한 내용들을 기록해야겠다는 생각을 했었다.

계속 생각만 하고 미뤄왔었는데 이번 기회에 만들어 보았다.

# 기술 스택은 어떤 걸로 할까?

## React, 그리고 Typescript
우선 나에게 익숙한 `React`와 `Typescript` 사용을 우선적으로 고려했다. 실제로도 많이 사용되는 조합이기 때문에 이 부분에 대해서는 길게 고민하진 않았다.

## Next.js
블로그를 만들고 추후에 검색엔진 최적화 작업도 할 예정이기 때문에 SSR 동작이 가능한 `Next.js`도 사용하는 것으로 결정했다.

## Tailwind CSS
사실 스타일링 방식을 `Tailwind CSS`로 결정하기까지 시행착오가 꽤 있었다.

아직 `Tailwind CSS`를 사용해본 적이 없었고, 블로그를 빨리 개발하고 싶었기에 처음에는 익숙한 `Styled Components`를 사용하는 것으로 결정했었다.

하지만 개발하다보니 **`Next.js 14버전`에서는 `Styled Components`가 적합하지 않다고 판단**되었다.

관련 내용은 [[나만의 블로그를 만들어보자 - Part 2] Tailwind CSS 적용하기](/posts/blog-part2)에서 다룰 예정이다.

## pnpm
지금까지 프로젝트 매니저 관련하여 깊게 고민해보지 못했던 것 같은데, 막상 나만의 블로그를 만든다고 생각하니 하나하나 진지하게 고민하게 된다.

그래서 결국 [npx, npm, yarn, pnpm의 차이](/posts/package-manager)를 알아보았다.

결론적으로 `pnpm`이 `npm`과 `yarn`의 단점을 보완하여 나왔다고 하여 `pnpm`으로 결정했다.


# 프로젝트를 생성

다음은 `pnpm`을 사용해서 `blog`라는 이름의 `next.js` 프로젝트를 생성하는 명령어이다.
타입스크립트를 사용할 예정이기 때문에 `--typescript` 옵션도 추가해주었다.

```bash
pnpm create next-app blog --typescript
```

명령어를 입력하면 무언가가 설치되는 듯 하다가 몇가지를 선택하라고 물어본다. 본인이 원하는 것으로 선택하면 된다.

나는 Tailwind CSS를 제외하고 모두 Yes를 선택하여 프로젝트를 생성했다. (결국 Tailwind CSS 사용하게 됐지만..)

```bash
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
✔ What import alias would you like configured? … @/*
```

# 프로젝트 실행

자동으로 생성되어 있는 `package.json` 파일을 보면 이렇게 스크립트가 있는 것을 확인할 수 있다.

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
},
```

아래 명령어를 입력하면 바로 실행해볼 수 있다.

```bash
pnpm dev
```

정상적으로 실행된다면 `http://localhost:3000`라는 url로 아래와 같은 화면을 볼 수 있다.

(동일한 포트를 사용하는 등 이슈가 있을 경우 `http://localhost:3001` 등으로 실행될 수도 있다.)
#####
이렇게 프로젝트 생성을 마쳤다.

다음 글에서는 Tailwind CSS 적용한 내용에 대해 다룰 예정이다.
