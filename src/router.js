import {version} from '../package.json';
import path from 'path';
import axios from 'axios';

var resize = require('./resize');

class AppRouter {

  constructor(app){
    this.app = app;
    this.initRouter();
  }

  getDateString() {
    let date = new Date();
    let year = date.getFullYear();
    let monthIndex = date.getMonth() + 1;
    let day = date.getDate();

    let dateStr = year + '-' + monthIndex + '-' + day;
    return dateStr;
  }

  initRouter(){

    const app = this.app;
    const uploadDir = app.get('storageDir');
    const upload = app.get('upload');

    /*app.get('/', (req,res,next)=>{
      return res.status(200).json({
        version: version
      })
    });*/

    app.post('/api/updEvtErl', async(req,res,next)=>{
      console.log(req.body);
      /*const data = req.body;
      const body = {
        'MEMID': data.MEMID,
        'CTRID': 'JCH',
        'EvtCod': data.EvtCod,
        'ErlName': data.ErlName,
        'ErlDat': this.getDateString(),
        'IsMbr': '1',
        'ErlPhone': '12345678',
        'EvtCosID': '1',
        'EvtAct': data.Reserve?'RSVD':'CANN'
      };*/

      axios.post('http://10.0.48.22/EHMS/api/updEvtErl/', req.body, {
        headers: {
          Accept: 'application/x-www-form-json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res =>{
        console.log(res.data.msg);
        //console.log(json);
        if(res.data.rtn === "0"){
          if(reserve){
            //ToastAndroid.show('已成功留位!',ToastAndroid.SHORT);
            return res.status(200).json({
              received: false
            });
          }else{
            //ToastAndroid.show('已取消留位!',ToastAndroid.SHORT);

            return res.status(200).json({
              received: true
            });
          }
        }else{
          console.log("Failed to reserve");
          return res.status(404).json({
            failed: true
          });
        }

      }).catch(err=>{
        console.log(err.message);
        return res.status(404).json({
          failed: true
        });
        //ToastAndroid.show('錯誤!',ToastAndroid.SHORT);
      });
    });

    app.get('/api/activities', async (req,res,next)=>{
      var _activities = await axios.get('http://10.0.48.22/EHMS/api/getEvtResBed/');
      ///console.log(_meal.data)
      return res.status(200).json({
        activities: _activities.data.EvtResBed
      });
    });


    app.get('/api/todayMeal', async (req,res,next)=>{
      var _meal = await axios.get('http://10.0.48.22/EHMS/API/getDiet/' + this.getCurrentDateString());
      ///console.log(_meal.data)
      return res.status(200).json({
        meal: _meal.data
      });
    });

    app.get('/api/changepw/:oldpw/:newpw',(req,res,next) =>{
        const fs = require('fs');
        const filePath = path.join(uploadDir,'server.json');
        var serverJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        //console.log(serverJson);
        var allowed = serverJson.password === req.params.oldpw? true:false;

        if(allowed){
          const content = {
            password: req.params.newpw
          };
          const fs = require('fs');
          const filePath = path.join(uploadDir,"server.json");

          fs.writeFileSync(filePath,JSON.stringify(content,null,4));
        }

        return res.json({
          changed: allowed
        });
      });

    app.get('/api/login/:password',(req,res,next)=>{

      const fs = require('fs');
      const filePath = path.join(uploadDir,'server.json');
      var serverJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      //console.log(serverJson);
      var allowed = serverJson.password === req.params.password? true:false;

      return res.json({
        verified: allowed
      })
    });

    app.post('/api/upload',upload.array('files'), (req,res, next)=>{
      //console.log('Received file', req.files);
      return res.json({
        status: 'ok'
        //files: req.files
      })
    });

    app.post('/api/update/:fileName/:json',(req,res, next)=>{
      //console.log('Received json');
      const content = JSON.parse(req.params.json);
      const fs = require('fs');
      const filePath = path.join(uploadDir,req.params.fileName);

      fs.writeFileSync(filePath,JSON.stringify(content,null,4));
      return res.json({
        update: content
      });
    });

    app.get('/api/download/:name', (req,res,next)=>{

      var fileName = req.params.name;
      var filePath = path.join(uploadDir,fileName);

      const fs = require('fs');
      if(!fs.existsSync(filePath)){
        filePath = path.join(uploadDir,'no_image.png');
        return res.download(filePath,'no_image.png',(err)=>{});
      }

      console.log('donwloading ' + fileName);

      var fileNameArray = fileName.split('.');
      var fileType = fileNameArray[1].toLowerCase();
      //console.log(fileType)
      var ValidImageTypes = ["jpeg", "png","jpg","JPG","PNG"];
      if (ValidImageTypes.includes(fileType)) {
        console.log('resizing');

        var sizeOf = require('image-size');
        var dimensions = sizeOf(filePath);
        //console.log(dimensions.width, dimensions.height);
        for(var i=0;i<100;i++){
          dimensions.width *= 0.98;
          dimensions.height *= 0.98;
          if(dimensions.width < 512 || dimensions.height < 512){
            break;
          }
        }

        //res.type('image/png');
        resize(filePath,fileType,Math.floor(dimensions.width),Math.floor(dimensions.height)).pipe(res);
      }else {
        console.log('not resizing')
        return res.download(filePath,fileName,(err)=>{
          if(err){
            //console.log('File download error')
          }else{
            //console.log('File download available')
          }
        });
      }
    });

    app.get('/api/delete/:name', (req,res,next)=>{
      const fileName = req.params.name;
      const filePath = path.join(uploadDir,fileName);
      var fs = require('fs');
      try{
        fs.unlinkSync(filePath);
      }
      catch(err){
        console.log('Non-existing file removing: ' + fileName)
      }
      console.log('file removed: ' + fileName)
      res.json({
        deleted: true
      });
    });

    console.log('App router initialized');
  }

  getCurrentDateString() {
    let date = new Date();
    let year = date.getFullYear();
    let monthIndex = date.getMonth() + 1;
    let day = date.getDate();

    let dateStr = year + '-' + this.addZeroIfSingle(monthIndex) + '-' + this.addZeroIfSingle(day);
    //console.log(dateStr);
    //return '2018-02-08';
    return dateStr;
  }

  addZeroIfSingle(num){
    if(num < 10){
      return '0' + String(num);
    }else{
      return '' + String(num);
    }
  }

}

export default AppRouter;
