from flask import Flask, request, jsonify
import cv2
import numpy as np
import face_recog_vid as fr

app = Flask(__name__)

fr.RecognizeFaces()

@app.route('/recognize', methods=['POST'])
def video_feed():
    return Response(process_video(), mimetype='multipart/x-mixed-replace;
    boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)
