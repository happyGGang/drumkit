# drumkit

<img width="558" alt="image" src="https://user-images.githubusercontent.com/96277834/195868530-0bd0bb98-7b2c-40b0-bb06-e33345c6bbcb.png">


- 드럼 만들기 구현
- 키보드 입력으로 오디오 재생할 수 있음
- 클릭으로 오디오 재생

## 이번 프로젝트에서 익숙해져볼 문법

### 유사 배열 객체

- 배열이 아닌데 배열인척 하는 객체
- `querySelectorAll`로 dom을 선택하는 경우 Nodelist가 반환되는데, 이게 그 유사배열객체이다.
- 유사배열객체는 `Array.from` 을 사용해 배열로 만들 수 있다.

### TransitionEvent

https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent

- transitionEvent가 끝날 때 발생

## 참고

### keycode

https://keycode.info/

- 키보드 입력으로 keycode를 알 수 있는 사이트
