# import required libraries
from webptools import dwebp
import cv2
import numpy as np
import os

currentDir = os.path.dirname(os.path.realpath(__file__))
imageRootDir = os.path.abspath(currentDir + '/../public/collections')
for file in os.listdir(imageRootDir):
	if file.endswith('.webp'):
		imageRoot = imageRootDir + '/' + file[:-5]

		# convert webp to png
		dwebp(input_image=imageRoot + '.webp', output_image=imageRoot + '.png', option='-o')

		# read the input image

		img = cv2.imread(imageRoot + '.png', cv2.IMREAD_UNCHANGED)
		brd = cv2.copyMakeBorder(
			img, top=29, bottom=29, left=0, right=0,
			borderType=cv2.BORDER_CONSTANT,
			value=[0,0,0,0]
		)

		# find the height and width of image
		# width = number of columns, height = number of rows in image array
		rows,cols,ch = brd.shape

		# define four points on input image
		pts1 = np.float32([[0,0],[256,0],[0,256],[256,256]])

		# define the corresponding four points on output image
		pts2 = np.float32([[80,85],[157,103],[80,170],[157,190]])

		# get the perspective transform matrix
		M = cv2.getPerspectiveTransform(pts1,pts2)

		# transform the image using perspective transform matrix
		dst = cv2.warpPerspective(brd,M,(cols, rows),flags=cv2.INTER_LINEAR)

		# write the transformed image
		cv2.imwrite(imageRoot + '_generic.png', dst)
