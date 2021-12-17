import streamlit as st 
import pandas as pd
from PIL import Image

#st.write("""# My First App""")
st.title("My First App")

content_file = st.sidebar.file_uploader("Choose a Content Image", type=["png", "jpg", "jpeg"])
if content_file is not None:
  content = Image.open(content_file)
  st.image(content, channels='BGR', clamp=True)
