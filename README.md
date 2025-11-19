# Web Camera Test

Next.js 14 기반의 웹 카메라 테스트 애플리케이션입니다.

## 기술 스택

- **프레임워크**: Next.js 14
- **React**: 18.3.1
- **TypeScript**: 5.6.3
- **스타일링**: Tailwind CSS 4.1
- **패키지 매니저**: Yarn
- **코드 포맷팅**: Prettier, ESLint

## 시작하기

### 의존성 설치

```bash
yarn install
```

### 개발 서버 실행

```bash
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
yarn build
```

### 프로덕션 실행

```bash
yarn start
```

### 코드 포맷팅

```bash
yarn format
```

### 린팅

```bash
yarn lint
```

## 프로젝트 구조

```
web-camera-test/
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       └── globals.css
├── public/
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```
