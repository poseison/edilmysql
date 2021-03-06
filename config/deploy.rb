set :application, 'edilmysql'
set :repo_url, 'https://github.com/poseison/edilmysql.git'

server '178.62.18.183', user: 'deploy', roles: %w{web app}

set :deploy_to, '/home/deploy/myapp'

set :linked_files, %w{config/database.yml}
set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}

namespace :deploy do

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      execute :touch, release_path.join('tmp/restart.txt')
    end
  end

  after :publishing, 'deploy:restart'
  after :finishing, 'deploy:cleanup'
end