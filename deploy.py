import json
import subprocess
from flask import Flask, render_template, request, url_for


app = Flask(__name__)


@app.route('/deploy', methods=['POST'])
def deploy():
    repo_dir = '/home/ubuntu/repo-name.git'
    application_dir = '/home/ubuntu/application'
    git_bin_path = '/usr/bin/git'
    update = False
    payload = json.loads(request.form['payload'])

    # merging and pushing to bitbucket, the commits array will be empty.
    # no way to know what branch was pushed to, so we will do an update.
    if payload.get("commits",None)==None:
        update = True
    else:
        for each_commit in payload["commits"]:
            branch = each_commit["branch"]
            if branch=='production' or (each_commit["branches"] and 'production' in each_commit["branches"]):
                update = True
    if update:
        # git checkout to the application directory
        git_fetch = 'cd '+repo_dir+' && ' + git_bin_path + ' fetch'
        print git_fetch
        subprocess.call(git_fetch, shell=True)
        git_checkout = 'cd '+repo_dir+' && ' + 'GIT_WORK_TREE=' + application_dir + ' ' + git_bin_path + ' checkout -f'
        print git_checkout
        subprocess.call(git_checkout, shell=True)
        rebuild_docker_image = 'cd ' + application_dir + '/qsc && ' + 'docker build --tag image-name .'
        print rebuild_docker_image
        subprocess.call(rebuild_docker_image, shell=True)
        stop_all_containers = 'docker stop $(docker ps -a -q)'
        print stop_all_containers
        subprocess.call(stop_all_containers, shell=True)
        remove_all_containers = 'docker rm $(docker ps -a -q)'
        print remove_all_containers
        subprocess.call(remove_all_containers, shell=True)
        start_rails_app_container = 'docker run -p 80:3000 -d image-name'
        print start_rails_app_container
        subprocess.call(start_rails_app_container, shell=True)
        print 'production updated'

    return "payload recieved"

if __name__ == '__main__':
  app.run(
        host="0.0.0.0",
        port=int("8080"),
        debug=True
  )
