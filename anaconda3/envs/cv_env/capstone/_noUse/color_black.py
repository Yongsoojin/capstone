# Pillow 라이브러리 불러오기
from PIL import Image
import cv2

# 이미지 불러와서 img라는 변수에 입력
img = Image.open('C:/Users/rlawn/opencv/cv_env/capstone/image/testimg/2.jpg')

# RGB로 표현된 컬러 이미지를 흑백으로 변경
img_gray = img.convert("L").save('C:/Users/rlawn/opencv/cv_env/capstone/image/after/color_black.jpg')

# 흑백으로 변환된 이미지 출력
img_gray.show()

# 필터 처리 후 이미지 저장
# cv2.imwrite('C:/Users/rlawn/opencv/cv_env/capstone/image/after/color_black.jpg', img_gray)
