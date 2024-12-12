## 🚗 Busan_Parking_Info | 부산 공영주차장 정보 앱

## 목적성

- 부산의 공영 주차장 정보들을 간편하게 정보를 제공.

- 주차장 검색 시 가격, 시간 등 주차장에 대한 정보가 나오지 않는 것들도 있기에 주차장 정보들을 한눈에 볼 수 있다.

- 가격이 비싼 사설 또는 민영 주차장의 정보도 함께 보는 것보단 비교적 저렴한 공영 주차장만의 정보를 알 수 있다.

## Stack (사용된 기술)

- React
- html / css
- javaScript
- node.js
- node-fetch
- Chakra UI
- git / github

## ⏰개발 기간

- 2024.08.16 ~ 2024.08.22 (7일)

## 📃프로젝트 기획

### 기획

- 부산에 있는 주차장을 검색 또는 내비게이션을 사용할 때에 시간당 3,000원 ~ 4,000원인 가격이 비싼 사설 주차장 또는 민영 주차장들의 정보들이 많았습니다.

- 그렇기 때문에 요금이 저렴하고 경차, 저공해 차량, 장애 차량 등 할인이 가능한 공영 주차장의 정보만을 알 수 있는 앱이 있었으면 좋겠다고 생각했습니다.

- 공영 주차장의 위치를 지도에 표시하고 검색이 가능하며 클릭 시 공영 주차장의 가격, 요금, 시간 등 자세한 정보들을 한눈에 볼 수 있고 즐겨 찾는 정보를 보여주면 사용자 편의성이 개선될 수 있을 것이라 생각했습니다.

### 작업 계획표

|   날짜   | 내용                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.08.16 | 래퍼런스 리서치 & api 리서치 (카카오맵 api & 공영 주차장 정보 api) 및 UI 기획                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 24.08.17 | node-fetch를 사용해 api 설정 <br> javascript api인 카카오맵 지도 초기 가이드라인 작업                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 24.08.18 | Router 설정(Home, Search, Detail, 404page 등) 전체 페이지 구성 <br> Chakra UI 테마 및 가이드라인 셋팅 <br> Header, Footer UI 및 기능 구성 / helmet 타이틀 구성                                                                                                                                                                                                                                                                                                                                                                                                   |
| 24.08.19 | Home - map 구성 <br> => 초기 현재 위치 표시, 주차장 위치 마커 표시, 지도 컨트롤 표시, 마커 클릭 시 인포윈도우 표시 <br> 지도 크기만큼만 마커 표시 => 남서, 북동 좌표 변경 시 마커 업데이트 <br> footer의 location버튼 클릭 시 현재 위치로 이동                                                                                                                                                                                                                                                                                                                   |
| 24.08.20 | Search 컴포넌트 구성 <br> => 검색 (장소 & 구/군 검색 가능) <br> => 검색 결과 클릭 시 상세 페이지로 이동 <br> => 즐겨찾기 한 주차장 꽉 찬 별 표시 (localstorage에 같은 id 값이 있는 것만 꽉 찬 별 표시) <br><br> Detail 상세페이지 컴포넌트 구성 <br> => 주차장 명, 주소 (지번 또는 도로명 주소), 주차정보, 요금, 운영시간, 위치정보 등 <br> => 즐겨찾기 버튼 (클릭 시 localstorage에 저장된 id값과 저장을 누른 정보의 id 값을 비교 후 없을 시 배열에 추가, 즐겨찾기 취소 시 localstorage의 id 값과 누른 데이터의 id 값이 다른 것들만 필터링 후 배열에 다시 저장) |
| 24.08.21 | 404 page 컴포넌트 구성 <br> favor 즐겨찾기 컴포넌트 구성 => localstorage에 저장된 배열을 가져와 map 함수로 나열                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 24.08.22 | 마무리 디자인 수정 / 코드 리팩토링 <br> 버그 및 오류 발견 시 수정, 기능 추가 및 변경할 사항이 있을 경우 업데이트 <br> github 배포 & 배포 확인, 배포 사이트 기능 작동 확인, console.log 제거                                                                                                                                                                                                                                                                                                                                                                      |

## 프로젝트 소개

- Busan_GGong_Parking_Info - 부산 공영주차장 정보 앱

- git Url - https://github.com/JongInHey/busan_ggong_parking_Info

- project url - https://jonginhey.github.io/busan_ggong_parking_Info

* open api 사용
  - 사용한 api
  - 부산 공영주차장 정보 조회 api Url - https://www.data.go.kr/data/15004683/openapi.do
  - 카카오맵 지도 api Url - https://apis.map.kakao.com/web

- 포인트 컬러 - `#ffa825` || `rgb(255, 168, 37)` 사용
- 폰트 (구글 웹 폰트) - `Noto Sans KR, sans-serif` || `Noto Serif KR, serif` 사용

