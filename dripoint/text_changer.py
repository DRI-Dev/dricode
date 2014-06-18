import sys
import re

f = open(sys.argv[1],"r")
filearray = []
reg1 = re.compile("exports\..+? ")
reg2 = re.compile("\.js = .+?;")
count = 0

for line in f:
	filearray.append(line)
	count += 1
	if "exports." in line:
		#print(line)
		cur_name = re.findall(reg1,line)
		if cur_name:
			fnname = cur_name[0].strip(' ')
			for ln in f:
				count += 1
				if ".js = " in ln:
					js = re.findall(reg2,ln)
					if js:
						mod_js = ".js = " + fnname
						nline = ln.split(".js = ")[0] + mod_js + ';\n'
						#print(nline)
						filearray.append(nline)
						break
				else:
					filearray.append(ln)
	
name, ext = sys.argv[1].split('.')
n = open(name + '_mod.' + ext,"a");
	
for line in filearray:
	n.write(line)


					
					
			