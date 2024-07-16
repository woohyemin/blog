# Tailwind CSS를 사용한 이유

사실 스타일링 방식을 `Tailwind CSS`로 결정하기까지 시행착오가 꽤 있었다.

아직 `Tailwind CSS`를 사용해본 적이 없었고, 블로그를 빨리 개발하고 싶었기에 사용해본 경험이 있는 `Styled Components`를 사용하는 것으로 결정했었다. 하지만 개발하다보니 Next.js 14버전에서는 `Styled Components`가 다소 불편한 점들이 있다고 느껴져 `Tailwind CSS`로 교체하게 되었다.

#####

`Styled Components`는 이미 많이 사용되고 있고, 분명 장점이 많은 스타일링 라이브러리라고 생각하지만, 개인적으로 Next.js 14버전 프로젝트에서 아래와 같은 아쉬움들이 있었다.


## 1. SSR로 동작하는 컴포넌트에서 사용하지 못한다.
`Styled Components`는 CSR로 동작하는 컴포넌트에서만 사용할 수 있다.
이 부분은 `Styled Components` 사용하는 부분을 컴포넌트화하여 사용하면 크게 문제되지 않았지만, 단순히 스타일을 적용하기 위해 컴포넌트로 분리해야 하는 경우에는 마음에 좀 걸렸다.


## 2. styled 함수로 만든 컴포넌트를 다시 styled 함수로 감싸서 사용할 때 이슈가 있었다.
개발하면서 스타일을 `props`로 받아서 적용하는 컴포넌트를 `styled` 함수로 다시 감싸서 스타일 적용하고 싶은 경우가 종종 있었다.
예를 들어, 이렇게 사용 가능한 `Typography` 컴포넌트를 개발했다고 가정해보자. (실제 개발할 때는 `h1 ~ h6`, `span`, `p` 등을 선택할 수 있도록 컴포넌트를 개발했지만 예시에서는 생략했다.)

```typescript
// 컴포넌트 정의 예시
export const Typography = styled.span<TypographyProps>`
  font-size: ${({ size, theme }) => theme.typography.size[size]};
  font-weight: ${({ weight, theme }) => theme.typography.weight[weight]};
  color: ${({ color, theme }) => theme.palette.text[color]};
`

// 컴포넌트 사용 예시
<Typography size='medium' weight='bold' />
```

`Typography` 컴포넌트의 일부 스타일만 재정의하여 사용하고 싶어서 아래처럼 `styled` 함수를 다시 사용하여 `StyledTypography`라는 컴포넌트를 정의하였다.

```typescript
// 컴포넌트 정의 예시
const StyledTypography = styled(Typography)`
  color: red;
`

// 컴포넌트 사용 예시
<StyledTypography size='medium' weight='bold' />
```

하지만 이렇게 사용했을 경우 `color`가 `red`로 적용은 되지만 `size`와 `weight`가 정상적으로 적용되지 않았다.

해당 이슈에 대해 찾아보았지만 내가 원하는 방향으로 작업할 수 있는 방법을 찾기 어려웠다.😥

사실 이런 문제들은 개발하는데 큰 문제가 되진 않았지만 뭔가 아쉬운 마음이 들었다. (혹시 방법이 있다면 댓글 좀 부탁드립니다...🥹)

아무튼 이러한 이유로 이번 기회에 `Next.js`에서 추천하는 `Tailwind CSS`를 사용해보게 되었다.

#####




# Tailwind CSS 사용해본 후기

생각보다 러닝커브는 높지 않았던 것 같다. 이미 `Styled Components`로 화면을 거의 다 구현한 상태에서 `Tailwind CSS`로 스타일링 방식을 교체하는 작업을 진행했다.

덕분에(?) `Tailwind CSS`를 사용하면서 `Styled Components`보다 좋다고 느꼈던 점들을 정리해보려고 한다.

## 1. 다크 모드 구현하기 쉬웠다.
`Styled Components` 사용했을 때는 다크모드를 구현하기 위해서 생각보다 이것저것 해야할 것들이 많았던 것 같다.
테마 상태 값을 따로 관리하면서 `ThemeProvider`에 전달해주어야 했고, `ThemeProvider` 상위에는 `ServerStyleSheet`, `StyleSheetManager` 등을 사용하여 추가적으로 작업이 필요했다.

하지만 `Tailwind CSS`에서는 테마 값을 따로 관리할 필요 없이, `setTheme`라는 함수를 제공했기 때문에 필요할 때 해당 함수로 테마 값을 변경해주면 됐다.
번거로운 작업 없이 아래처럼 구현해서 `RootLayout` 내부에서 감싸주는 방식으로 작업하니 큰 어려움 없이 다크 모드 구현이 가능했다.

```typescript
"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element> | React.ReactNode;
}

export default function Providers({ children }: ThemePropsInterface) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
```

## 2. 클래스네임이 꽤 직관적이고 사용하기 편했다.
예시 코드를 보면 이해하기 쉬울 것 같아 작성해 보았다.

사실 어떤게 좋다 라고 얘기하기엔 취향의 차이일 수 있을 것 같은데, 아래의 케이스 기준으로는 개인적으로 `Tailwind CSS`가 좀더 직관적으로 보기 편하다고 느껴졌다. 여기에 반응형을 위한 코드까지 추가하게 되면 코드의 양이 더 차이나게 될 것 같다.

```typescript
// Styled Components 예시

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 8px 0;
`;

...

<FlexBox>
  <span>Styled Components</span>
</FlexBox>
```

```typescript
// Tailwind CSS 예시

<div className="flex flex-col gap-2 my-2">
  <span>Tailwind CSS</span>
</div>
```

아무튼 이렇게 아직까진 큰 문제 없이 `Tailwind CSS`를 사용하고 있다.

다음 글에서는 프로젝트를 Github에 연동하는 내용을 다룰 예정이다.