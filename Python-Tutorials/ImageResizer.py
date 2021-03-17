from cv2 import cv2
import os

def image_resize(image, width=None, height=None):
  dim = None
  (h,w) = image.shape[:2]

  #if width and height both None
  if width is None and height is None:
    return image

  #if width is passed in
  elif height is None:
    ratio = width/float(w)
    dim = (width, int(h*ratio))

  #if height is passed in
  elif width is None:
    ratio = height/float(h)
    dim = (int(w*ratio), height)

  #if both height and width are passed in (dont keep aspect ratio)
  else:
    dim = (width,height)

  resized = cv2.resize(image, dim, interpolation=cv2.INTER_AREA)

  return resized

def main():
  folder = "./originalFolder"
  newResizedFolder = "./resizedFolder/"
  
  #read in images from a folder
  for filename in os.listdir(folder):
    img = cv2.imread(os.path.join(folder, filename))
    if img is not None:
      newResizedImg = image_resize(img, height=100)
      newFileName = newResizedFolder + filename
      cv2.imwrite(newFileName, newResizedImg)
      
  return

if __name__=="__main__":
  main()