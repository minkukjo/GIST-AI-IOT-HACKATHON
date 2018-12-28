GIST-AI-IOT-HACKATHON RASPBERRY PART 기술문서
==============================================

조민국 파트 : 라즈베리파이를 이용한 GOOGLE SPEECH API 사용 및 형태소 분석 후 서버 전송

## 원 코드 출처

* https://gist.github.com/mabdrabo/8678538 // pyaudio를 사용한 목소리 녹음
* https://github.com/GoogleCloudPlatform/python-docs-samples // 구글에서 제공하는 SPEECH-API 작동 python 코드원본
* http://diy-project.tistory.com/91 // 설치 및 가이드 참조 사이트
* http://konlpy.org/en/latest/ // 한국어 형태소 분석기 라이브러리

### 제작과정
    1. 설치 및 가이드 참조 사이트를 참고하여 기본적인 라즈베리파이 마이크 셋팅 및 구글 API 사용 권한 따내기.
    2. 목소리 녹음 코드를 모듈화 하여 SPEECH-API 코드를 개량한 코드에서 녹음되 음성파일을 읽어와 Recognition
    3. konlpy의 Okt를 이용하여 형태소 분석
    4. 분서 결과를 JSON을 만듦
    5. 소켓 통신(라즈베리는 클라이언트)으로 서버에 JSON 파일 전송
    
    
    
    
    
    
    
![default](https://user-images.githubusercontent.com/43809168/50504045-2e5dd780-0aae-11e9-8d4f-277df58f491b.jpeg)
