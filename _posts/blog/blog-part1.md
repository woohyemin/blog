예전부터 기술 블로그를 직접 개발해서 공부한 내용들을 기록해야겠다는 생각을 했었다.

계속 생각만 하고 미뤄왔었는데 이번 기회에 만들어 보았다.

# 기술 스택은 어떤 걸로 할까?
## React, 그리고 Typescript
우선 나에게 익숙한 `React`와 `Typescript`를 사용을 우선적으로 고려했다. 실제로도 많이 사용되는 조합이기 때문에 이 부분에 대해서는 길게 고민하진 않았다.
## Next.js 사용해야 할까?
그리고 블로그를 만들고 추후에 검색엔진 최적화 작업도 해볼 예정이기 때문에 `Next.js`도 사용하는 것으로 결정했다.

# Next.js로 결정했으니, 이제 프로젝트를 생성해보자.
그런데.. 또 한가지 고민되는 부분이 생겼다. 프로젝트 매니저는 어떤 것을 사용하는 것이 좋을까..?🤔

막상 나만의 블로그를 만든다고 생각하니 하나하나 진지하게 고민하게 된다..

그래서 결국 `npx`, `npm`, `yarn`, `pnpm`의 차이를 알아보았다.
결론적으로 `pnpm`이 `npm`과 `yarn`의 단점을 보완하여 나왔다고 하여 `pnpm`으로 결정했다.

## 이제 진짜로 프로젝트 생성을 한다..
다음은 `pnpm`을 사용해서 `blog`라는 이름의 `next.js` 프로젝트를 생성하는 명령어이다.
타입스크립트를 사용할 예정이기 때문에 `--typescript` 옵션도 추가해주었다.

```bash
pnpm create next-app blog --typescript
```

명령어를 입력하면 무언가가 설치되는 듯 하다가 몇가지를 선택하라고 물어본다.

나는 일단 Tailwind CSS를 제외하고 모두 Yes를 선택하여 프로젝트를 생성했다.

```bash
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
✔ What import alias would you like configured? … @/*
```

지금 생각해보면 `Tailwind CSS`를 사용해 볼 걸 그랬나 라는 생각도 든다. 이번에 블로그를 개발할 때 `Styled Components`를 사용했는데 SSR로 동작하는 화면에서 `Styled Components`를 사용하지 못한다거나, 스타일을 props로 받아서 적용하는 컴포넌트를 styled 함수로 다시 감싸서 스타일 적용할 때 기존 스타일 적용에 이슈가 생기는 등의 아쉬운 점들이 있었다. () `Tailwind CSS`는 `Next.js` 프로젝트에서 권장하는 라이브러리이기도 해서 추후에 `Styled Components`를 `Tailwind CSS`로 교체하는 작업도 시도해보려고 한다.

## 드디어 프로젝트가 생성되었다. 잘 실행되는지 테스트 해보자.

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
###
이렇게 프로젝트 생성을 마쳤다.

다음 글에서는 스토리북(Storybook)을 설치하는 내용을 다룰 예정이다.
