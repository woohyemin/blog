# Styled Components란?

`Styled Components`는 컴포넌트 시스템 스타일링을 위한 `CSS-in-JS` 라이브러리로, JavaScript 안에 CSS를 작성할 수 있게 해준다. 특히 React와 같은 컴포넌트 기반 프레임워크에 적합합니다. 

## 특징
- CSS-in-JS (CSS를 JavaScript 파일 내에 작성하여 컴포넌트와 스타일을 함께 관리)
- 동적 스타일링 (props를 사용하여 동적으로 스타일 변경 가능)
- 스코프 스타일링 (컴포넌트 내부에서만 적용되는 스타일을 정의하여 스타일 충돌 방지)
- 자동 벤더 프리픽스 (브라우저 호환성을 위한 벤더 프리픽스를 자동으로 추가)

## 장점
- 컴포넌트 기반 스타일링
- 동적 스타일링이 용이
- 스타일 스코프 관리가 간편

## 단점
- 런타임 성능 이슈 (대규모 애플리케이션에서)
- JavaScript에 의존적 (JS를 잘 모르는 디자이너에게는 어려울 수 있음)
- 초기 설정이 필요



# Tailwind CSS란?

`Tailwind CSS`는 유틸리티 기반의 CSS 프레임워크이다. 미리 정의된 클래스들을 조합하여 빠르고 효율적으로 스타일링이 가능하다.

## 특징
- 유틸리티 클래스: CSS 클래스 하나에 하나의 스타일 속성이 매핑되어 있어, 작은 단위의 스타일을 조합하여 원하는 디자인을 만들 수 있다.
- 빠른 스타일링: HTML에서 바로 스타일을 적용할 수 있어, CSS 파일을 별도로 작성하지 않아도 된다.
- 모듈성: 클래스들이 독립적으로 작동하기 때문에, 유지보수가 쉽고 재사용성이 높다.
- 반응형 디자인: Tailwind는 기본적으로 반응형 디자인을 지원하며, 미디어 쿼리를 통해 다양한 디바이스에 맞게 스타일을 조정할 수 있다.

## 장점
- 빠른 개발 속도
- 일관된 디자인 시스템 유지
- 클래스 조합으로 인한 높은 유연성


## 단점
- HTML이 복잡해질 수 있음
- CSS 작성에 익숙한 개발자에게는 초기 진입 장벽이 있을 수 있음



# Styled Components를 Tailwind CSS로 교체한 이유

사실 스타일링 방식을 `Tailwind CSS`로 결정하기까지 시행착오가 꽤 있었다.

아직 `Tailwind CSS`를 사용해본 적이 없었고, 블로그를 빨리 개발하고 싶었기에 사용해본 경험이 있는 `Styled Components`를 사용하는 것으로 결정했었다. 하지만 개발하다보니 Next.js 14버전에서는 `Styled Components`가 다소 불편한 점들이 있었다.

#####

`Styled Components`는 이미 많이 사용되고 있고, 분명 장점이 많은 스타일링 라이브러리라고 생각한다.

하지만 Next.js 14버전 프로젝트에서 아래와 같은 어려움(아쉬움)이 있었다.


## 1. SSR로 동작하는 컴포넌트에서 사용하지 못한다.
`Styled Components`는 CSR로 동작하는 컴포넌트에서만 사용할 수 있다.
이 부분은 `Styled Components` 사용하는 부분을 컴포넌트화하여 사용하면 크게 문제되지 않았지만, 단순히 스타일을 적용하기 위해 컴포넌트로 분리해야 하는 경우에는 마음에 좀 걸렸다.


## 2. styled 함수로 만든 컴포넌트를 다시 styled 함수로 감싸서 사용할 때 이슈가 있다.
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

`Typography` 컴포넌트의 일부 스타일만 재정의하여 사용하고 싶어서 아래처럼 `styled` 함수를 다시 사용하여 정의하였다.

```typescript
// 컴포넌트 정의 예시
const StyledText = styled(Typography)`
  color: red;
`

// 컴포넌트 사용 예시
<StyledText size='medium' weight='bold' />
```

하지만 이렇게 사용했을 경우 `color`가 `red`로 적용은 되지만 `size`와 `weight` `props`가 정상적으로 적용되지 않는 것 같았다.

그렇게 해당 이슈에 대해 찾아보았지만 내가 원하는 방향으로 작업할 수 있는 방법을 찾기 어려웠다.😥

사실 이런 문제들은 개발하는데 큰 문제가 되진 않았지만 뭔가 마음에 별로 들지 않았다. (내가 부족해서 그런 걸 수도...🫠)

결국 이번 기회에 `Next.js`에서 추천하는 `Tailwind CSS`를 사용해보게 되었다.

#####




# Tailwind CSS 사용해본 후기

생각보다 러닝커브는 높지 않았던 것 같다. 이미 `Styled Components`로 화면을 거의 다 구현한 상태에서 `Tailwind CSS`로 스타일링 방식을 교체하는 작업을 진행했다.

덕분에(?) `Tailwind CSS`를 사용하면서 `Styled Components`보다 좋다고 느꼈던 점들을 정리해보려고 한다.

## 1. 다크 모드 구현하기 쉬웠다.
`Styled Components` 사용했을 때는 다크모드를 구현하기 위해서 생각보다 이것저것 해야할 것들이 많았던 것 같다.
테마 상태 값을 따로 관리하면서 ThemeProvider에 전달해주어야 했고, ThemeProvider 상위에는  ServerStyleSheet, StyleSheetManager 등을 사용하여 추가적으로 작업이 더 필요했다.

하지만 `Tailwind CSS`에서는 테마 값을 따로 관리할 필요 없이, setTheme라는 함수를 제공했기 때문에 필요할 때 해당 함수로 테마 값을 변경해주면 됐다.
번거로운 작업 없이 아래처럼 구현해서 RootLayout 내부에서 감싸주면 된다.

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

사실 어떤게 좋다 라고 얘기하기엔 취향의 차이일 수 있을 것 같은데, 아래의 케이스 기준으로는 개인적으로 Tailwind CSS가 좀더 직관적으로 보기 편한 것 같다. 여기에 반응형을 위한 코드까지 추가하게 되면 더 코드의 양이 차이가 날 것 같다.

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