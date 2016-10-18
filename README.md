# nodejs-start

a startup of nodejs project, list of libs:

*winston - Logging
*pm2     - process mgmt

## Development Workflow

### Install

```
npm install 
```
### Test

```
node startup worker 3000
pm2 monit
pm2 logs 0
cat log/info.log
pm2 stop all
pm2 delete all
node src/entry.js worker 3000
```

## License

Apache License 2.0
