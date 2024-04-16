
npx sequelize-cli model:generate --name Tasks --attributes taskId:string,name:string,description:string,priority:string,status:string

cd src
npx sequelize-cli db:migrate

npx sequelize-cli db:migrate:undo

npx sequelize-cli db:migrate:undo:all"# appstrailTaskNodejs" 
