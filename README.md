# CAMPERZ :: 캠퍼들의 SNS 캠퍼즈

## <span id='1'>1. 서비스 소개</span>
🦁안녕하세요! 우리는 멋쟁이사자처럼 프론트엔드 스쿨 3기 프로젝트팀 ***20세기 라이언***입니다.

***CAMPERZ***는 캠핑을 좋아하는 사람들이 모여 서로의 노하우를 공유하고 각자의 캠핑 용품을 사고 파는 `SNS`이자 `온라인 마켓`입니다.

* 자신의 스토어에서 판매하고 있는 캠핑 용품을 등록하여 홍보할 수 있습니다.
* 회원 가입과 로그인을 하면 캠핑 경험을 공유하며 즐거운 SNS 활동을 할 수 있습니다. 사진과 함께 게시물을 작성하고, 이를 공유할 수 있습니다. 다른 사용자를 팔로우하면 유저가 올린 게시물을 홈 피드에서 확인할 수 있습니다. 피드를 구경하다가 마음에 드는 게시물을 발견했다면 '좋아요'를 누를 수 있고, 댓글을 남길 수도 있습니다.

🔗 *배포 URL*: https://camperz-two.vercel.app<br>
🏕  *체험계정(Email/PW)*: camperz@email.com / 12345678

