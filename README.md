# ggabaggaba (까바까바)

IT's Your Life 6기 - 1주차 친해지길 바라 프로젝트에서 만든 토이 프로젝트입니다.

해당 프로젝트는 16회차 동기들과 친해지기 위해 까바까바를 개발한 사람들의 특성과 성격을 맞추는 간단한 프로젝트입니다.

`vanillaJS`, `HTML`, `CSS`만을 사용하여 구현하였습니다.

## 기본 실행 방법

(1) 깃 클론 실행

    $ git clone "{repository 주소}"

(2) 깃 클론 이후 패치 실행

    $ git fetch

- 기본 코드 작성 브랜치 : develop (자유롭게 브랜치 사용하셔도 됩니다.)
- master branch : main

코드를 푸시하기 전, PR을 반드시 거쳐주세요~! 코드 리뷰는 서로 성장하는데 큰 도움이 됩니다. 😆

(3) `src/index.html` 에서 Live Server 실행

## 디렉토리 구조

```
├── assets
│    └── images (외부 이미지 삽입 위치)
├── src (실질적인 컴파일 및 코드 실행 위치)
│    ├── common (전역 변수 및 타입 설정 위치)
│    │    └── constants (전역 변수)
│    ├── styles (전역 스타일링 및 글꼴 파일)
│    ├── utils (각종 함수 모음)
│    └── pages
│    │    ├── result (결과 페이지)
│    │    ├── test (테스트 페이지)
│    │    ├── index.html (root html)
│    │    ├── index.js (root js)
│    │    └── index.module.css (root css)
```

기본적으로 도메인 별로 페이지를 구성하였습니다.
추후, api 호출을 위한 기타 설정이 추가될 예정입니다.

## 기여자

[Wha1eSon(손영호)](https://github.com/wherewhale)
