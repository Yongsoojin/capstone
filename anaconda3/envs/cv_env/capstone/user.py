# 사용자의 ID와 이름, 전화번호 정보 받기
# 그런데~~ user.py는 "현재" 사용자가 누구인지 정보를 알아내는 것 => 공유 폴더를 만들 때 등 필요하기 때문. 따라서 여러개의 데이터를 처리할 필요가 없음. 그래서 단일 데이터 처리로 제작!!!!

import Package.DB_select as select

# DB와 연결해서 정보 가져오기
# user_id = 'soojin'
# user_name = '용수진'
# user_tel = '010-0000-0000'

# DB 연결해서 user table 정보 가져오기
user_id = select.select('user', 'user_id', "NAME = '수진'")


print('user_id : ', user_id)