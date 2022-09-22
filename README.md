# SeeGun(시건)
![Logo](https://github.com/osamhack2022/Web_IOT_SeeGun_8div/blob/main/SeeGun.jpg?raw=true)



## ❤ 프로잭트 소개
💡 [관련링크](https://www.donga.com/news/Society/article/all/20220810/114893200/2)


> **올해 8월 10일, 한 군사 간부가 총과 실탄를 부대 밖으로 들고나와 초등학교 인근에서 총을 이용해 자살한 안타깝지만 위험했던 사건이 뉴스에 보도되었습니다.  이 사례를 통해 알 수 있듯이, 총기 사고는 최근까지도 지속적으로 발생해왔습니다. 이러한 총기 사고가 발생하지 않기 위해 총기 관리에 있어 경각심을 가져야 하고, 그와 더불어 더욱 더 철저하고 정확한 관리 시스템이 필요합니다. 하지만 사람이 눈으로 직접 총기 현황을 파악함에 있어서 누락이 발생하기 쉽고, 엄격한 관리가 쉽지 않습니다. 따라서 저희 팀은 총기 관리 교차 검증이 가능한 총기 관리 서비스를 구축하고자 합니다.** **실제 군 생활을 하면서 장병들 모두 총기 관리가 매우 중요함을 인식하고 있지만, 관리에 있어서 번거로운 점 또한 몸소 많이 느끼고 있습니다 . 총기를 관리하면서 교차 검증이 가능한 관리 서비스가 존재한다면 근무간 총기 실셈에 대한 불편함과 실수 등이 줄어듭니다. 더 나가 총기로 인해 발생하는 다양한 사고를 막을 수 있습니다. 저희 팀은 총기 보관에 대한 전반적인 관제 및 관리 서비스를 만들고자 합니다. IoT센서와 AI기술을 활용하여 총기 보관 현황을 파악하고, React와 같은 웹 프레임워크를 이용하여 사용자에게 직관적인 총기 관리 인터페이스를 제공합니다. 총기 보관 현황 및 반입/반출 경위를 SQLite와 같은 DB에 기록하고 가져오는 과정을 통해 실시간으로 파악할 수 있고, 이를 활용하여 평시, 근무, 훈련 간 총기 관리 부실을 방지할 수 있습니다. 더불어 이 시스템은 군 내부 뿐만 아니라 민간 총기 사용 기관에서 까지 확장 가능한 아이템입니다.**

## 🔔 기능 설명
- **관리자(근무자) 로그인/로그아웃**
- **실시간 총기 현황 확인 UI**
- **최근 반입/반출 이력, 시스템 접근 이력(DB, 로그 수집)**
- **경고(alert) 시스템 - 비정상적인 행위 탐지**
- IoT 센서를 이용한 **총기 유무 확인**
- AI를 통해 IoT센서와의 총기 정보 이중 검증
    
    
## 🛠 기술 스택 (Technique Used)
### Front-end
<img src="https://img.shields.io/badge/React-18.0.4-61DAFB?style=flat&logo=React&logoColor=white"/>

### Back-end



## 설치 안내 (Installation Process)

#### NPM
```bash
$ git clone https://github.com/osamhack2022/Web_IOT_SeeGun_8div.git
$ npm install
$ npm run start
```

#### YARN
```bash
$ git clone https://github.com/osamhack2022/Web_IOT_SeeGun_8div.git
$ yarn
$ yarn start
```

### **개인 역할 분담**

- 박성재: 아두이노 센서 조립 및 설정, 배치
- 김준서: Backend 웹 통신 개발
- 김사윤: DB 제작 및 관리
- 최종현: FrontEnd 개발 및 UI/UX 디자인
- 조현철: AI 텍스트 및 이미지 분류

WEB - DB ⇒ 정보를 읽고 기록하는 과정, 정보 수정과 이벤트의 로그 수집

WEB - IoT ⇒ 아두이노 센서정보를 웹에서 읽고 분석 및 판단하여 이벤트를 탐지

IoT - WEB - AI ⇒ IoT와 AI가 수집하는 정보의 교차 검증을 통해 정보의 정확도 상승

### WEB

1. **로그인/로그아웃 및 계정 권한 부여 기능**
 직책(군수관리자, 지휘관 등)에 따라 데이터의 읽고 수정할 수 있는 권한을 차등 부여하여 악의적 정보 조작과 같은 보안 사고를 방지
2. **실시간 총기 현황을 한 눈에 파악할 수 있는 UI 구성**
Chart 오픈소스를 이용하여 총기 유무, 소유자, 소속 등 총기 관리에 필요한 정보를 직관적으로 보여줍니다. 
3. **경고 시스템**
 총기를 관리함에 있어서 비정상적인 행위(센서 정보 변화 등)를 감지하였을 때, 인터페이스에서 경고를 표시하여 관리자와 근무자에게 알림을 줍니다. 
 또한 부가적으로 총기함의 잠금상태 또한 파악하여 비정상적인 상태를 파악해서 경고를 표시하게 합니다.
4. **Frontend** 
 React를 이용한 Single Web Application을 기반으로 반응형 웹페이지를 제작합니다. backend에서 API 등 HTTP 통신은 axios를 사용하여 연결하고 props drilling을 방지하기 위해 전역 상태 관리 라이브러리인 recoil 또는 redux-toolkit을 사용하여 프로젝트 상태 관리를 조금 더 쉽게 구성할 것입니다.
5. **Backend** 
 NodeJS를 통해 API를 불러오고 DB에 정보를 기록하거나 가져오는 기능을 수행합니다. 우선 express-server 라이브러리를 통해 빠르게 서버를 구축하여 API 서비스를 제공하고 [socket.io](http://socket.io) 를 이용하여 arduino 정보를 수신 받아서 DB에 들어갈 데이터를 가공 및 mapping하기 위해 TypeORM나 Sequelize같은 ORM 라이브러리를 사용하여 코드를 작성할 것입니다.

 

### DB

1. **DB를 이용하여 총기 정보 기록** 
 Node.js를 통해 웹 애플리케이션에서 정보의 수정 및 삭제를 진행합니다. 이러한 정보에는 총기 번호, 총기의 소유자, 소속, 계급과 같은 기본 정보도 있으며, 최근 반입/반출 이력과 총기 열외 시 열외 사유 등 총기 현황 파악에 있어서 중요한 정보들이 있습니다. 이를 테이블에 항목별로 분류합니다. 항목별로 정렬을 수행할 수 있는 기능을 추가하여 원하는 정보에 맞는 총기 현황을 파악할 수 있도록 도와줍니다.
2. **정보 읽기/기록/수정/삭제 시에 로그를 수집하도록 합니다.**
 Backend에서 DB의 어떤 정보를 읽은 시간과 같은 정보부터, 총기 반입 예정 시간을 조정하거나 반출 시간을 조정하는 등 총기 관리에 있어서 중요한 정보들이 어떻게 기록되고 수정되는지 로그를 기록합니다. 만일 사고가 발생했을 때 로그를 분석하여 초도대응 및 사고 경위 분석이 원활하게 이어질 수 있도록 합니다. 또한 로그 수집을 통해 비정상적인 데이터 조작이 발생하였을 때 어떤 정보가 침해되었는지 빠르게 파악할 수 있게 합니다.
3. **총기 관리에 있어서 비정상적인 행위를 기록, 수집**
 IoT센서를 통해 감지된 비정상적인 행위에 대해 시간과 장소 등을 기록하고 어떠한 비정상행위가 발생하였는지 수집합니다. 비정상적인 행위에는 인가하지 않은 총기 반출, 총기 반입 지연, 총기함에 보관된 총기 개수 불일치 등이 있습니다.
4. **접속 기록 관리 및 계정 보안**
 관리 시스템에 등록된 계정들에 대해, 해당 계정들의 접속 기록을 수집하여 관리 시스템 침해 사고가 발생했는지 파악하고 대응 할 수 있도록 합니다.

## IoT(사물인터넷)

아두이노 센서를 활용하여 총기 잠금 및 보관 상태 확인합니다.

- 여러 개의 IOT 센서를 활용하여 각 센서 간의 정보를 교차 검증해 총기 보관 상태 파악에 있어서 에러를 줄이고 정확도를 높입니다.
- 초음파 센서를 이용해 총기걸이와 총기 간의 거리를 변화 측정해서 총기가 잘 보관되어 있는지 감지합니다.
- 적외선(IR) 센서의 장애물 감지 기능을 이용하여 총기가 올바른 상태로 보관되어 있는지 확인합니다.
- 무게 센서를 활용하여 초음파 센서와 적외선 센서가 감지할 수 없는 정보를 통해 현재 보관된 장애물이 총기가 맞는지 다시 한번 확인합니다. 무게의 기준은 일반적인 K2(멜빵만 포함)의 무게인 3.28kg ~ 3.5kg의 범위에 맞추어서, 해당 무게의 범위를 벗어나면 알림을 주도록 합니다.

# AI

- AI를 활용한 이미지 및 텍스트 분류 작업
 OpenCV과 같은 텍스트 분류 오픈소스를 이용하여 보관된 총기의 총기 번호가 올바른지 분석하여 잘못된 총기가 보관되었을 시에 이를 감지하도록 합니다.

# ❤효과 및 전망

- 목표 시장은 총기를 사용하는 대한민국 군부대 및 군사 관련 시설입니다.
- 군 뿐만 아니라 경찰서나 교도소 등 총기를 사용하는 다양한 기관에서도 활용이 가능하여 전망이 밝습니다.
- 사람과 기기가 총기 현황을 동시에 파악하기 때문에 상호가 분석한 정보를 교차 검증하여 실수를 최소화할 수 있고 총기 실셈의 정확도를 높일 수 있습니다.  또한, 각종 열외 사유를 한 눈에 파악하여 행정 업무에도 활용할 수 있습니다.
- 총기와 관련된 문제 발생 시, 즉각적으로 대응이 가능하고 초도대응이 빠르게 이루어질 수 있습니다. 발생한 사고에 대해 해당 기간의 로그를 분석하여 문제 원인을 쉽게 파악하고 이후의 사고를 예방할 수 있습니다.
- 민간인이나 입대를 앞둔 장병 뿐만 아니라 현역 장병의 총기 사고에 대한 불안감을 낮춰주고 총기 관리에 대한 신뢰가 증가합니다.
- 실시간 파악을 통해 인력의 낭비와 시간의 낭비를 줄일 수 있습니다.
- 철저한 관리를 통해 군 장비에 대한 기강을 확립하고 부대 안보에 기여할 수 있습니다.
 
<!--
| ❤Profile | 🧡Name | 💛Role | 💚Github | 💙E-mail |
|---------|------|------|--------|--------|
||최종현|FrontEnd 개발 및 UI/UX 디자인|j0n9hyun|j0n9hyun@kakao.com|
|         |      |      |        |        |
|         |      |      |        |        |

-->


<h2 id="team"> 💎 팀 정보 (Team Information)</h2>

<table width="900">
<thead>
<tr>
<th width="100" align="center">Profile</th>
<th width="100" align="center">Name</th>
<th width="250" align="center">Role</th>
<th width="150" align="center">Github</th>
<th width="300" align="center">E-mail</th>
</tr> 
</thead>
<tbody>
	
<tr>
<td width="100" align="center"><img src="https://avatars.githubusercontent.com/u/16969364?v=4" width="60" height="60"></td>
<td width="100" align="center">최종현</td>
<td width="250"><small>FrontEnd 개발 <br/>UI/UX 디자인</small></td>
<td width="150" align="center">	
	<a href="https://github.com/j0n9hyun" target="_blank">
	<img src="https://img.shields.io/badge/j0n9hyun-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="300" align="center">
<a href="mailto:j0n9hyun@kakao.com"><img src="https://img.shields.io/static/v1?label=&message=j0n9hyun@kakao.com&color=56347C&style=flat-square&logo=KakaoTalk"></a>
</tr>
	
<tr>
<td width="100" align="center"><img src="https://avatars.githubusercontent.com/u/112786665?v=4" width="60" height="60"></td>
<td width="100" align="center">김준서</td>
<td width="250">BackEnd 개발</td>
<td width="150" align="center">	
	<a href="https://github.com/oesnuj" target="_blank">
	<img src="https://img.shields.io/badge/oesnuj-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="300" align="center">
<a href="mailto:oesnuj@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=oesnuj@gmail.com&color=56347C&style=flat-square&logo=Gmail"></a>
</tr>

<tr>
<td width="100" align="center"><img src="https://avatars.githubusercontent.com/u/29205596?v=4" width="60" height="60"></td>
<td width="100" align="center">김사윤</td>
<td width="250">DataBase 제작 및 관리</td>
<td width="150" align="center">	
	<a href="https://github.com/Sayoon210" target="_blank">
	<img src="https://img.shields.io/badge/Sayoon210-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="300" align="center">
<a href="mailto:sayoon210@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=sem201@naver.com&color=56347C&style=flat-square&logo=Naver"></a>
</tr>
	
<tr>
<td width="100" align="center"><img src="https://avatars.githubusercontent.com/u/38523683?v=4" width="60" height="60"></td>
<td width="100" align="center">박성재</td>
<td width="250">아두이노 센서 조립 및 설정</td>
<td width="150" align="center">	
	<a href="https://github.com/sem201" target="_blank">
	<img src="https://img.shields.io/badge/oesnuj-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="300" align="center">
<a href="mailto:sem201@naver.com"><img src="https://img.shields.io/static/v1?label=&message=sem201@naver.com&color=56347C&style=flat-square&logo=Naver"></a>
</tr>

<tr>
<td width="100" align="center"><img src="https://avatars.githubusercontent.com/u/57556865?v=4" width="60" height="60"></td>
<td width="100" align="center">조현철</td>
<td width="250">AI 텍스트 및 이미지 분류</td>
<td width="150" align="center">	
	<a href="https://github.com/chswo13" target="_blank">
	<img src="https://img.shields.io/badge/chswo13-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="300" align="center">
<a href="mailto:chswo13@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=chswo13@gmail.com&color=56347C&style=flat-square&logo=Gmail"></a>
</tr>
</tbody>
</table>

## 저작권 및 사용권 정보 (Copyleft / End User License)
 * [MIT](https://github.com/osam2020-WEB/Sample-ProjectName-TeamName/blob/master/license.md)

This project is licensed under the terms of the MIT license.
