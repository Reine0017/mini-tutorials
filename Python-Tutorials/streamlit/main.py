import streamlit as st 
import imutils
from PIL import Image
import numpy as np

st.title("My Streamlit Image Resizer")

content_file = st.sidebar.file_uploader("Choose a Content Image", type=["png", "jpg", "jpeg"])

imgWidth = st.sidebar.number_input('Resized Image Width', 1, step=1)

if content_file is not None and imgWidth>1:
  content = Image.open(content_file)
  content = np.array(content)
  content = imutils.resize(content, width=imgWidth)

  st.image(content, clamp=True)
