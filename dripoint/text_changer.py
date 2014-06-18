import sys
import re

f = open(sys.argv[1],"r")
reg = re.compile("exports\..+?(?= )")
count = 0

for line in f:
	if "exports." in line:
		#print(line)
		cur_name = re.findall("exports\..+? ",line)
		if cur_name:
			fname = cur_name[0].strip(' ')
			print(fname)