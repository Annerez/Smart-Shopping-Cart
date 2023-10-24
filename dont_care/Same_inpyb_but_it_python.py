!pip install ultralytics
from ultralytics import YOLO
!unzip /content/drive/MyDrive/PSCP.v2i.yolov8.zip
!yolo train model=yolov8n.pt data=/content/data.yaml epochs=30 imgsz=640
model = YOLO('/content/runs/detect/train/weights/best.pt')
results = model('/content/test/images/11_jpg.rf.ea13a255d9e73361c835ee8dade28ec1.jpg')