<p>
<image src="https://cafeptthumb-phinf.pstatic.net/MjAyNDA4MjNfMTQg/MDAxNzI0Mzk4MzY4MDgz.PvLVzcG5AtTRPDIWrSzxQDJBG61D1gD6buSero9iS8Eg.VzlnF4vUWdJ2OsNtqk8Ad2wpPCczyzgYNmtYxAYDGR4g.JPEG/%EA%B2%B0%EA%B3%BC-1.jpg" alt="Home" width="234px" height="480px">
<image src="https://cafeptthumb-phinf.pstatic.net/MjAyNDA4MjNfNTMg/MDAxNzI0Mzk4MzY4MDY4.1l9jvT4YrI4L_G_wLEz3ozSbDEKk04k9NSQFkhgSsOAg.HkH3Vr2ICIeuNB0azYMVpsuUYF1OxSggHAz2NFVtMkEg.JPEG/%EA%B2%B0%EA%B3%BC-2.jpg" alt="Search" width="234px" height="480px">
<image src="https://cafeptthumb-phinf.pstatic.net/MjAyNDA4MjNfMjY0/MDAxNzI0Mzk4MzY4MDgz.rjbX8LrkuMo5Ynx4IEMFDG4Vfstx1Yf-g7KzqtW4h9og.uJ29_LqUg3Eh5bYHJqfnr8AGWAYqXxk8Fou6YVZCbSog.JPEG/%EA%B2%B0%EA%B3%BC-3.jpg" alt="favor" width="234px" height="480px">
<image src="https://cafeptthumb-phinf.pstatic.net/MjAyNDA4MjNfODcg/MDAxNzI0Mzk4MzY4MDgz.aSkA2xG37cmdVpc9RUZOidR3dCWnyrMKaz8dnq6KqSUg.kDizt2h8QL0_QV-4uVIY8V3fWunG_L8mB6uPL_jSvbUg.JPEG/%EA%B2%B0%EA%B3%BC-5.jpg" alt="Detail" width="234px" height="600px">
<image src="https://cafeptthumb-phinf.pstatic.net/MjAyNDA4MjNfMTIw/MDAxNzI0Mzk4MzY4MDcw.A5O6NJ22_a7YYuFzrmoUov1IwccseDH2U_-7oA89msMg.kVTqb_ad-Oh7IyZzHt0LSoJ8skHXUjiI5_BGFgIsEogg.JPEG/%EA%B2%B0%EA%B3%BC-4.jpg" alt="menu" width="234px" height="480px">
</p>

1. 메인 페이지

   - 내 현재 위치를 지도 중심 좌표로 지정

   - 부산의 공영주차장 마커로 표시

   - 마커 클릭 시 인포윈도우 표시, 자세히 보기 클릭 시 상세페이지로 이동

   - 하단 메뉴의 2번째 location 아이콘 클릭 시 내 위치로 부드럽게 이동

2. Footer 메뉴

   - 1번째 아이콘 : 홈으로 이동

   - 2번째 아이콘 : 홈의 지도 페이지일 때 현재 내 위치로 이동

   - 3번째 아이콘 : 검색 페이지로 이동

   - 4번째 아이콘 : 즐겨찾기 페이지로 이동

   - 5번째 아이콘 : 우측 모달 메뉴 보이기

3. 검색 페이지

   - 주차장 명 검색 가능 / 구/군 별 검색 가능

   - 검색 시 주차장 명, 주소, 분 당 가격 표시

   - 클릭 시 상세페이지로 이동

   - 즐겨찾기 한 주차장 꽉 찬 별로 표시
  
4. 즐겨찾기 페이지

   - 등록한 주차장이 없을 경우 추가 문구 표시 및 검색 페이지로 이동 가능

   - 즐겨찾기 등록 후 페이지로 이동 시 등록 한 주차장 명, 주소, 요금 표시

5. 상세 페이지

   - 상단에 주차장 명, 주소, 즐겨찾기 버튼 표시

   - 즐겨찾기 버튼 클릭 시 즐겨 찾는 주차장 등록

   - 주차구획수, 주차장유형, 주차장 구분, 요금 정보, 운영시간, 위치정보 표시

6. 우측 모달 메뉴

   - 각 페이지 홈, 검색, 즐겨 찾는 주차장으로 이동 가능

   - 메뉴 바깥 및 x 표시 클릭 시 메뉴 닫힘

## 프로젝트하면서 느낀 점

### 프로젝트 진행 중 어려웠던 부분

1. Chakra UI에 대한 정보가 많이 없었고 사용을 한 프로젝트가 없었는데 처음 써보는 라이브러리를 활용을 하려고 하니 디자인과 UI를 구성하는 부분에서 조금 버벅거리게 되었고 어떤 props 값을 받는 컴포넌트인지 모르는 것들이 많았습니다. 그래서 구성을 할 때에 잘 안 되는 것들이 많았고 또한 버튼, 모달, Form 등 테마 설정에 대해서도 헤매게되어 시간을 많이 소비하고 어려움을 겪었습니다.

2. 카카오맵 api를 사용할 때에 처음 지도 생성은 어렵지 않았습니다. 하지만 이 api는 javascript 기반 api여서 react 문법 또는 기법으로 바꿔서 활용을 해야 했고 kakao Maps API guide를 보며 사용을 하려고 했지만 여러 오류들을 마주하게 되었고 스크립트로 api를 사용하여 함수형 컴포넌트를 불러오는 것에 대해 어려움을 겪었습니다.