---

  🚐 [1. 서비스 소개](#1) 💨  
  🚐 [2. 팀원 소개](#2) 💨  
  🚐 [3. 개발 기간](#3) 💨  
  🚐 [4. 프로젝트 목표](#4) 💨  
  🚐 [5. 우리가 일하는 방법](#5) 💨  
  🚐 [6. 컨벤션](#6) 💨  
  🚐 [7. 개발 환경](#7) 💨  
  🚐 [8. 폴더 구조](#8) 💨  
  🚐 [9. 역할 분담](#9) 💨  
  🚐 [10. 기능 시연](#10) 💨  
  🚐 [11. 코드 특징과 구현 방식](#11) 💨  
  🚐 [12. 트러블슈팅](#11) 💨  
  🚐 [13. 프로젝트를 마치며](#11) 💨  

---

## <span id='2'>2. 팀원 소개</span>

|**😈FE 은혜연**|**🐯FE 김주열**|**🤖FE 안현수**|**🐶FE 김은하**|
| :-: | :-: | :-: | :-: |
|<img src='https://user-images.githubusercontent.com/108520997/210527733-58ea7338-b990-4746-a4d9-d23fd8c8921f.png' height=220 width=180>|<img src='https://user-images.githubusercontent.com/108520997/210526486-7331abc2-ee97-4336-b904-b63e95e1ea37.png' height=220 width=180>|<img src='https://user-images.githubusercontent.com/108520997/210526602-d3b97e07-b0de-4140-8fb3-84892722b162.png' height=220 width=180>|<img src='https://user-images.githubusercontent.com/108520997/210526926-17b4dca4-04ab-4183-8e8e-e105336e9dcd.png' height=220 width=180>|
|🔗[BLOG](https://itsowavy.tistory.com/) / [GitHub](https://github.com/itso-wavy)|🔗[GitHub](https://github.com/jy1475)|🔗[GitHub](https://github.com/HyunSu3949)|🔗[BLOG](https://for-it-study.tistory.com/) / [GitHub](https://github.com/mayo516)|
|팀장, 기록 담당|피그마 담당|개발 담당|CRUD 담당|

## <span id='3'>3. 개발 기간</span>
**`22/12/04 - 23/12/30`**

* 사전 준비 기간(팀 유대감 형성, 공동 강의 수강, 컨셉 논의): ***11/28 - 12/11***
* 디자인: ***12/04 - 12/09***
* 기능 구현: ***12/12 - 12/20***
* 스타일: ***12/21 - 12/26***
* 리팩토링, 날씨 기능 추가: ***12/27 - 12/30*** 

(휴강일 12/16, 23, 30 + 토/일요일 OFF)

## <span id='4'>4. 프로젝트 목표</span>
1. 다함께 리액트 실력 끌어올리고 실전 능력 키우기
   
2. 소통과 협업 능력 기르기
   
3. 모두에게 첫 프로젝트 경험, 다음 프로젝트의 발판이 될 수 있도록 긍정적인 기억 남기기

## <span id='5'>5. 우리가 일하는 방법</span>
### - 팀의 가치
1. 우리는 서로를 존중합니다.  
각자의 성향과 생각을 열린 마음으로 받아들이고 솔직한 소통을 최우선으로 합니다. 

2. 우리는 효율적으로 일합니다.  
회의는 9-18시 안에 진행하고 코딩 중 매시간 규칙적인 휴식을 가지며 몰입을 위해 휴일과 휴강일은 쉽니다.

3. 우리는 완성도를 추구합니다.  
우선적인 기능 구현 후에는 더 나은 코드를 위해 고민하고 리팩토링 합니다.

4. 우리는 함께 합니다.  
각자의 담당엔 책임감을 가지고 임하되 서로의 어려움을 이해하고 문제 상황을 같이 해결합니다.

5. 우리는 본질에 집중합니다.  
규칙은 결과를 위한 도구임을 알고 있습니다. 최소한의 컨벤션을 유지하며 목표 달성에 효율적인 방법을 끊임없이 고민합니다.

### - 협업 방법
* 사전 스터디 진행: 팀원들의 리액트 실력을 상향 평준화하고, 깃헙 브랜치 전략에 익숙해지는 시간을 갖음  
([Wiki: 한번의 사이클이 돌아가기까지](https://github.com/20th-lion/camperz/wiki))
  
* [칸반보드](https://www.notion.so/20th-century-lions/eb1ad668043b4b9e803366f97454e35c)와 [회의록](https://www.notion.so/20th-century-lions/22-12-02-4c6c3a8e84ab46be8cc54beacf4f923a) 사용: 전체 흐름과 팀원별 진행 상황을 누구나 쉽게 확인할 수 있도록 함
<img src='https://user-images.githubusercontent.com/108520997/210458662-eed4e867-9f5c-4350-bb14-7bd11e04329d.png'>
  
* 단계적인 목표 날짜를 정하여 스프린트 방식 도입, 데일리 스크럼 진행
  
* 무기명 설문과 투표로 의견 취합, 피그잼 브레인스토밍, 페어 프로그래밍

## <span id='6'>6. 컨벤션</span>
* GITHUB-FLOW 전략: 깃헙 초심자가 쉽게 접근할 수 있는 방법 채택
  
* 브랜치 네임 컨벤션
  
* 커밋 컨벤션
```
- feat: 새로운 기능 구현
- fix: 오류 수정
- docs: readme.md, json 파일 등 수정, 라이브러리 설치(문서 관련)
- refactor: 코드 리팩토링
- chore: 빌드 부분 혹은 패키지 매니저 수정 사항
- rename: 파일 혹은 폴더명 수정, 옮기기
- remove: 파일 삭제
```
* GitHub Issue / PR 템플릿 사용
  
* [코드 컨벤션](https://github.com/20th-lion/camperz/wiki/%EC%BD%94%EB%94%A9-%EC%BB%A8%EB%B2%A4%EC%85%98)


## <span id='7'>7. 개발 환경</span>

<img src='https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black'> <img src='https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=black'>

- 개발: React / Styled Components
  
- 디자인: 포토샵, 피그마

- 배포: Vercel
 
- 협업: GitHub, [Notion 워크스페이스](https://20th-century-lions.notion.site/CAMPERZ-91a4630f1975483eb5b7de4841f544a7), Discord 팀 채널

## <span id='8'>8. 폴더 구조</span>
```
│README.md
│package.json
│package-lock.json
│.gitignore
│.prettierrc.js
│.editorconfig
│setting.json
├─🗃️public
└─🗃️src
    ├─🗂️assets
    │  ├─📁icons
    │  ├─📁image
    │  └─📁logo
    ├─🗂️component
    │  ├─📁background
    │  ├─📁chat
    │  ├─📁common
    │  ├─📁context
    │  ├─📁feed
    │  ├─📁follow
    │  ├─📁form
    │  ├─📁login
    │  ├─📁modal
    │  ├─📁post
    │  ├─📁product
    │  ├─📁search
    │  └─📁user
    ├─🗂️lib
    │  ├─📁apis
    │  ├─📁dummy
    │  ├─📁hooks
    │  ├─📁styles
    │  └─📁utils
    └─🗂️pages
        ├─📁Chat
        ├─📁ErrorPage
        ├─📁Follow
        ├─📁Home
        ├─📁Login
        ├─📁Post
        ├─📁Product
        ├─📁Profile
        ├─📁Register
        └─📁Search
```

## <span id='9'>9. 역할 분담</span>
<img src='https://user-images.githubusercontent.com/108520997/210528338-d052de6d-7c16-4239-b6ca-c039b4c85218.png' width=600>

## <span id='10'>10. 기능 시연</span>
링크를 누르면 상세 설명 페이지로 이동합니다.

### 1) 홈+채팅

|[Splash](https://github.com/20th-lion/camperz/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#1-splash)|[회원가입/프로필 설정](https://github.com/20th-lion/camperz/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#2-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%ED%94%84%EB%A1%9C%ED%95%84-%EC%84%A4%EC%A0%95)|[로그인](https://github.com/20th-lion/camperz/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#3-%EB%A1%9C%EA%B7%B8%EC%9D%B8)|
|:-:|:-:|:-:|
|<img width=300 src='https://user-images.githubusercontent.com/70703716/210491885-2dcace18-ea58-4ac5-bf98-b74f2eaabdac.gif'> |<img width=300 src='https://user-images.githubusercontent.com/70703716/210498001-eea42291-6698-498a-908c-9e9d3bef2ad4.gif'>|<img width=300 src='https://user-images.githubusercontent.com/70703716/210491123-49105262-ae47-4e4c-afe3-4ed575a4ebab.gif'>|
|[**홈 피드**](https://github.com/20th-lion/camperz/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#4-%ED%99%88-%ED%94%BC%EB%93%9C)|[**유저 검색**](https://github.com/20th-lion/camperz/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#5-%EC%9C%A0%EC%A0%80-%EA%B2%80%EC%83%89)|[**날씨/채팅**](https://github.com/20th-lion/camperz/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#6-%EB%82%A0%EC%94%A8%EC%B1%84%ED%8C%85)|
|<img width=300 src='https://user-images.githubusercontent.com/70703716/210542124-613770d3-b63c-4297-9176-020007deccf2.gif'>|<img width=300 src='https://user-images.githubusercontent.com/70703716/210491217-041f56f7-5e88-4db7-b08e-ce949358eaea.gif'>|<img width=300 src='https://user-images.githubusercontent.com/70703716/210488539-7ff28cb1-6161-45a7-a626-822e0b72b7f8.gif'>|

## 2) 게시물 작성

|[**게시물 등록**](https://github.com/20th-lion/camperz/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#1-%EA%B2%8C%EC%8B%9C%EB%AC%BC-%EB%93%B1%EB%A1%9D)|[**게시물 수정/삭제**](https://github.com/20th-lion/camperz/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#2-%EA%B2%8C%EC%8B%9C%EB%AC%BC-%EC%88%98%EC%A0%95%EC%82%AD%EC%A0%9C)|[**게시물 상세 페이지**](https://github.com/20th-lion/camperz/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#3-%EA%B2%8C%EC%8B%9C%EB%AC%BC-%EC%83%81%EC%84%B8-%ED%8E%98%EC%9D%B4%EC%A7%80)
|:-:|:-:|:-:|
|<img width=300 src='https://user-images.githubusercontent.com/70703716/210488458-b40d874b-0d52-4b05-8f9c-afd750c036b1.gif'>|<img width=300 src='https://user-images.githubusercontent.com/70703716/210488481-0840f315-b947-4687-90e4-13ff79073bf6.gif'>|<img width=300 src='https://user-images.githubusercontent.com/70703716/210489095-2dd2b3e9-fd2a-4e63-ac5c-5d1d5183adca.gif'>

## 3) 프로필

|[**내 프로필**](https://github.com/20th-lion/camperz/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#1-%EB%82%B4-%ED%94%84%EB%A1%9C%ED%95%84)|[**프로필 수정**](https://github.com/20th-lion/camperz/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#2-%ED%94%84%EB%A1%9C%ED%95%84-%EC%88%98%EC%A0%95)|[**상품 등록**](https://github.com/20th-lion/camperz/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#3-%EC%83%81%ED%92%88-%EB%93%B1%EB%A1%9D)|
|:-:|:-:|:-:|
|<img width=300 src='https://user-images.githubusercontent.com/70703716/210491281-4939dd30-b1f7-486a-a01e-1cab8e3e34bf.gif'>|<img width=300 src='https://user-images.githubusercontent.com/70703716/210492413-9dcd9c4e-dad3-4c3d-807e-d3f74fb19549.gif'>|<img width=300 src='https://user-images.githubusercontent.com/70703716/210488512-e9582886-87f5-4cce-af6c-27912170d482.gif'>
|[**상품 수정/삭제**](https://github.com/20th-lion/camperz/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#4-%EC%83%81%ED%92%88-%EC%88%98%EC%A0%95%EC%82%AD%EC%A0%9C)|[**팔로잉/팔로워**](https://github.com/20th-lion/camperz/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#5-%ED%8C%94%EB%A1%9C%EC%9E%89%ED%8C%94%EB%A1%9C%EC%9B%8C)|[**로그아웃**](https://github.com/20th-lion/camperz/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#6-%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83)|
|<img width=300 src='https://user-images.githubusercontent.com/70703716/210488517-05b3ce4b-004a-403e-8c31-9b1f4158c713.gif'>|<img width=300 src='https://user-images.githubusercontent.com/70703716/210491754-e77b8eb2-a005-4b45-8be1-c614b6a180ee.gif'>|<img width=300 src='https://user-images.githubusercontent.com/70703716/210491136-4d216436-bfbe-4776-b012-837e9a1333a3.gif'>|


## <span id='11'>11. 코드 특징과 구현 방식</span>

1. **컴포넌트 구조화**  
* common 폴더로 공통 컴포넌트를 구조화 했습니다.
* apis 폴더로 사용되는 api를 일괄 관리 했습니다.
* dummy 폴더로 마크업 구현을 위한 data를 일괄 관리 했습니다.
  
2. **컴포넌트의 재사용성 고려**
    
중복으로 사용되는 입력폼 양식(로그인/회원가입/상품등록/프로필 설정 등)과 페이지는 컴포넌트화하여 재사용성을 높였습니다. 

3. **custom Hook**  
useModals 훅을 생성하여 모달을 열고 닫는 함수를 반환할 수 있도록 했습니다. 각각의 모달은 Modals 컴포넌트에서 관리하고 AppProvider에서 모달의 여닫음을 관리합니다. 

4. **알기 쉬운 변수명**을 작성하고 **목적에 따라** 기능적 컴포넌트와 스타일드 **컴포넌트명을 구분**하여 사용 했습니다.
   
5. **더 나은 사용자 경험**  
* 로딩 애니메이션을 추가하여 사용자가 로딩 상태를 인지할 수 있도록 했습니다.
* 페이지/사진/날씨 로딩에 실패할 경우 대체이미지를 보여줍니다. 
* Footer를 통해 화면에서 바로 접근하기 어려운 페이지를 라우팅 하였습니다.
  
6. **로그인 여부에 따른 페이지 처리**  
로그인 여부에 따라 이동할 수 있는 페이지를 제한 하였습니다. AppProvider에서 로그인 여부와 로그인 및 로그아웃 기능을 관리합니다.

7. **useParams 사용**
* 프로필 페이지 구현  
 useParams를 이용해 사용자의 아이디를 받아와 정보를 띄워줍니다. 내 프로필에서는 상품 등록 및 프로필 수정 페이지로 이동할 수 있는 버튼이 나타나고, 다른 유저의 프로필에서는 팔로우 버튼이 나타납니다.
* 댓글 모달 클릭시 내 댓글이면 삭제, 다른 유저의 댓글이면 신고 기능을 사용할 수 있습니다.

8. **axios 객체 생성**  
토큰 값이 필요한 것과 아닌 것을 각각 구분하여 api 요청 서버의 url과 header 값을 담고 있는 axios 객체를 생성하였습니다. interceptor 기능을 활용해 로그인시 토큰 값에 undefined가 들어있을 경우 토큰 값을 재설정 했습니다. 또한 axios get 요청인 경우 로딩 화면을 구현하기 위해 body 요소에 class를 추가하여 로딩 화면이 나타날 수 있도록 구현 했습니다.

9. **추가기능**으로 OpenWeatherMap API를 이용한 날씨 서비스를 제공합니다.

## <span id='12'>12. 트러블슈팅</span>

1. **이미지 에러 처리** 
* **문제**  
초기에는 에러이미지가 포스팅의 절반을 차지 했습니다. 
* **원인**  
게시자가 계정 등록/포스팅/상품 등록시 이미지를 등록하지 않은 경우 혹은 이미지 URL이 잘못된 경우 앱에서도 이미지가 깨져서 나오게 되었습니다. 
* **해결**  
포스팅시 이미지를 등록하지 않은 경우에는 이미지를 등장시키지 않도록 했고 URL이 잘못된 경우에는 각 케이스에 따라 별도의 대체 이미지를 디자인하여 보여주도록 했습니다.

2. **api요청 형식 오류로 인한 CORB 오류**
* **문제**   
전달한 이미지 파일을 요청 받지 못하는 문제 발생했습니다. 특이한 점은 상태 코드가 200이지만 data 값이 없어서 원인을 찾는 데 어려움을 겪었습니다.
* **원인**  
api에 전달하는 데이터 형식 오류 때문에 발생하게 된 api의 잘못된 값 반환으로 인한 CORB 오류였습니다.
* **해결**  
CORS 개념 이해를 통해 api가 요구하는 알맞은 형식의 데이터 전달로 해결 했습니다.
    
3. **스타일 재작업 필요**
* **문제**
기능 구현 후 각자 담당 페이지를 스타일링 하였는데 코드를 합쳐서 보니 스타일링 통일이 되지 않았습니다.
* **원인**
피그마 디자인을 직접 만든 뒤 그를 토대로 스타일링 작업을 하여 정확한 pixel 값이 맞춰지지 않은 상태였고, 코드 재활용이 가능한 요소에도 4명 각자의 스타일로 마크업과 스타일링이 이루어졌습니다.
* **해결**
기준을 세워서 전체 페이지 마크업과 스타일링을 다시 해야 했고 중간에 스타일드 컴포넌트명 컨벤션이 필요함을 깨닫게 되어 한사람이 전체 코드를 통일하는 작업을 거쳤습니다. 이번과 같이 팀프로젝트에서 최소한의 디자인 파일을 가지고 개발을 하는 경우 한사람이 마크업과 스타일링을 맡아서 진행하거나 명확한 컨벤션을 가지고 모두가 이를 지키며 작업해야 한다는 것을 배웠습니다.

4. **기존에 작성한 기능을 컴포넌트화하여 통일했을 때 겪은 이슈**
* **문제**  
버튼 기능을 구현했는데 버튼 컴포넌트를 통일하면서 조건식과 전달받는 프롭스가 달라져 같은 기능을 다시 구현한 경험이 있습니다.
* **원인**  
컨벤션을 제대로 확인 안 하고 담당 컴포넌트 안에서만 기능 구현을 하고 있었습니다.
* **해결**  
버튼 컴포넌트를 크기에 맞춰 스몰/미디움/라지로 분리함으로써 최소한의 코드 수정을 거쳐 작성 했습니다.

5. **로그인 후 새로고침을 해야만 정보가 로딩됨**
* **문제**  
 로그인 했을 때 토큰 값이 로컬스토리지에 정상적으로 저장 되었으나 api 요청이 거절 되었습니다.
* **원인**  
token 값이 로컬스토리지에 저장 되었지만 api 요청 header에는 여전히 undefined 상태였습니다.
* **해결**  
interceptor 기능을 활용해 header 안에 token이 undefined일 경우 로컬스토리지에서 토큰 값을 다시 불러올 수 있도록 구현 했습니다.

6. **다른 유저 프로필 페이지 이동시 정보 로딩 안됨**
* **문제**  
다른 유저의 프로필 페이지로 이동시 정보 로딩이 안 되는 문제가 있었습니다.
* **원인**  
프로필 페이지 하위 컴포넌트들의 useEffect depth가 빈 배열이어서 하위 컴포넌트들이 리렌더링 되지 않았습니다.
* **해결**  
useEffect의 depth 배열에 useParams로 받아온 user 값을 넣어서 user 값이 변할 때마다 리렌더링과 동시에 유저 정보를 얻어오는 api 요청 함수를 실행하도록 했습니다.

## <span id='13'>13. 프로젝트를 마치며</span>
|😈은혜연|팀장으로서 팀 분위기가 1순위였고, 멋진 첫 프로젝트 경험과 함께 생각치 못한 좋은 피드백까지 받아 뿌듯합니다.|
|:-:|:-:|
|**🐯김주열**|**맡은 부분 책임감 있게 완성하기! 팀원들과 의사소통하면서 재미있게 진행하기! 두가지를 만족하는 첫프로젝트 였습니다.**|
|**🤖안현수**|**첫 프로젝트여서 두려움이 있었으나 하나씩 만들어지는 기능을 보면서 프로젝트를 성공적으로 마칠 수 있겠다는 자신감을 얻을 수 있었습니다. 팀원 분들과 즐거운 분위기속에서 진행하여 만족스럽습니다. 모든 팀원이 각자의 역할을 잘 수행하여 멋진 결과물을 얻어갑니다!**|
|**🐶김은하**|**기본에 최대한 충실한 프로젝트를 완성하고 협업 하는 경험을 하고 싶었고 만족스러운 프로젝트였습니다. 문제들 해결하면서 리액트 문법에 익숙해질 수 있었습니다. 팀 단위로 일하는 것의 장점을 느낄 수 있었습니다!**|
