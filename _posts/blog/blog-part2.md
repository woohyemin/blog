# 프로젝트 생성

다음은 `pnpm`을 사용해서 `blog`라는 이름의 `next.js` 프로젝트를 생성하는 명령어이다.
타입스크립트를 사용할 예정이기 때문에 `--typescript` 옵션도 추가해 주었다.

```bash
pnpm create next-app blog --typescript
```

명령어를 입력하면 무언가가 설치되는 듯하다가 몇 가지를 선택하라고 물어본다.

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

자동으로 생성되어 있는 `package.json` 파일을 보면 아래와 같은 스크립트를 확인할 수 있다.

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
},
```

##
아래 명령어를 입력하면 바로 실행해 볼 수 있다.

```bash
pnpm dev
```

##
정상적으로 실행된다면 `http://localhost:3000`라는 url로 아래와 같은 화면을 볼 수 있다.

(동일한 포트를 사용하는 등의 이슈가 있을 경우 `http://localhost:3001` 등으로 실행될 수도 있다.)

![img](/images/posts/blog/part2/next_js_run_screen.png)

##
이렇게 프로젝트 생성을 마쳤다. 다음 글에서는 Tailwind CSS 적용한 내용에 대해 다룰 예정이다.