#### 겪은 어려움을 해결한 방법

1. Chakra Ui 홈페이지의 docs 창에서 필요한 부분들에 대해서 검색을 활용하여 어떻게 사용하는지, 어떤 props 값을 넘겨줄 수 있는지 학습을 하였고 docs 정보들을 바탕으로 디자인과 구성을 천천히 만들어 나갈 수 있었습니다. 또한 부족한 부분에 대해서는 구글링을 활용하여 테마 적용을 할 수 있었습니다.

2. 이 문제를 해결하기 위해 검색을 충분히 활용하였고 검색을 통해 스크립트로 api를 불러올 때에 window 전역 객체에 들어가게 되는 것을 알게 되었습니다. 이렇기 때문에 함수형 컴포넌트를 바로 인식하지 못하는 것을 알게 되었고 코드 상단에 `const { kakao } = window;`을 작성하여 함수형 컴포넌트에 인지 시킨 후 kakao 객체를 사용하였습니다.

### 프로젝트를 하면서 알게 된 내용

- `Chakra UI` 라이브러리를 사용하여 버튼, 모달 등 이벤트 컴포넌트 또는 컴포넌트 구성 및 디자인이 간편하게 적용 및 사용 가능한 방법

- `JavaScript API`를 사용하는 방법

- localStorage에 저장 시 `JSON.stringify`를 이용해 JSON 파일로 변환하는 방법

- `useCallback`을 이용해 인자로 전달한 kakao map 함수를 메모이제이션하여 새로 생성하지 않고 재사용하는 방법을 알게 됨

### 새로 알게 된 플러그인 & 라이브러리

- Chakra UI

  - React를 빌드하는데 필요한 블록을 제공

  - 간단하고, 모듈적이며, 접근 가능한 컴포넌트 라이브러리

  - 스타일 지정을 props로 넘겨주기만 하면 편하게 사용 가능

  - 접근성 표준 WAI-ARIA standards를 엄격하게 따른 개발

### 프로젝트를 진행하면서 반성 및 칭찬 사항

- **반성할 점**

  - 카카오 지도 api를 사용할 때에 카카오 developers에서 내 애플리케이션의 플랫폼에서 웹 사이트 도메인을 설정을 해야 합니다. 근데 초기 react localhost만 등록을 해놓은 상태에서 지도를 다 구성을 마친 후에 배포 또는 ip주소로 모바일에서 확인을 하려고 했으나 지도가 나오지 않는 현상이 발생하였고 오류가 발생하여 작성한 코드가 잘못된 줄 알고 한참을 헤매며 시간을 허망하게 사용하게 되었습니다. 하지만 알고 보니 플랫폼에 도메인 설정을 하지 않아서 일어나게 된 일이었습니다. <br> 이 문제를 해결하기 위해 앞으로의 개발 또는 기획을 할 때에 사용해야 할 필수 요소들에 대해서 조금 더 꼼꼼하고 자세하게 확인 후 기록 또는 정리를 하는 습관을 튼튼하게 만들고 개발에 임할 것입니다.

* **칭찬할 점**

  - 저는 새로운 것에 대해 배우는 것을 좋아합니다. 이번 프로젝트를 개발하면서 처음 사용하는 Chakra UI 라이브러리를 사용을 했습니다. 여러 컴포넌트를 import 하여 가져다 사용하는 것에 익숙하지 않았고 props로 값을 넘겨준다 등 이해가 가지 않았었습니다. <br> 하지만 Chakra UI 공식 홈페이지에서 많은 것들을 살펴보았고 어떤 컴포넌트가 어떤 엘리먼트를 가져오는지 알게 되었습니다. 그 후 빠르게 이 프로젝트에 사용을 하여 개발에 많은 시간을 단축할 수 있었습니다. <br> 이전 프로젝트와 다르게 스타일 코드 구조도 한눈에 파악하기 쉬웠으며 스타일 코드 때문에 코드 길이가 길어진 경험을 하여 스타일 코드를 분리하였는데 간편하게 사용하여 코드 정리에 대한 시간이 단축되었었습니다.

## 앞으로의 개발 방향

- **개발 방향**

  - Chakra UI를 통한 UI 디자인을 더 다양하게 활용해 볼 것. ex) 다크모드, alret 등

  - api를 사용하는 것이 아닌 알고리즘도 만들어 독자적인 프로젝트 해볼 것

  * props 또는 함수들을 매개변수로 넘겨주고 받을 때 console로 undefined 및 데이터를 꼭 확인해 볼 것.

  * 개발 진행이 느려지거나 안 될 시에는 적절한 휴식 및 다른 기능 먼저 빠르게 해결할 것

  * 모르는 문제들에 대해서는 고민하고 말고 mdn web docs 또는 라이브러리 공식 홈페이지 등에서 검색 후 빠르게 숙지하여 사용할 것.
