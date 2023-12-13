# 사용자의 ID와 이름, 전화번호 정보 받기
# 그런데~~ user.py는 "현재" 사용자가 누구인지 정보를 알아내는 것 => 공유 폴더를 만들 때 등 필요하기 때문. 따라서 여러개의 데이터를 처리할 필요가 없음. 그래서 단일 데이터 처리로 제작!!!!

import Package.DB_select as select
import requests
import sys
import json

# 한글 깨짐 해결
sys.stdout.reconfigure(encoding='utf-8')



# 클라이언트 & 서버와 입력매개변수 연결 확인
def python_function(param1, param2, param3) :
    
    # 파이썬 함수에서 수행할 작업 수행
    user_id = select.select(param1, param2, param3)

    # 결과 출력
    print(user_id)

# 명령줄 인수로부터 전달된 값 가져오기
param1 = sys.argv[1] if len(sys.argv) > 1 else None
param2 = sys.argv[2] if len(sys.argv) > 2 else None
param3 = sys.argv[3] if len(sys.argv) > 3 else None

# 파이썬 함수 호출
python_function(param1, param2, param3)




# # 여러 개의 파이썬 파일 실행(서버와 통신)
# url = 'http://localhost:5000/api/callPythonScripts/manyPythonFile'
# response = requests.get(url)

# if response.status_code == 200:
#     data = response.json()
#     print(data['result'])
# else:
#     print(f"Failed to call Python scripts. Status code: {response.status_code}")
















# DB와 연결해서 정보 가져오기
# user_id = 'soojin'
# user_name = '용수진'
# user_tel = '010-0000-0000'

# DB 연결해서 user table 정보 가져오기
# user_id = select.select('user', 'user_id', "NAME = '수진'")


